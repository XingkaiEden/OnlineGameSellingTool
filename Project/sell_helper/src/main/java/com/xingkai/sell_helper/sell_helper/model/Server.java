package com.xingkai.sell_helper.sell_helper.model;

public class Server {
    private final String name;
    private final String belongToGame;

    public Server(String name, String belongToGame) {
        this.name = name;
        this.belongToGame = belongToGame;
    }

    public String getName() {
        return this.name;
    }

    public String getBelongToGame() {
        return this.belongToGame;
    }

}