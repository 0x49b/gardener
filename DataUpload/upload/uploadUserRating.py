# 100688,101324,101361
import pandas as pd
import csv
import os
import urllib.parse
from pymongo import MongoClient

fileList = ["Abverkaufdaten_trx_202001.csv", "Abverkaufdaten_trx_202002.csv", "Abverkaufdaten_trx_20200.csv",
            "Abverkaufdaten_trx_202004.csv", "Abverkaufdaten_trx_202005.csv", "Abverkaufdaten_trx_202006.csv",
            "Abverkaufdaten_trx_202007.csv", "Abverkaufdaten_trx_202008.csv", "Abverkaufdaten_trx_202009.csv",
            "Abverkaufdaten_trx_202010.csv", "Abverkaufdaten_trx_202011.csv", "Abverkaufdaten_trx_202012.csv"]

cumulative_rating_688 = 0
cumulative_rating_324 = 0
cumulative_rating_361 = 0

monthly_rating_688 = {}
monthly_rating_324 = {}
monthly_rating_361 = {}

host = "33339.hostserv.eu"
port = 27017

user_name = "gardener"
pass_word = "migr0spl4nt"
client = MongoClient(f'mongodb://{user_name}:{urllib.parse.quote_plus(pass_word)}@{host}:{port}')
# print(client)
db = client.garden
product = db.product

path_to_json = '/Users/prasun/Downloads/ShoppingCart/'
for file_name in [file for file in os.listdir(path_to_json) if file.endswith('.csv')]:
    if file_name in fileList:
        with open(path_to_json + file_name, 'rt') as f:
            print(file_name)
            monthly_rating_key = file_name[-6:-4]
            print(monthly_rating_key)
            monthly_rating_val_688 = 0
            monthly_rating_val_324 = 0
            monthly_rating_val_361 = 0
            data = csv.DictReader(f)
            count = 0
            next(data)
            for row in data:
                if count == 500:
                    break
                count += 1
                if row['KundeID'] == '100688':
                    result = product.find_one({"id": row['ArtikelID']})
                    tempRating = 0
                    if result is not None:
                        if "mCheck" in result:
                            tempResult = result["mCheck"]
                            if "rating" in tempResult:
                                tempRating = tempResult["rating"]
                    monthly_rating_val_688 = monthly_rating_val_688 + tempRating
                    cumulative_rating_688 = cumulative_rating_688 + tempRating
                if row['KundeID'] == '101324':
                    result = product.find_one({"id": row['ArtikelID']})
                    tempRating = 0
                    if result is not None:
                        if "mCheck" in result:
                            tempResult = result["mCheck"]
                            if "rating" in tempResult:
                                tempRating = tempResult["rating"]
                    monthly_rating_val_324 = monthly_rating_val_324 + tempRating
                    cumulative_rating_324 = cumulative_rating_324 + tempRating
                if row['KundeID'] == '100688':
                    result = product.find_one({"id": row['ArtikelID']})
                    tempRating = 0
                    if result is not None:
                        if "mCheck" in result:
                            tempResult = result["mCheck"]
                            if "rating" in tempResult:
                                tempRating = tempResult["rating"]
                    monthly_rating_val_361 = monthly_rating_val_361 + tempRating
                    cumulative_rating_361 = cumulative_rating_361 + tempRating
            monthly_rating_688[monthly_rating_key] = monthly_rating_val_688
            monthly_rating_324[monthly_rating_key] = monthly_rating_val_324
            monthly_rating_361[monthly_rating_key] = monthly_rating_val_361

print(monthly_rating_361, '\n')
print(monthly_rating_324, '\n')
print(monthly_rating_688, '\n')
print(cumulative_rating_324, '\n')
print(cumulative_rating_361, '\n')
print(cumulative_rating_688, '\n')


user = db.user

user1 = {
    "kundeID": "100688",
    "name": "Test User 1",
    "userPoint": cumulative_rating_688,
    "groupId": " ",
    "groupPoint": " ",
    "eligibleForReward": "false",
    "userRatingHistory": monthly_rating_688
}

user2 = {
    "kundeID": "101324",
    "name": "Test User 2",
    "userPoint": cumulative_rating_324,
    "groupId": " ",
    "groupPoint": " ",
    "eligibleForReward": "false",
    "userRatingHistory": monthly_rating_324
}

user3 = {
    "kundeID": "101361",
    "name": "Test User 3",
    "userPoint": cumulative_rating_361,
    "groupId": " ",
    "groupPoint": " ",
    "eligibleForReward": "false",
    "userRatingHistory": monthly_rating_361
}

result = user.insert_one(user1)
print(result)
result = user.insert_one(user2)
result = user.insert_one(user3)