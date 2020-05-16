package com.xingkai.sell_helper.sell_helper.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ServerIsSelected {
    private final boolean IS_SELECTED;

    public ServerIsSelected(@JsonProperty("server_status") boolean IS_SELECTED) {
        this.IS_SELECTED = IS_SELECTED;
    }

    public boolean getServerStatus() {
        return this.IS_SELECTED;
    }

}