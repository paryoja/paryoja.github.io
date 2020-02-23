---
title: "Django Admin Too Many Foreign Key"
date: 2020-02-23T12:20
categories:
  - Essay
tags:
  - Django, Web, Serving
last_modified_at: 2020-02-23T12:20
---

Django에서 이미지에 대한 Rating을 Foreign Key로 관리하다 보니, 이미지 수가 많아 짐에 따라 Admin 페이지에서
변경할 때, 모든 이미지를 select box로 제공하려다 보니 수정이 불가능해질 정도로 느려지는 경우가 있다.
이럴때에는 raw_id_fields를 활용하여 select box로 제공하지 않도록 설정 해줄 수 있다.
[장고 Admin 설명](https://docs.djangoproject.com/en/3.0/ref/contrib/admin/#django.contrib.admin.ModelAdmin.raw_id_fields)

models.py
```python
class PokemonImage(models.Model):
    url = models.URLField(unique=True, max_length=400)
    title = models.CharField(max_length=200)

class PokemonRating(models.Model):
    image = models.ForeignKey(PokemonImage, on_delete=models.CASCADE)
```

admin.py
```python
class RatingAdmin(admin.ModelAdmin):
    raw_id_fields = ("image",)

admin.site.register(models.Rating, RatingAdmin)
```