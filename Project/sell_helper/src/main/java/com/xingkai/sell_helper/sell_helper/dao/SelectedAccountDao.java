package com.xingkai.sell_helper.sell_helper.dao;

import java.util.ArrayList;

import com.xingkai.sell_helper.sell_helper.model.Account;

public interface SelectedAccountDao {
    int setSelectedAccounts(Account account);

    ArrayList<Account> getSelectedAccounts();

}