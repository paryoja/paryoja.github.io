---
title: "Get settings from Django settings"
date: 2020-02-09T18:40
categories:
  - Essay
tags:
  - Django, Web, Serving
last_modified_at: 2020-02-09T18:40
---

Django에서 setting으로 사용하고 있는 내용을 settings.py가 아닌 다른 곳에서 쓰기 위해서는 다음과 같이 할 수 있다.
예를 들어 settings.py에 변수 값을 적어두고, 쓰려는 파일에서 다음과 같이 쓰면 된다.

```python
from django.conf import settings

VERSION = getattr(settings, "VERSION", "0.0.1")
```