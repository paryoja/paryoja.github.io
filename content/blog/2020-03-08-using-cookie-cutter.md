---
title: "Using Cookie Cutter for Django"
date: 2020-03-08T21:11
categories:
  - Essay
tags:
  - Django
last_modified_at: 2020-03-08T21:11
---

Cookie cutter로 django 기본 세팅을 다시 해보았다.
사이트를 만들어 보니 확실히 처음 시작부터 세팅해 놓아야하는 것들이 많은데, 이를 잘 세팅해 주었다.

아무래도 기존 사이트를 옮기는건 어려울 듯 하여, cookie cutter에서 설정하는 것들을 따라서 적용 시켜보고 있다.
일단은 pylint, flake8 설정을 옮겼고, docker-compose에서 앞에서 설정한 세팅에 추가 세팅을 붙이는 경우 &와 *로 지정하는
문법을 배울 수 있었다. 역시 잘 짠 코드를 자주 읽어보고 배우는 것이 필요하다는 것을 느꼈다.

다음으로는 unittest code들을 따라해봐야겠다. 