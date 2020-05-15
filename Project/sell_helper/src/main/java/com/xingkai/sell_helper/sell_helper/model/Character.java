package com.xingkai.sell_helper.sell_helper.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Character {
    private final String name;
    private final int lvl;

    public Character(@JsonProperty("name") String name, @JsonProperty("lvl") int lvl) {
        this.name = name;
        this.lvl = lvl;
    }

    public String getName() {
        return name;
    }

    public int getlvl() {
        return lvl;
    }
}