---
title: "Crawling with Selenium"
date: 2020-01-12T22:32
categories:
  - Essay
tags:
  - Squid
last_modified_at: 2020-01-12T22:32
---

Selenium으로 크롤링하던 중에 너무 동일한 request를 반복적으로 보내는 부분이 있어서 때로는 차단을 당하는거 같아서
GCP에 프록시를 하나 설정해 보았다. 캐시 설정이 완전하지 않긴 한데, 설정해서 중복으로 들어가는 request도 줄이면 좋을 듯 하다.

Docker image는 공식인지 모르겠는데 sameersbn/squid 를 사용하였다.

```
http_port 3128
cache_mem 1 MB
maximum_object_size 4096 KB
cache_dir ufs /work/cache 100 16 256
cache_access_log /work/logs/access.log
cache_log /work/logs/cache.log
cache_store_log /work/logs/store.log
debug_options ALL,1
buffered_logs on
acl all src all 
http_access allow all
```

도커 이미지 시작하다가 메모리 부족하다는 메시지와 함께 시작되지 않았다.

```
FATAL: xcalloc: Unable to allocate 1048576 blocks of 392 bytes!
```

GCP 공짜 인스턴스 메모리가 580MB 밖에 안되서 그런가 싶었는데, 설정의 메모리 부분을 줄여보는데도 변화가 없었다.
swap 메모리 영역이 설정되어 있지 않아서 그런거 같아서 swap 파일로 설정해두니 잘 동작한다. 
스왑 파일 만들고 적용하는 것은 https://extrememanual.net/12975 에서의 내용을 참고했다.


```
# 스왑 파일 생성
fallocate -l 2GB /swapfile  
chmod 600 /swapfile
mkswap /swapfile

# 스왑 파일 등록
swapon /swapfile
```

나중에 `/etc/fstab`에 다음과 같이 등록하라고 하는데, 혹시 재부팅시에 부팅 안될까봐서 아직은 적용하지 않았다.
```
/swapfile   none    swap    sw    0   0
```



어짜피 하는게 별로 없어서 https://github.com/caddyserver/caddy 라는 걸 써보는 것도 나쁘지 않을거 같다.