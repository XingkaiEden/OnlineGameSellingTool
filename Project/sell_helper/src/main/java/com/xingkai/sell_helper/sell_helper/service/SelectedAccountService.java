package com.xingkai.sell_helper.sell_helper.service;

import com.xingkai.sell_helper.sell_helper.dao.SelectedAccountDao;
import java.util.ArrayList;

import com.xingkai.sell_helper.sell_helper.model.Account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class SelectedAccountService {
    private final SelectedAccountDao selectedAccountDao;

    @Autowired
    public SelectedAccountService(@Qualifier("postgres") SelectedAccountDao selectedAccountDao) {
        this.selectedAccountDao = selectedAccountDao;
    }

    public int setSelectedAccounts(ArrayList<Account> accounts) {
        return selectedAccountDao.setSelectedAccounts(accounts);
    };

    public ArrayList<Account> getSelectedAccounts() {
        return selectedAccountDao.getSelectedAccounts();
    };

}