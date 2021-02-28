---
title: "Making Simple Django Login Form"
date: 2020-01-15T23:32
categories:
  - Essay
tags:
  - Squid
last_modified_at: 2020-01-15T23:32
---

Django를 이용해서 로그인/로그아웃 뷰를 만들다가, 이미 만들어져 있는 뷰를 활용할 수는 없을까 하던차에 원래 만들어져 있던 것들을 재활용해보기로 하였다.
`django.contrib.auth`의 뷰를 상속받아 활용하였다. Sidebar에서 지금 어떠한 위치에 있는지 알려주는 context를 넣고 싶어서 
get_context_data 만을 overriding 하였고, logout시에는 index 페이지로 돌아가게 만들고 위에 logout이 제대로 되었음을 나타내는 문구를 주기 위해서
`'logged_out'`을 `True`로 줘서 넘겼다. 

```python
from django.contrib.auth import views as auth_views

from . import views

class BookLoginView(auth_views.LoginView):
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context.update({
            **views.get_render_dict("")
        })
        return context


class BookLogoutView(auth_views.LogoutView):
    template_name = 'book/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context.update({
            'logged_out': True,
            **views.get_render_dict("")
        })
        return context
```

Template 에서는 단순한 로그인 폼을 보여주었다. 
```
{% raw %}
{% extends 'book/base/base.html' %}

{% block body %}
    <h2>로그인</h2>
    <form method="post" action="">
        {% csrf_token %}
        {{ form.as_p }}
        <input type="submit" value="로그인"/>
    </form>
{% endblock %}
{% endraw %}
```

이 파일은 기본적으로 'registration/login.html'로 위치시키면 되고, default value를 쓰기 싫다면 `BookLoginView`의 `template_name`을 overriding 해주면 된다.