package com.xingkai.sell_helper.sell_helper.api;

import java.util.ArrayList;

import com.xingkai.sell_helper.sell_helper.model.Account;
import com.xingkai.sell_helper.sell_helper.service.SelectedAccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/selectedaccount")
@RestController
public class SelectedAccountController {
    private final SelectedAccountService selectedAccountService;

    @Autowired
    public SelectedAccountController(SelectedAccountService selectedAccountService) {
        this.selectedAccountService = selectedAccountService;
    }

    @GetMapping
    public ArrayList<Account> getSelectedAccounts() {
        return selectedAccountService.getSelectedAccounts();
    };

    @PostMapping
    public int setSelectedAccounts(@RequestBody Account account) {
        // problems
        return selectedAccountService.setSelectedAccounts(account);
    }

    @DeleteMapping
    public int clearTable() {
        return selectedAccountService.clearTable();
    }

}