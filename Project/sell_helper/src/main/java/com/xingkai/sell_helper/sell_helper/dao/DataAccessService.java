package com.xingkai.sell_helper.sell_helper.dao;

import java.sql.ResultSet;
import java.sql.Types;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.xingkai.sell_helper.sell_helper.model.Account;
import com.xingkai.sell_helper.sell_helper.model.Character;
import com.xingkai.sell_helper.sell_helper.model.Game;

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
    public int setSelectedServerName(String serverName) {
        // clear all record in this table
        jdbcTemplate.update("DELETE FROM selected_server");
        final String sql = "INSERT INTO selected_server (server_name) VALUES (?)";
        // define query arguments
        Object[] params = new Object[] { serverName };

        // define SQL types of the arguments
        int[] types = new int[] { Types.VARCHAR };

        jdbcTemplate.update(sql, params, types);
        return 1;

    }

    /**
     * get the name of server which is currently selected
     * 
     * @return String the name of the server
     */
    @Override
    public String getSelectedServerName() {
        final String selectSql = "SELECT server_name FROM selected_server";
        List<String> serverName = jdbcTemplate.query(selectSql, (ResultSet resultSet, int i) -> {
            String name = resultSet.getString("server_name");
            return name;
        });
        return serverName.get(0);
    }

    // /**
    // * @return boolean
    // */
    // @Override
    // public boolean getServerIsSelected() {
    // // check if a default status in table (false)
    // final String selectSql = "SELECT is_selected FROM is_server_selected";
    // List<ServerIsSelected> statusList = jdbcTemplate.query(selectSql, (ResultSet
    // resultSet, int i) -> {

    // boolean status = resultSet.getString("is_selected").equals("t") ? true :
    // false;
    // return new ServerIsSelected(status);
    // });

    // // if not, insert false

    // if (statusList.size() == 0) {
    // final String insertSql = "INSERT INTO is_server_selected (is_selected) VALUES
    // (?)";
    // // define query arguments
    // Object[] params = new Object[] { false };

    // // define SQL types of the arguments
    // int[] types = new int[] { Types.BOOLEAN };
    // jdbcTemplate.update(insertSql, params, types);
    // return false;
    // } else {
    // return statusList.get(0).getServerStatus();
    // }
    // // otherwise return is

    // }

    /**
     * insert an account into selected accounts table
     * 
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
     * Use id in selected_accounts to find complete account info
     * 
     * @return ArrayList<Account> with id, characters, server
     */
    @Override
    public ArrayList<Account> getSelectedAccounts() {
        final String selectSql = "SELECT selected_account_id FROM selected_accounts";
        List<Account> selectedAccountsID = jdbcTemplate.query(selectSql, (ResultSet resultSet, int i) -> {
            int id = Integer.parseInt(resultSet.getString("selected_account_id"));
            return new Account(id);
        });

        final String selectSqlAccount = "SELECT _id, game_name, server_name FROM account WHERE _id=?";
        final String selectSqlC = "SELECT character_name,lvl FROM account_characters WHERE belong_account_id=?"; // pic
        ArrayList<Account> result = new ArrayList<>();

        for (Account account : selectedAccountsID) {
            Object[] params = new Object[] { account.getId() };
            // get characters for the account
            ArrayList<Character> characters = (ArrayList<Character>) jdbcTemplate.query(selectSqlC, params,
                    (ResultSet resultSet, int i) -> {
                        String name = resultSet.getString("character_name");
                        int lvl = Integer.parseInt(resultSet.getString("lvl"));

                        return new Character(name, lvl);
                    });
            jdbcTemplate.query(selectSqlAccount, params, (ResultSet resultSet, int i) -> {
                int id = Integer.parseInt(resultSet.getString("_id"));
                String gameName = resultSet.getString("game_name");
                String serverName = resultSet.getString("server_name");

                return result.add(new Account(gameName, serverName, id, characters));
            });

        }

        return result;

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
     * Get all games in the database, with their name, picURL, servers[]. characters
     * Character should have name picRUL and lvl
     * 
     * @return ArrayList<Game>
     */
    @Override
    public ArrayList<Game> getGames() {
        final String selectSql = "SELECT game_name, pic_url FROM game";
        final String selectServerName = "SELECT belong_to_game, server_name FROM game_servers WHERE belong_to_game=?";
        final String selectCharactersSql = "SELECT * FROM game_characters WHERE belong_to_game=?";
        // get game from table
        List<Game> games = jdbcTemplate.query(selectSql, (ResultSet resultSet, int i) -> {
            String name = resultSet.getString("game_name");
            String picUrl = resultSet.getString("pic_url");
            return new Game(name, picUrl);
        });// YOU MAY define a getAccount method

        ArrayList<Game> result = new ArrayList<>();
        for (Game game : games) {
            Object[] params = new Object[] { game.getName() };
            // get servers of the game from table
            List<Server> servers = jdbcTemplate.query(selectServerName, params, (ResultSet resultSet, int i) -> {
                String name = resultSet.getString("server_name");
                String gameName = resultSet.getString("belong_to_game");
                return new Server(name, gameName);
            });

            // get characters of the game from table

            List<Character> characters = jdbcTemplate.query(selectCharactersSql, params,
                    (ResultSet resultSet, int i) -> {
                        String name = resultSet.getString("character_name");
                        int lvl = Integer.parseInt(resultSet.getString("lvl"));
                        return new Character(name, lvl);
                    });
            result.add(new Game(game.getName(), (ArrayList<Server>) servers, (ArrayList<Character>) characters,
                    game.getPicUrl()));

        }

        return result;
    }

    /**
     * get the game by its game name
     * 
     * @param gameName its game name
     * @return Optional<Game> with their name, picURL, servers[]. characters
     */
    @Override
    public Optional<Game> getGameByName(String gameName) {
        final String selectSql = "SELECT game_name pic_url FROM game where game_name=?";
        final String selectServerName = "SELECT belong_to_game, server_name FROM game_servers WHERE belong_to_game=?";
        final String selectCharactersSql = "SELECT * FROM game_characters WHERE belong_to_game=?";
        Object[] params = new Object[] { gameName };
        List<Game> game = jdbcTemplate.query(selectSql, params, (ResultSet resultSet, int i) -> {
            String name = resultSet.getString("game_name");
            String picUrl = resultSet.getString("pic_url");
            return new Game(name, picUrl);
        });

        ArrayList<Game> result = new ArrayList<>();

        Object[] params1 = new Object[] { game.get(0).getName() };
        // get servers of the game from table
        List<Server> servers = jdbcTemplate.query(selectServerName, params1, (ResultSet resultSet, int i) -> {
            String name = resultSet.getString("server_name");
            String gameName1 = resultSet.getString("belong_to_game");
            return new Server(name, gameName1);
        });

        // get characters of the game from table

        List<Character> characters = jdbcTemplate.query(selectCharactersSql, params1, (ResultSet resultSet, int i) -> {
            String name = resultSet.getString("character_name");
            int lvl = Integer.parseInt(resultSet.getString("lvl"));
            return new Character(name, lvl);
        });
        result.add(new Game(game.get(0).getName(), (ArrayList<Server>) servers, (ArrayList<Character>) characters,
                game.get(0).getPicUrl()));

        return result.stream().findFirst();

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
    public ArrayList<Account> getAccountsForGame(String gameName, String server, ArrayList<Character> characters) {
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
            ArrayList<Character> tempList = (ArrayList<Character>) characters.clone();
            final String sql = "SELECT character_name, lvl FROM account_characters WHERE belong_account_id=?";
            Object[] params1 = new Object[] { account.getId() };
            List<Character> accountCharacters = jdbcTemplate.query(sql, params1, (ResultSet resultSet, int i) -> {
                String name = resultSet.getString("character_name");
                int lvl = Integer.parseInt(resultSet.getString("lvl"));
                return new Character(name, lvl);
            });
            // 2

            for (Character character : characters) {// for every character in selectedCharacters

                for (Character accountCharacter : accountCharacters) {// for every character in the account
                    if (character.getName().equals(accountCharacter.getName())
                            && character.getlvl() == accountCharacter.getlvl())
                        tempList.remove(character);
                }
                if (tempList.size() == 0)
                    results.add(account);
            }
        }

        return (ArrayList<Account>) results;
    }

    /**
     * clear records in selected_accounts table
     * 
     * @return int
     */
    @Override
    public int clearTable() {
        String deleteSql = "DELETE FROM selected_accounts";
        jdbcTemplate.update(deleteSql);
        return 1;
    }

    /**
     * clear records in selected_server table
     * 
     * @return int
     */
    @Override
    public int clearSelectedServerTable() {
        String deleteSql = "DELETE FROM selected_server";
        jdbcTemplate.update(deleteSql);
        return 1;
    }

    /**
     * storing an account into database
     * 
     * @param account an account has id, gameName, serverName, characters[]
     * @return int
     */
    @Override
    public int saveAccount(Account account) {

        final String insertSqlAccount = "INSERT INTO account(_id, game_name, server_name) VALUES(?,?,?)";
        final String insertSqlAccountCharacters = "INSERT INTO account_characters(character_name, lvl, belong_account_id) VALUES(?,?,?)";
        // define query arguments
        Object[] paramsA = new Object[] { account.getId(), account.getGameName(), account.getServerName() };

        // define SQL types of the arguments
        int[] typesA = new int[] { Types.INTEGER, Types.VARCHAR, Types.VARCHAR };

        jdbcTemplate.update(insertSqlAccount, paramsA, typesA);

        final ArrayList<Character> characters = account.getCharacters();
        for (Character character : characters) {
            Object[] paramsC = new Object[] { character.getName(), character.getlvl(), account.getId() };
            int[] typesC = new int[] { Types.VARCHAR, Types.INTEGER, Types.INTEGER };
            jdbcTemplate.update(insertSqlAccountCharacters, paramsC, typesC);
        }
        return 1;
    }

    /**
     * delete an selected account
     * 
     * @param account
     * @return int
     */
    @Override
    public int deleteAccount(int id) {
        final String deleteSqlAccount = "DELETE FROM account WHERE _id=?";
        final String deleteSqlAccountCharacters = "DELETE FROM account_characters WHERE belong_account_id=?";

        Object[] params = new Object[] { id };

        int[] types = new int[] { Types.INTEGER };

        jdbcTemplate.update(deleteSqlAccount, params, types);
        jdbcTemplate.update(deleteSqlAccountCharacters, params, types);

        return 1;
    }

    /**
     * get all account in database, without showing characters
     * 
     * @return List<Account>
     */
    @Override
    public List<Account> getAccounts() {
        final String selectSqlAccount = "SELECT _id, game_name, server_name FROM account";

        List<Account> accounts = jdbcTemplate.query(selectSqlAccount, (ResultSet resultSet, int i) -> {
            int id = Integer.parseInt(resultSet.getString("_id"));
            String gameName = resultSet.getString("game_name");
            String serverName = resultSet.getString("server_name");

            return new Account(gameName, serverName, id, null);
        });
        return accounts;
    }

}