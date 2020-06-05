package com.xingkai.sell_helper.sell_helper.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.xingkai.sell_helper.sell_helper.model.Account;
import com.xingkai.sell_helper.sell_helper.model.Character;

public interface AccountDao {
    ArrayList<Account> getAccountsForGame(String gameName, String server, ArrayList<Character> characters);

    int saveAccount(Account account);

    int deleteAccount(int id);

    List<Account> getAccounts();
}