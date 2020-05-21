package com.xingkai.sell_helper.sell_helper.api;

import com.xingkai.sell_helper.sell_helper.service.IsServerSelectedService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/isserverselected")
public class IsServerSelectedController {
    private final IsServerSelectedService IsServerSelectedService;

    @Autowired
    public IsServerSelectedController(IsServerSelectedService IsServerSelectedService) {
        this.IsServerSelectedService = IsServerSelectedService;
    }

    @PostMapping
    public int setServerIsSelected(@RequestBody String serverName) {
        return IsServerSelectedService.setServerIsSelected(serverName);
    };

    @GetMapping
    public String getServerIsSelected() {
        return IsServerSelectedService.getServerIsSelected();
    };

    @DeleteMapping
    public int clearSelectedServerTable() {
        return IsServerSelectedService.clearSelectedServerTable();
    }
}