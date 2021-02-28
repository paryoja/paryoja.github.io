---
title: "Using TQDM with Multiprocess"
date: 2020-01-24T12:58
categories:
  - Essay
tags:
  - Python
last_modified_at: 2020-01-24T12:58
---

Progress bar를 표시하는 라이브러리인 TQDM을 쓸 때,
작업들이 오래 걸려서 multiprocess를 같이 사용하는 경우 다음과 같이 사용 가능하다. 
출처: [https://stackoverflow.com/](https://stackoverflow.com/questions/41920124/multiprocessing-use-tqdm-to-display-a-progress-bar)


```python
from multiprocessing import Pool
import time
import tqdm

def _foo(my_number):
   square = my_number * my_number
   time.sleep(1)
   return square 

if __name__ == '__main__':
    with Pool(processes=2) as p:
        max_ = 30
        with tqdm.tqdm(total=max_) as pbar:
            for i, _ in enumerate(p.imap_unordered(_foo, range(0, max_))):
                pbar.update()
```
