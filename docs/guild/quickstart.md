# 快速上手

## 安装

**With PNPM**

```bash
$ pnpm i tooy-plus
# or
$ pnpm add tooy-plus
```

**With YARN**

```bash
$ yarn add tooy-plus
```

**With NPM**

```bash
$ npm i tooy-plus
```

## 使用

> **Global**

```ts
import { createApp } from "vue";
import App from "./App.vue";

import YElementPlus from "tooy-plus";
import "tooy-plus/dist/style.css";

const app = createApp(App);
app.use(YElementPlus);

app.mount("#app");
```

> **Local**

```vue
<script setup lang="ts">
import { YButton } from "tooy-plus";
import "tooy-plus/dist/style.css";
</script>

<template>
  <y-button></y-button>
</template>
```
