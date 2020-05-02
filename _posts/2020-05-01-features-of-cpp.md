---
title: "Features of CPP"
date: 2020-05-02T13:50
categories:
  - Essay
tags:
  - CPP
last_modified_at: 2020-05-02T13:50
---

Codejam 준비를 하다가 Korotkevich의 코드를 보는데, 모르는 cpp 문법이 있어서 정리해본다.

1. auto keyword
   * auto는 변수의 타입을 추론해서 설정하는 키워드

2. bits/stdc++.h
   * 다양한 header를 미리 모아둔 header
   * mac에는 없어서 그냥 /usr/local/include에 만들어 주었다.
   
3. `ios::sync_with_stdio(false)`와 `cin.tie(0)`
   * cin과 cout의 성능 관련
   
4. [&] 키워드
   * lambda function은 [](){} 으로 정의
   * [&] body에서 쓰이는 모든 변수나 상수를 참조로 캡처하고 현재 객체를 참조로 캡처.

5. for each loop
   * `for (auto &p : check)` 와 같이 for each로 loop을 돌 수 있다.

   