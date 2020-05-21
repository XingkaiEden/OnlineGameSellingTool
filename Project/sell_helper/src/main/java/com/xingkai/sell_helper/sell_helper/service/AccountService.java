package com.xingkai.sell_helper.sell_helper.service;

import java.util.ArrayList;
import java.util.Optional;

import com.xingkai.sell_helper.sell_helper.dao.AccountDao;
import com.xingkai.sell_helper.sell_helper.model.Account;
import com.xingkai.sell_helper.sell_helper.model.Character;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    private final AccountDao accountDao;

    @Autowired
    public AccountService(@Qualifier("postgres") AccountDao accountDao) {
        this.accountDao = accountDao;
    }

    public ArrayList<Account> getAccountsForGame(String gameName, String server, ArrayList<Character> characters) {
        return accountDao.getAccountsForGame(gameName, server, characters);
    }

    public int saveAccount(Account account) {
        return accountDao.saveAccount(account);
    }

}