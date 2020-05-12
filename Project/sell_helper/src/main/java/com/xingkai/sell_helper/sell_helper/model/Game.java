package com.xingkai.sell_helper.sell_helper.model;

import java.util.ArrayList;

public class Game {
    private final String name;
    private final ArrayList<Account> accounts;
    private final String serverName;

    public Game(String name, String serverName) {
        this.name = name;
        this.serverName = serverName;
        this.accounts = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public String getServerName() {
        return serverName;
    }

    public ArrayList<Account> getAccounts() {
        return accounts;
    }
}