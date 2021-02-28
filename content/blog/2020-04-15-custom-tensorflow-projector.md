---
title: "Custom Tensorflow Projector"
date: 2020-04-16T22:31
categories:
  - Essay
tags:
  - Tensorflow
last_modified_at: 2020-04-16T22:31
---

Tensorflow의 [projector](https://projector.tensorflow.org/) 코드가 [Github](https://github.com/tensorflow/embedding-projector-standalone)에 공개되어 있었다.
Nginx에 물려서 띄우니 뜨는걸 볼 수 있었다.
같은 서버에 static file로 포맷에 맞는 embedding 파일과 setting 파일을 업로드 해두면, url로 그 데이터를 바로 projector에 띄울 수 있었다.

docker-compose.yml
```
version: "3"

services:
    nginx:
      image:
        "nginx:latest"
      ports:
        - "30080:80"
      volumes:
        - ./config/nginx:/etc/nginx/conf.d
        - ./:/work
      command: ["nginx", "-g", "daemon off;"]
```

nginx.conf
```
server {
  listen 80;
  server_name localhost;

  access_log /work/log/nginx/access.log;
  error_log /work/log/nginx/error.log;

  location /static/ {
    alias /work/static/;
  }

  location / {
    root   /usr/share/nginx/html;
    try_files $uri $uri/ /index.html;
  }

}
```