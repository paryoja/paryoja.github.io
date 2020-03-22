---
title: "Pre-commit setting in Windows"
date: 2020-03-22T22:24
categories:
  - Essay
tags:
  - Django
last_modified_at: 2020-03-22T22:24
---

Windows에서 pre-commit 설정을 하니 pre-commit 파일 경로가 linux 방식으로 작성이 되어 있었다.
그래서 python을 못찾겠다고 메시지가 나왔는데,

```shell script
#!C:/Users/paryoja/AppData/Local/Microsoft/WindowsApps/python.exe
```

이런 식으로 하면 windows 경로 세팅도 적용되는 것을 알 수 있었다.
가끔 flake8 같은 걸 못찾거나 하면 path 설정을 통해서 flake8 위치를 추가해주고 껏다 키니 잘 되는 것을 볼 수 있었다.
위치 찾는 방법은  `where flake8` 을 사용하면 되는 듯 


다음은 pre-commit 세팅하는 `.pre-commit-config.yaml` 파일 내용.
Black 인지 체크하는 것이나, 간단한 unit-test도 붙여보면 좋을듯.

```yaml
exclude: 'docs|node_modules|migrations|.git|.tox'
default_stages: [commit]
fail_fast: true

repos:
-   repo: https://github.com/pre-commit/pre-commit-hooks
    rev: master
    hooks:
      - id: trailing-whitespace
        files: (^|/)a/.+\.(py|html|sh|css|js)$

-   repo: local
    hooks:
      - id: flake8
        name: flake8
        entry: flake8
        language: python
        types: [python]
        args: ['--config=setup.cfg']

``` 