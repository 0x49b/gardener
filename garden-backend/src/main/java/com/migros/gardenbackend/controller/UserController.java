package com.migros.gardenbackend.controller;

import com.migros.gardenbackend.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    @GetMapping("/user")
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public User getUser(@RequestParam String id){
        User temp = new User();
        temp.setId("123456");
        temp.setKundeId("100688");
        temp.setUserPoint(1000);
        temp.setEligibleForReward(true);
        temp.setNoOfDaysWithoutSustainableShopping(1);
        return temp;
    }
}
