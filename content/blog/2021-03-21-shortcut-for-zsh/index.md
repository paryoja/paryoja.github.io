---
title: Shortcut for zsh
date: "2021-03-21T07:02:00KST"
---

ZSH에서 home키랑 end키 그리고 ctrl+화살표로 이동하는 것이 동작하지 않아서 찾아 보던중 방법을 발견했다.

`~/.zshrc` 파일을 수정해서

```
bindkey  "^[[H"    beginning-of-line
bindkey  "^[[F"    end-of-line
bindkey  "^[[3~"   delete-char
bindkey  "^[[1;5C" forward-word
bindkey  "^[[1;5D" backward-word
```
의 내용을 넣으면 의도대로 home키 end키 그리고 화살표키 그리고 지우는 것까지 (이건 원래 안됬었나? 모르겠네) 동작한다.
