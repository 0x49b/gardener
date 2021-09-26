#!/bin/bash

npm run build
docker build -t fthievent/gardener .
docker push fthievent/gardener