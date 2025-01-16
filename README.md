# FrontedEndTemplate

#### Introduction

A front-end project template based on Vite + Vue3.

#### Software Architecture

1. Node version: v22.11.0
2. npm version: v10.9.0

How to switch Node versions:

1. Install nvm;
2. Enter the following command in the terminal:  `nvm use 22`
3. To confirm if the switch is successful, enter:  `node -v` 

#### Feature Introduction

##### 1. Vite Build

This template uses vite as the build tool, you can configure the build of the project in the `vite.config.mjs` file in the root directory.

##### 2. Vue3 Framework

This template is based on the vue3 version.

##### 3. Api Auto Import

Previously, vue's api needed to be imported manually.

```javascript
import { computed, ref } from 'vue';
const count = ref(0);
const doubled = computed(() => count.value * 2);
```

Now, it can be used directly.

```javascript
const count = ref(0);
const doubled = computed(() => count.value * 2);
```

Files in the `src/utils` and `src/composables` directories can also be automatically imported.

Currently supported libraries for automatic import:

- `vue`
- `vue-router`
- `pinia`
- `@vueuse/core`

Just ensure that the dependencies are installed.

##### 4. Component Auto Import

Previously, you needed to `import`.

```vue
<script setup>
import Hello from '../components/Hello.vue';
</script>

<template>
  <Hello />
</template>
```

Now, any components defined in the `src/components` directory will be imported on demand, without the need for `import`.

```vue
<template>
  <Hello />
</template>
```

##### 5. Image Auto Import

Now, you don't need to `import` when using static image resources.

Just use it directly.

As long as the file is in the `src/assets/images` directory, it can be used directly.

##### 6. Auto Restart

When a file is created in the `composables` and `utils` directories, it will be automatically restarted and imported on demand.
