package com.xingkai.sell_helper.sell_helper.dao;

import java.util.ArrayList;

import com.xingkai.sell_helper.sell_helper.model.Account;

public interface SelectedAccountDao {
    int setSelectedAccounts(ArrayList<Account> accounts);

    ArrayList<Account> getSelectedAccounts();

    int setServer();

    boolean getServer();
}