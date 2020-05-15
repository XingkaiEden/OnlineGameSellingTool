package com.xingkai.sell_helper.sell_helper.service;

import java.util.ArrayList;
import java.util.Optional;

import com.xingkai.sell_helper.sell_helper.dao.GameDao;
import com.xingkai.sell_helper.sell_helper.model.Game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameService {
    private final GameDao gameDao;

    @Autowired
    public GameService(GameDao gameDao) {
        this.gameDao = gameDao;
    }

    public int insertGame(Game game) {
        return gameDao.insertGame(game);
    }

    public ArrayList<Game> getGames() {
        return gameDao.getGames();
    };

    public Optional<Game> getGameByName(String gameName) {
        return gameDao.getGameByName(gameName);
    };
}