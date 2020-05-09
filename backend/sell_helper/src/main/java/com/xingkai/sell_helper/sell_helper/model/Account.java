package com.xingkai.sell_helper.sell_helper.model;

import java.util.ArrayList;

/**
 * Account
 */
public class Account {

    private final int id;
    private final String gameName;
    private final String serverName;
    private final ArrayList<Character> characters;

    public Account(String gameName, String serverName, int id) {
        this.id = id;
        this.gameName = gameName;
        this.serverName = serverName;
        characters = new ArrayList<>();
    }

    public String getGameName() {
        return gameName;
    }

    public String getServerName() {
        return serverName;
    }

    public int getId() {
        return id;
    }

    public ArrayList<Character> getCharacters() {
        return characters;
    }
}