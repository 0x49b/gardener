package com.migros.gardenbackend.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Getter
@Setter
@ToString
@Document(collection = "user")
public class User {
    private String id;
    private String kundeId;
    private String name;
    private int userPoint;
    private String groupId;
    private int groupPoint;
    private boolean eligibleForReward;
    private int noOfDaysWithoutSustainableShopping;
}
