package com.xingkai.sell_helper.sell_helper.dao;

import java.util.ArrayList;
import java.util.Optional;

import com.xingkai.sell_helper.sell_helper.model.Account;
import com.xingkai.sell_helper.sell_helper.model.Character;

public interface AccountDao {
    Optional<Account> getAccountsForGame(String gameName, String server, ArrayList<Character> characters);

    int saveAccount(Account account);
}