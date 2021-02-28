---
title: "Setting Elastic Search & Kibana in a single node"
date: 2020-03-01T11:36
categories:
  - Essay
tags:
  - ElasticSearch, Kibana
last_modified_at: 2020-03-01T11:36
---

ElasticSearch를 이용하여 namuwiki 분석을 진행해볼까 했는데, 일단 설치부터 진행해보았다.
먼저 ElasticSearch 환경설정은 

```yaml
cluster.name: es_test
node.name : namu-1
network:
  host: 0.0.0.0
discovery.type: single-node
```
으로 하였고,

Kibana 환경설정은
```yaml
server:
  port: 5601
  host: 0.0.0.0
elasticsearch:
  hosts: "http://elasticsearch:9200"
```
으로 하였다.

Docker Compose는 다음과 같이 하였는데, 원격의 pycharm에서 설정하는 것을 해보려고 설정파일을 docker에 같이 말기 위해서
Dockerfile을 썼었는데, 세팅한게 생각대로 동작하진 않아서 `volums: - ./config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml`으로 세팅해도 무방하다.
```yaml
version: '3'

services:
  elasticsearch:
    build:
      context: .
      dockerfile: ./Dockerfile
    volumes:
      - ./elasticsearch/data:/usr/share/elasticsearch/data
    environment:
      ES_JAVA_OPTS: "-Xmx2048m -Xms2048m"
    ports:
      - 9200:9200
      - 9300:9300
  kibana:
    image:
      "kibana:7.6.0"
    volumes:
      - ./config/kibana.yml:/usr/share/kibana/config/kibana.yml
    ports:
      - 5601:5601
```

일단 ES와 Kibana가 잘 뜨는 것은 확인 했는데, 이제 실제 데이터를 넣고 분석하는 것을 해봐야겠다.