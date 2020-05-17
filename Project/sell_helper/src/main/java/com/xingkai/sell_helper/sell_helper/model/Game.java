package com.xingkai.sell_helper.sell_helper.model;

import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Game {
    private final String name;
    private final ArrayList<Account> accounts;
    private final ArrayList<String> servers;

    public Game(@JsonProperty("gameName") String name, @JsonProperty("servers") ArrayList<String> servers) {
        this.name = name;
        this.servers = servers;
        this.accounts = new ArrayList<>();
    }

    public Game(String name) {
        this.name = name;
        this.servers = null;
        this.accounts = new ArrayList<>();

    }

    public String getName() {
        return name;
    }

    public ArrayList<String> getServerName() {
        return servers;
    }

    public ArrayList<Account> getAccounts() {
        return accounts;
    }
}