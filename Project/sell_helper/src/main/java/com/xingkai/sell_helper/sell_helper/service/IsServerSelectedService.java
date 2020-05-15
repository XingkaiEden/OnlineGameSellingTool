package com.xingkai.sell_helper.sell_helper.service;

import com.xingkai.sell_helper.sell_helper.dao.IsServerSelectedDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IsServerSelectedService {
    private final IsServerSelectedDao isServerSelectedDao;

    @Autowired
    public IsServerSelectedService(IsServerSelectedDao isServerSelectedDao) {
        this.isServerSelectedDao = isServerSelectedDao;
    }

    public int setServerIsSelected(boolean isSelected) {
        return isServerSelectedDao.setServerIsSelected(isSelected);
    };

    public boolean getServerIsSelected() {
        return isServerSelectedDao.getServerIsSelected();
    };
}