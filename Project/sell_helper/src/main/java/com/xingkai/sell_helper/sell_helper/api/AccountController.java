package com.xingkai.sell_helper.sell_helper.api;

import java.util.ArrayList;
import java.util.Optional;

import com.xingkai.sell_helper.sell_helper.model.Account;
import com.xingkai.sell_helper.sell_helper.model.Character;
import com.xingkai.sell_helper.sell_helper.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("api/v1/account")
@RestController
public class AccountController {
    private final AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping(path = "{gameName}/{server}/{values}")
    public Optional<Account> getAccountsForGame(@PathVariable("gameName") String gameName,
            @PathVariable("server") String server, @PathVariable("values") String characters) {
        ArrayList<Character> charactersList = new ArrayList<>();
        String[] s = characters.split("&");
        for (String subs : s) {
            String[] temp = subs.split(",");
            String name = temp[0];
            int lvl = Integer.parseInt(temp[1]);
            charactersList.add(new Character(name, lvl));
        }

        // don't know how to deal with the arraylist
        return accountService.getAccountsForGame(gameName, server, charactersList);
    }
}