# 100688,101324,101361
import urllib.parse
from pymongo import MongoClient

host = "33339.hostserv.eu"
port = 27017

user_name = "gardener"
pass_word = "migr0spl4nt"
client = MongoClient(f'mongodb://{user_name}:{urllib.parse.quote_plus(pass_word)}@{host}:{port}')
# print(client)
db = client.garden
user = db.user1

user1 = {
    "kundeID": "1006881",
    "name": "Test User 1",
    "userPoint": "0",
    "groupId": " ",
    "groupPoint": " ",
    "eligibleForReward": "false",
    "noOfDaysWithoutSustainableShopping": "0"
}

user2 = {
    "kundeID": "1013241",
    "name": "Test User 2",
    "userPoint": "0",
    "groupId": " ",
    "groupPoint": " ",
    "eligibleForReward": "false",
    "noOfDaysWithoutSustainableShopping": "0"
}

user3 = {
    "kundeID": "1013611",
    "name": "Test User 3",
    "userPoint": "0",
    "groupId": " ",
    "groupPoint": " ",
    "eligibleForReward": "false",
    "noOfDaysWithoutSustainableShopping": "0"
}

result = user.insert_one(user1)
print(result)
result = user.insert_one(user2)
result = user.insert_one(user3)