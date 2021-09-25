package com.migros.gardenbackend.service;

import com.migros.gardenbackend.entity.User;
import com.migros.gardenbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User getOne(String id) {
        User user = userRepository.getUserById(id);
        return user;
    }

    public List<User> getAll(){
        List<User> user = userRepository.getAll();
        return user;
    }
}
