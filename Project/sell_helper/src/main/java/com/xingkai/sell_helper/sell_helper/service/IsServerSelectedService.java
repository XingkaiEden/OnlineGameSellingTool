package com.xingkai.sell_helper.sell_helper.service;

import com.xingkai.sell_helper.sell_helper.dao.IsServerSelectedDao;
import com.xingkai.sell_helper.sell_helper.model.ServerIsSelected;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class IsServerSelectedService {
    private final IsServerSelectedDao isServerSelectedDao;

    @Autowired
    public IsServerSelectedService(@Qualifier("postgres") IsServerSelectedDao isServerSelectedDao) {
        this.isServerSelectedDao = isServerSelectedDao;
    }

    public int setServerIsSelected(ServerIsSelected isSelected) {
        return isServerSelectedDao.setServerIsSelected(isSelected);
    };

    public boolean getServerIsSelected() {
        return isServerSelectedDao.getServerIsSelected();
    };
}