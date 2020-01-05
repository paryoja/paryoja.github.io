---
title: "2FA Authentication for github"
date: 2020-01-05T00:23
categories:
  - Essay
tags:
  - github
last_modified_at: 2020-01-05T00:23
---

Google등 검색 엔진에 검색이 되도록 하려는 중에 왠지 걱정이 되어서 two-factor authentication을 활성화 시켰다.
덕분에 기존 git push 시에 인증이 안되는 이슈가 발생.
 [github 안내 페이지](https://help.github.com/en/github/authenticating-to-github/accessing-github-using-two-factor-authentication){:target="_blank"}에 
보니 ssh key로 하거나 personal access token을 사용하라고 하였다.

Personal access token을 생성했는데, 생성시에 적어 두거나 저장해두지 않으면 다음번 쓸 때 재발급 받아야 하는 문제가 있어서
ssh 키를 등록하는 방식으로 진행해 보았다.
Linux / Mac 이야 ssh-keygen 명령어로 쉽게 생성이 가능했는데, windows 환경에서는 putty의 기능을 써야했다. 
Putty를 깔아야하나 고민하던 차에 git client로 쓰던 Sourcetree에 ssh key 생성 기능이 putty-gen으로 되어 있음을 깨닫고
그걸 이용하여 생성 완료.
다만 Sourcetree가 의문의 이유로 종료되는 것을 겪었다. (Atlassian 좋아하는데 Sourcetree 안정성은 왜 항상...) 
여튼 key 생성 후 등록 완료. 따라서 현재는 windows/mac book에서 github push가 자유로워졌다.
> 다만 기존에 https:// 경로로 checkout한 repository의 설정을 모두 ssh로 변경하는 번거로움은 있었다.