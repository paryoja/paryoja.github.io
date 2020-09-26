---
title: "Mongo DB Login"
date: 2020-09-26T19:16
categories:
  - Essay
tags:
  - Mongo DB
last_modified_at: 2020-09-26T19:16
---

나무위키 덤프를 mongo db로 복구하려고 하였으나 분명 root 계정을 `--username`으로 줬음에도 로그인이 안되서 원인을 한참 찾아보았다.
인증 정보 DB를 지정해줘야 제대로 계정을 찾아준다.

```
–-authenticationDatabase “admin”
```
