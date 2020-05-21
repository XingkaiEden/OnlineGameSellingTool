package com.xingkai.sell_helper.sell_helper.dao;

public interface IsServerSelectedDao {
    int setSelectedServerName(String serverName);

    String getSelectedServerName();

    int clearSelectedServerTable();
}