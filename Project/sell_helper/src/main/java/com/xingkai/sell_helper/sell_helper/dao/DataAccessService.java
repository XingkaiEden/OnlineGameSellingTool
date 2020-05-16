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

import org.apache.catalina.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import aj.org.objectweb.asm.Type;

@Repository("postgres")
public class DataAccessService implements AccountDao, GameDao, SelectedAccountDao, IsServerSelectedDao {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

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

    @Override
    public int setSelectedAccounts(ArrayList<Account> accounts) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public ArrayList<Account> getSelectedAccounts() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public int insertGame(Game game, String[] servers) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public ArrayList<Game> getGames() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Optional<Game> getGameByName(String gameName) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Optional<Account> getAccountsForGame(String gameName, String server, ArrayList<Character> characters) {
        // TODO Auto-generated method stub
        return null;
    }

}