#!/usr/bin/env bash

docker build -t kubi .
docker tag kubi tetrohed/kubi
docker push tetrohed/kubi