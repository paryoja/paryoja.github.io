---
title: "Opening 2375 port for dockerd in Mac"
date: 2020-02-29T23:24
categories:
  - Essay
tags:
  - Mac
last_modified_at: 2020-02-29T23:24
---

Mac Mini에 Docker Desktop을 설치했고, windows 컴의 pycharm에서 tcp로 연결해서 쓰려고 했는데, 
Mac용 Docker Desktop에는 TCP 소켓여는 옵션이 없다는 것을 깨달았다.

일단 brew도 안깔았었기 때문에
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
로 brew 부터 설치하고

`brew install socat`으로 socat 설치 후

```shell script
socat TCP-LISTEN:2375,reuseaddr,fork UNIX-CONNECT:/var/run/docker.sock &
```
으로 2375 TCP 포트로 /var/run/docker.sock를 연결해주었다.

지금 windows 컴의 elastic search configure 파일을 
mini의 docker에 mount 해줘야하는데 그걸 어떻게 설정해야할지 알아봐야겠다.
