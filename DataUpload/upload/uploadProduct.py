import pymongo
import urllib.parse
from pymongo import MongoClient

host = "33339.hostserv.eu"
port = 27017

user_name = "gardener"
pass_word = "migr0spl4nt"
client = MongoClient(f'mongodb://{user_name}:{urllib.parse.quote_plus(pass_word)}@{host}:{port}')
# print(client)
db = client.Gardening
print(db)
product = db.Product
product1 = {
  "id": "100100300000",
  "name": "Milch-Nuss",
  "kg_co2": 5.65,
  "kg_co2_range": "4.8 - 9.9 kg CO₂eq / kg",
  "co2_in_car_km": 31,
  "rating": 2,
  "production_in_percent": 94.99,
  "packaging_in_percent": 3.06,
  "transport_in_percent": 1.95
}
result = product.insert_one(product1)
print(result)