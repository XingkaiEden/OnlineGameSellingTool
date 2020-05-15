package com.xingkai.sell_helper.sell_helper.dao;

import java.util.ArrayList;
import java.util.Optional;

import com.xingkai.sell_helper.sell_helper.model.Game;

public interface GameDao {
    int insertGame(Game game, String[] servers);

    default int insertGame(Game game) {
        String[] servers = { "apple", "andrion" };
        return insertGame(game, servers);
    };

    ArrayList<Game> getGames();

    Optional<Game> getGameByName(String gameName);

}