# BairhRadiateur

## Build

`docker build -t storefront:alpha -f ./DockerFile .  `

## running container

docker run -d --name storeFront -p 3000:3000 storefront:alpha

## attaching shell

docker container exec -it storeFront sh

docker compose --project-name slaoui up -d

extra_hosts: - "database:host.docker.internal"
