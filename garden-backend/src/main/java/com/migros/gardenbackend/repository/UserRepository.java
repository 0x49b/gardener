package com.migros.gardenbackend.repository;

import com.migros.gardenbackend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository{
    private final MongoTemplate mongoTemplate;

    @Autowired
    public UserRepository(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public User getUserById(String customerId){
        Query query = new Query(Criteria.where("kundeID").is(customerId));
        User user = mongoTemplate.findOne(query, User.class);
        return user;
    }

    public List<User> getAll(){
        List<User> userList = mongoTemplate.findAll(User.class);
        return userList;
    }

}

