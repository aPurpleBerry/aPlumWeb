# 配置

eslint prettier husky commitlint
src-@

# package

vueuse
router
axios
anywhere 随启随用的静态文件服务器 ——失败 删除了

# 是否为移动设备

src\utils\flexible.js

# 网络请求

axios相应拦截器
跨域
环境变量 dev prod

# 封装组件
## svg
src\libs\svg-icon\index.vue
在Vue应用中安装和使用一个自定义的SVG图标组件库。
把封装的svg插件，在vite中注册：vite-plugin-svg-icons
main.js注册

# tailwind使用
ul  li  最后一个元素
```
<li
  v-for="item in _categorys"
  :key="item.id"
  class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
>
  {{ item.name }}
</li>
```
