import os, json
import urllib.parse
from pymongo import MongoClient

host = "33339.hostserv.eu"
port = 27017

user_name = "gardener"
pass_word = "migr0spl4nt"
client = MongoClient(f'mongodb://{user_name}:{urllib.parse.quote_plus(pass_word)}@{host}:{port}')
# print(client)
db = client.garden
product = db.product

path_to_json = '/Users/prasun/Downloads/products/products/en/'
count = 0

for file_name in [file for file in os.listdir(path_to_json) if file.endswith('.json')]:
    with open(path_to_json + file_name) as json_file:
        print("Processing file - ", file_name)
        product1 = {}
        data = json.load(json_file)
        product1['id'] = data['id']
        product1['name'] = data['name']

        if "m_check2" in data:
            count = count + 1
            dataMcheck = data['m_check2']
            if "carbon_footprint" in dataMcheck:
                dataCheck = dataMcheck['carbon_footprint']
                if "ground_and_sea_cargo" in dataCheck:
                    product1['mCheck'] = dataCheck['ground_and_sea_cargo']
        print(product1)
        result = product.insert_one(product1)

print(" files with mCheck", count)
