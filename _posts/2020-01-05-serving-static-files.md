---
title: "Serving static files"
date: 2020-01-05T17:23
categories:
  - Essay
tags:
  - Django
  - Nginx
last_modified_at: 2020-01-05T16:21
---

기존에는 Django 자체의 web server 기능으로 디버깅을 하다가 
aws 환경에서는 Debug를 false로 세팅해야겠다 싶어서 변경했다.
다른건 잘 나오는데 css과 같은 static file들이 제대로 제공되지 않아서 페이지가 제대로 표시되지 않는 문제가 발생.
찾아보니 Django의 디버깅용 서버는 static 파일을 다양한 위치에서 검색해서 제공하지만,
`DEBUG=False`인 경우는 웹서버가 그 일을 해주기 때문에 해주지 않는다고 한다.
웹서버는 파일이 다양한 경로에 분산되어 있기보단 한 폴더 내에 모두 있어야 효율적이므로 한 폴더로 모으는 작업이 필요하게 된다.

먼저 모아주는 위치를 settings.py에서 STATIC_ROOT로 지정해주어야 한다.
```
echo yes | python3 manage.py collectstatic
```
를 스크립트에 추가하였다.
프로젝트에 흩어져 있는 staticfile을 모아주는 역할이라고 한다.
매번 돌릴 스크립트인데, 이미 모아저 있는 경우 yes, no를 물어 보길래 입력으로 yes를 넣어주었다.

Ngnix에서는 url의 static 경로를 모아져 있는 폴더 위치로 지정해줘야 한다.

```
location /static/ {
        alias /work/dashboard/.static_root/;
}
```
와 같이 지정해주면 된다.

처음에 제대로 되지 않아서 
`autoindex on;` 옵션을 통해 제대로 된 디렉토리인지 디버깅이 가능하게 하였다.
> 알고보니 그냥 엔진 재시작을 하면 적용이 제대로 되는 상황이였다.

### 정리
1. settings.py에 STATIC_ROOT추가
2. manage.py collectstatic 수행
3. nginx location 추가
4. 각 엔진 재시작