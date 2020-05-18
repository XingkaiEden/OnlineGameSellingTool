package com.xingkai.sell_helper.sell_helper.model;

import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Game {
    private final String name;
    private final ArrayList<Character> characters;
    private final ArrayList<Server> servers;

    public Game(@JsonProperty("gameName") String name, @JsonProperty("servers") ArrayList<Server> servers,
            ArrayList<Character> characters) {
        this.name = name;
        this.servers = servers;
        this.characters = characters;
    }

    public Game(String name) {
        this.name = name;
        this.servers = null;
        this.characters = new ArrayList<>();

    }

    public String getName() {
        return name;
    }

    public ArrayList<Server> getServerName() {
        return servers;
    }

    // public void setCharacters(ArrayList<Character> c) {
    // for (Character character : c) {
    // this.characters.add(character);
    // }
    // }

    public ArrayList<Character> getCharacters() {
        return characters;
    }
}