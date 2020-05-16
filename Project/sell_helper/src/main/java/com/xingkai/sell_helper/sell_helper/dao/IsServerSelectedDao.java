package com.xingkai.sell_helper.sell_helper.dao;

import com.xingkai.sell_helper.sell_helper.model.ServerIsSelected;

public interface IsServerSelectedDao {
    int setServerIsSelected(ServerIsSelected isSelected);

    boolean getServerIsSelected();
}