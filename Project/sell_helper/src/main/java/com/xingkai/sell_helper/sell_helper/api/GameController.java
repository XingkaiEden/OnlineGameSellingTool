package com.xingkai.sell_helper.sell_helper.api;

import java.util.ArrayList;
import java.util.Optional;

import com.xingkai.sell_helper.sell_helper.model.Game;
import com.xingkai.sell_helper.sell_helper.service.GameService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/game")
@RestController
public class GameController {
    private final GameService gameService;

    @Autowired
    public GameController(GameService gameService) {
        this.gameService = gameService;
    }

    @PostMapping
    public int insertGame(@RequestBody Game game) {
        return gameService.insertGame(game);
    }

    @GetMapping
    public ArrayList<Game> getGames() {
        return gameService.getGames();
    };

    @GetMapping(path = "{gameName}")
    public Optional<Game> getGameByName(@PathVariable("gameName") String gameName) {
        return gameService.getGameByName(gameName);
    };
}