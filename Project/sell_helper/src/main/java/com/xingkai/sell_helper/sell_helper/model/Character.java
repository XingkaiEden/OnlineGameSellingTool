package com.xingkai.sell_helper.sell_helper.model;

public class Character {
    private final String name;
    private final int lvl;

    public Character(String name, int lvl) {
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