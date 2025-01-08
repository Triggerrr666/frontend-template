# FrontedEndTemplate

#### 介绍

基于 Vite + Vue3 的前端项目模版

#### 软件架构

1. node 版本: v22.11.0
2. npm 版本: v10.9.0

Node 版本切换方法:

1. 安装nvm;
2. 命令行输入如下指令: `nvm use 22`
3. 如需确认是否切换成功, 命令行输入: `node -v` 即可

#### 特性介绍

##### 1. Vite 构建

该模板采用 vite 作为构建工具，你可以在根目录下的`vite.config.ts` 对项目的构建进行配置。

##### 2. Vue3 框架

该模板基于vue3 版本搭建。

##### 3. Api 自动引入

原本 vue 的 api 需要自行`import`。

```javascript
import { computed, ref } from 'vue';
const count = ref(0);
const doubled = computed(() => count.value * 2);
```

现在可以直接使用。

```javascript
const count = ref(0);
const doubled = computed(() => count.value * 2);
```

包括`src/utils` 和 `src/composables` 目录下的文件也可以自动引入。

目前支持自动引入 `api` 的库：

- `vue`
- `vue-router`
- `pinia`
- `@vueuse/core`

只要确保已经安装依赖即可。

##### 4. 组件自动引入

原来需要`import`

```vue
<script setup>
import Hello from '../components/Hello.vue';
</script>

<template>
  <Hello />
</template>
```

现在只要在`src/components` 下定义的组件都会按需引入，无需`import`。

```vue
<template>
  <Hello />
</template>
```

##### 5. 图片自动引入

现在使用静态图片资源时无需`import`，直接使用即可。

只要文件在`src/assets/images` 目录下，即可直接使用。

##### 6. 自动重启

当在`composables` 和 `utils` 目录下新建文件时，会自动重启并按需导入。
