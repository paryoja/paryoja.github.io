---
title: "Crawling with Selenium"
date: 2020-01-12T10:16
categories:
  - Essay
tags:
  - Selenium
  - Python
last_modified_at: 2020-01-12T10:16
---

데이터를 크롤링 하기 위해서 requests 를 이용해서 진행하다가 스크립트를 이용하여 데이터가 변경되는 사이트가 있어서
java script를 실행해서 받아 올까 하다가 Selenium을 활용하여 실제 웹 브라우저를 이용해서 진행하였다.

먼저 Chrome driver를 다운받아 경로에 두고 다음과 같이 driver를 생성한다.

```python
from selenium import webdriver

options = webdriver.ChromeOptions()

(옵션 설정)

driver = webdriver.Chrome('{}/chromedriver'.format(chrome_driver_path), chrome_options=options)
```

브라우저에서 진행할 수 있는 다양한 행동을 함수를 통해서 수행 할 수 있다.

```python
driver.get(url)                       # url로 이동
driver.execute_script()               # java script 실행
driver.set_window_position(100, 100)  # 브라우저 위치 설정
driver.set_window_size(600, 600)      # 브라우저 크기 설정
driver.page_source                    # 현재 html 가져오기, 함수가 아님에 유의
```

때로는 웹 페이지가 로드 되기 전이여서 기다려야 할 때가 있다.
자주 쓰일거 같아서 함수로 만들어 보았다.

```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait

def wait(driver, name, type=By.NAME):
    try:
        WebDriverWait(driver, 3).until(
            EC.presence_of_element_located((type, name))
        )
```

Chrome option 부분에서 headless 모드로 실행(실제 동작하는 모습을 보여주지 않음)한다던지 프록시 설정을 진행할 수도 있다.

```python
options.add_argument('--proxy-server=%s' % PROXY)
options.add_argument('headless')
``` 