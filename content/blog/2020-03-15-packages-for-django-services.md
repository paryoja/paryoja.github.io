---
title: "Packages for Django services"
date: 2020-03-15T12:43
categories:
  - Essay
tags:
  - Django
last_modified_at: 2020-03-15T12:43
---

Cookie cutter의 Django 프로젝트를 생성 했을때, 너무나도 많은 다양한 새로운 기능들이 있어서,
그냥 정말 하나도 설치되어 있지 않은 상태에서 하나씩 적용을 해보는 중이다. 
그러다가 발견한 다양한 유용한 패키지의 역할을 정리하기 위한 글.

## [django-environ](https://github.com/joke2k/django-environ)
웹 서비스를 하다보면, 다양한 환경 변수를 사용하는 일이 많아지고, 그것을 일일히 관리하기에 어려움이 생김.
테스트용 환경이나 배포용 환경에서 쓰는 옵션들이 다르고 이를 환경변수로 넣어두고 사용하는데,
개수가 많아지면 이를 관리하고 사용하기에 어려움이 생기므로 이를 돕기 위한 패키지.
[12factor 방법론](https://www.12factor.net/ko/)에 따라 만들어 졌다고 한다.

## [django-extensions](https://django-extensions.readthedocs.io/en/latest/)
Django 서버 디버깅을 위한 기능을 쉽게 사용 할 수 있도록 runserver_plus 기능을 비롯한 다양한 편의 기능을 제공한다.
runserver_plus를 쓰기 위해서는 Werkzeug 가 설치 되어 있어야 한다.
이 기능으로 서버를 실행 시키면 에러가 발생 했을 때 다양한 디버깅용 정보를 제공해준다.

## [django rest framework](https://github.com/encode/django-rest-framework)
RESP API를 만들기 쉽게 만들기를 도와주는 프레임워크. 
약간의 코딩으로 데이터를 조작하는 API를 만들고 페이지에서 바로 테스트도 가능하다.

## [django-allauth](https://github.com/pennersr/django-allauth)
페이스북 트위터 등등등의 소셜 네트워크 뿐만 아니라 Github, daum등의 로그인도 제공한다.

## [django-model-utils](https://github.com/jazzband/django-model-utils)
장고 Model에 추가적인 필드를 제공하는 유틸리티.

## [django-crispy-forms](https://github.com/django-crispy-forms/django-crispy-forms)
장고 폼을 다양한 형태로 예쁘게 바꾸어주는 역할을 한다.