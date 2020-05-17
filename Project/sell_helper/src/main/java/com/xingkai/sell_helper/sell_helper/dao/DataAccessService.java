package com.xingkai.sell_helper.sell_helper.dao;

import java.sql.ResultSet;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.xingkai.sell_helper.sell_helper.model.Account;
import com.xingkai.sell_helper.sell_helper.model.Character;
import com.xingkai.sell_helper.sell_helper.model.Game;
import com.xingkai.sell_helper.sell_helper.model.ServerIsSelected;

import com.xingkai.sell_helper.sell_helper.model.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository("postgres")
public class DataAccessService implements AccountDao, GameDao, SelectedAccountDao, IsServerSelectedDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    /**
     * @param isSelected
     * @return int
     */
    @Override
    public int setServerIsSelected(ServerIsSelected isSelected) {
        // clear all record in this table
        jdbcTemplate.update("DELETE FROM is_server_selected");
        final String sql = "INSERT INTO is_server_selected (is_selected) VALUES (?)";
        // define query arguments
        Object[] params = new Object[] { isSelected.getServerStatus() };

        // define SQL types of the arguments
        int[] types = new int[] { Types.BOOLEAN };

        jdbcTemplate.update(sql, params, types);
        return 1;
    }

    /**
     * @return boolean
     */
    @Override
    public boolean getServerIsSelected() {
        // check if a default status in table (false)
        final String selectSql = "SELECT is_selected FROM is_server_selected";
        List<ServerIsSelected> statusList = jdbcTemplate.query(selectSql, (ResultSet resultSet, int i) -> {

            boolean status = resultSet.getString("is_selected").equals("t") ? true : false;
            return new ServerIsSelected(status);
        });

        // if not, insert false

        if (statusList.size() == 0) {
            final String insertSql = "INSERT INTO is_server_selected (is_selected) VALUES (?)";
            // define query arguments
            Object[] params = new Object[] { false };

            // define SQL types of the arguments
            int[] types = new int[] { Types.BOOLEAN };
            jdbcTemplate.update(insertSql, params, types);
            return false;
        } else {
            return statusList.get(0).getServerStatus();
        }
        // otherwise return is

    }

    /**
     * @param account
     * @return int
     */
    @Override
    public int setSelectedAccounts(Account account) {
        final String insertSql = "INSERT INTO selected_accounts(selected_account_id) VALUES (?)";

        // define query arguments
        Object[] params = new Object[] { account.getId() };

        // define SQL types of the arguments
        int[] types = new int[] { Types.INTEGER };

        jdbcTemplate.update(insertSql, params, types);

        return 1;
    }

    /**
     * @return ArrayList<Account>
     */
    @Override
    public ArrayList<Account> getSelectedAccounts() {
        final String selectSql = "SELECT selected_account_id FROM selected_accounts";
        return (ArrayList) jdbcTemplate.query(selectSql, (ResultSet resultSet, int i) -> {
            int id = Integer.parseInt(resultSet.getString("selected_account_id"));
            return new Account(id);
        });// YOU MAY define a getAccount method

    }

    /**
     * @param game
     * @param servers
     * @return int
     */
    @Override
    public int insertGame(Game game, String[] servers) {

        // Game newGame = new Game(game.getName(), servers);
        // you have to insert into two tables: game and game_servers
        final String insertSqlGame = "INSERT INTO game(game_name) VALUES(?)";
        // define query arguments
        Object[] params = new Object[] { game.getName() };

        // define SQL types of the arguments
        int[] types = new int[] { Types.VARCHAR };

        jdbcTemplate.update(insertSqlGame, params, types);

        final String insertSqlServer = "INSERT INTO game_servers(belong_to_game,server_name) VALUES(?,?)";
        for (String server : servers) {
            Object[] params1 = new Object[] { game.getName(), server };

            // define SQL types of the arguments
            int[] types1 = new int[] { Types.VARCHAR, Types.VARCHAR };

            jdbcTemplate.update(insertSqlServer, params1, types1);
        }
        return 1;
    }

    /**
     * @return ArrayList<Game>
     */
    @Override
    public ArrayList<Game> getGames() {
        final String selectSql = "SELECT game_name FROM game";
        final String selectServerName = "SELECT belong_to_game, server_name FROM game_servers ";
        List<Game> games = jdbcTemplate.query(selectSql, (ResultSet resultSet, int i) -> {
            String name = resultSet.getString("game_name");
            return new Game(name);
        });// YOU MAY define a getAccount method
        List<Server> servers = jdbcTemplate.query(selectServerName, (ResultSet resultSet, int i) -> {
            String name = resultSet.getString("server_name");
            String gameName = resultSet.getString("belong_to_game");
            return new Server(name, gameName);
        });

        ArrayList<Game> result = new ArrayList<>();
        for (Game game : games) {
            ArrayList<String> serverName = new ArrayList<>();
            for (Server server : servers) {
                if (game.getName().equals(server.getBelongToGame())) {
                    serverName.add(server.getName());
                }
            }
            result.add(new Game(game.getName(), serverName));

        }

        return result;
    }

    /**
     * @param gameName
     * @return Optional<Game>
     */
    @Override
    public Optional<Game> getGameByName(String gameName) {
        final String selectSql = "SELECT game_name FROM game where game_name=?";
        Object[] params = new Object[] { gameName };
        return jdbcTemplate.query(selectSql, params, (ResultSet resultSet, int i) -> {
            String name = resultSet.getString("game_name");
            return new Game(name);
        }).stream().findFirst();

    }

    /**
     * find out accounts that contain a selection set of characters with specific
     * game's name and in a specific server
     * 
     * @param gameName   the game's name of a selected account
     * @param server     the server name that a selected account belongs to
     * @param characters an arraylist that contain characters of a selected account
     * @return Optional<Account> account could only have _id due to it is only used
     *         for update into selected account table which only have account's id
     */
    @Override
    public Optional<Account> getAccountsForGame(String gameName, String server, ArrayList<Character> characters) {
        // first use game's name and server name to find out a smaller set of accounts
        // in account table
        // second, find out who contains the characters list in the set of accounts. Do
        // it in account_characters table
        // if true, return its id, if not, next account

        // first, account table
        final String selectSqlFirst = "SELECT _id FROM account WHERE game_name=? AND server_name=?";
        Object[] params = new Object[] { gameName, server };
        List<Account> accountFirstSet = jdbcTemplate.query(selectSqlFirst, params, (ResultSet resultSet, int i) -> {
            int id = Integer.parseInt(resultSet.getString("_id"));
            return new Account(id);
        });

        // second, account_characters table
        // 1. for each account(we can use id to group them), group up all its
        // characters, store them into a List<Character> accountCharacters
        // 2. now implement an algorithm finding if the list contain all elements in
        // characters list.
        List<Account> results = new ArrayList<>();
        for (Account account : accountFirstSet) {
            final String sql = "SELECT character_name, lvl FROM account_characters WHERE belong_account_id=?";
            Object[] params1 = new Object[] { account.getId() };
            List<Character> accountCharacters = jdbcTemplate.query(sql, params1, (ResultSet resultSet, int i) -> {
                String name = resultSet.getString("character_name");
                int lvl = Integer.parseInt(resultSet.getString("lvl"));
                return new Character(name, lvl);
            });
            // 2

            for (Character character : characters) {// for every character in selectedCharacters
                List<Character> tempList = new ArrayList<>();
                for (Character accountCharacter : accountCharacters) {// for every character in the account
                    if (character.getName().equals(accountCharacter.getName()))
                        tempList.add(accountCharacter);
                }
                if (characters.equals(tempList))
                    results.add(account);
            }
        }

        return results.stream().findAny();
    }

}