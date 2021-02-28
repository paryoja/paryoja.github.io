---
title: "Codejam Qualification Round Review"
date: 2020-05-17T01:57
categories:
  - Essay
tags:
  - Codejam
last_modified_at: 2020-05-17T01:57
---

Codejam 한다고 그렇게 난리 쳐놓고 라운드 2 발린 기념으로 처음부터 리뷰를 해야겠다고 마음을 먹었다.

# [P1 Vestigium](https://codingcompetitions.withgoogle.com/codejam/round/000000000019fd27/000000000020993c)

먼저 trace는 대각 성분의 합. Latin square는 1부터 N 사이의 숫자로 이뤄진 N by N 행렬 각 값이 그 값이 존재하는 행과 열에서 유일한 경우를 의미한다.
스도쿠를 떠올리면 될거 같다. 스도쿠는 N이 9인 latin square의 special case.
이 문제는 그냥 주어진 행렬에 행이나 열에 중복된 element가 몇개인지를 세는 일을 하면 된다. 추가로 trace 값을 구하는 것 까지.
Element 값이 항상 1에서 N 사이 값이므로 hash set을 이용하여 겹치는 값이 존재하는지를 각 행, 열 별로 따져보면 된다.

# [P2 Nesting Depth](https://codingcompetitions.withgoogle.com/codejam/round/000000000019fd27/0000000000209a9f)

숫자의 나열이 주어지고, 그 숫자는 딱 그만큼의 괄호로 둘러쌓여져 있어야 한다.
이때 괄호들은 모두 쌍이 있어야하고, 사용한 괄호수가 최소가 되어야 한다.
같은 숫자가 이어지면 그 사이에는 괄호가 없어도 되고, 숫자가 커지는 부분에는 그 차이만큼의 괄호를 열어주거나 닫아주면 최소한의 괄호를 사용하여 표현할 수 있다.
구현을 편하게 하기 위해서 맨 처음과 맨 마지막에 0을 붙여놓고 짜면, 예외를 처리해야하는 수고를 덜 수 있다.