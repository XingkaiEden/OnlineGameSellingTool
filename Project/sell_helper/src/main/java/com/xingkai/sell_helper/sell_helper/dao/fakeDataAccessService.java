package com.xingkai.sell_helper.sell_helper.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.xingkai.sell_helper.sell_helper.model.Account;
import com.xingkai.sell_helper.sell_helper.model.Game;
import com.xingkai.sell_helper.sell_helper.model.ServerIsSelected;

import org.springframework.stereotype.Repository;

import com.xingkai.sell_helper.sell_helper.model.Character;

@Repository("fake")
public class fakeDataAccessService implements AccountDao, GameDao, SelectedAccountDao, IsServerSelectedDao {
    private static ArrayList<Game> gameDB = new ArrayList<>();
    private static ArrayList<Account> accountDB = new ArrayList<>();
    private static ArrayList<Account> selectedAccountDB = new ArrayList<>();
    private static boolean SERVER_IS_SELECTED = false;

    @Override
    public int setSelectedAccounts(ArrayList<Account> accounts) {
        if (accounts.size() == 0)
            return 0;
        else {
            selectedAccountDB.clear();
            accounts.forEach(selectedAccountDB::add);
            return 1;
        }
    }

    @Override
    public ArrayList<Account> getSelectedAccounts() {
        return selectedAccountDB;
    }

    @Override
    public int insertGame(Game game, String[] servers) {
        gameDB.add(new Game(game.getName(), servers));
        return 1;
    }

    @Override
    public ArrayList<Game> getGames() {
        return gameDB;
    }

    @Override
    public Optional<Game> getGameByName(String gameName) {

        return gameDB.stream().filter(game -> game.getName().equals(gameName)).findFirst();
    }

    @Override
    public Optional<Account> getAccountsForGame(String gameName, String server, ArrayList<Character> characters) {
        // pass the selected game's name, server, and characters, return accounts that
        // user wnats
        List<Account> results = new ArrayList<>();
        List<Account> accounts = accountDB.stream().filter(a -> a.getGameName().equals(gameName))
                .filter(a -> a.getServerName().equals(server)).collect(Collectors.toList());
        for (Account account : accounts) { // for every account in the list that has desire name and server
            for (Character character : characters) {// for every character in selectedCharacters
                List<Character> tempList = new ArrayList<>();
                for (Character accountCharacter : account.getCharacters()) {
                    if (character.getName().equals(accountCharacter.getName()))
                        tempList.add(accountCharacter);
                }
                if (character.equals(tempList))
                    results.add(account);
            }
        }

        return results.stream().findAny();
    }

    @Override
    public boolean getServerIsSelected() {

        return SERVER_IS_SELECTED;
    }

    @Override
    public int setServerIsSelected(ServerIsSelected isSelected) {
        SERVER_IS_SELECTED = isSelected.getServerStatus();
        return 1;
    }

}