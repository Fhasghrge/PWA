# PWA
### manifeat.json
- name
- short_name
- start_url
- icons
- background_color
- theme_color
- display

### web worker

### service worker生命周期
- install
源代码改变就会重新install
- activate
在install之后激活，但是要保证原来的service worker已经停止
- fetch
