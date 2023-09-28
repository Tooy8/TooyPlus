# Icon 图标

TOOY-UI 提供了一套常用的图标集合。

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件库，或者单独引入才能够直接在项目里使用。

- 如若需要查看所有可用的 SVG 图标请查阅 [@tooy-ui/components/icon/iconSvg](https://github.com/Tooy8/TooyPlus/tree/master/packages/components/icon/iconSvg)

## 基本使用

SVG 组件图标

<div class="example">
  <div class="item">
    <y-icon :size="30">
      <!-- SVG组件图标 -->
      <Edit />
    </y-icon>
  </div>
  
</div>

::: details Show Code

```vue
<script setup lang="ts">
// import { Edit } from "tooy-plus"; // 可以单独引入
</script>

<template>
  <div class="item">
    <y-icon :size="size" :color="color">
      <!-- SVG组件图标 -->
      <Edit />
    </y-icon>
  </div>
  
</template>

<style>
/* @import "./src/asset/iconfont/iconfont.css"; */
</style>
```

:::

## 结合 y-icon 使用

y-icon 为 raw SVG 图标提供额外的属性, 提供的详细属性请继续阅读。

<div class="example flex">
  <div class="item">
    <y-icon :size="20">
      <!-- SVG组件图标 -->
      <Edit />
    </y-icon>
  </div>
  <div class="item">
    <y-icon :size="30" :color="'#3451b2'">
      <!-- SVG组件图标 -->
      <Address />
    </y-icon>
  </div>
  <div class="item">
    <y-icon :size="20">
      <!-- SVG组件图标 -->
      <Search />
    </y-icon>
  </div>
</div>

::: details Show Code

```vue
<script setup lang="ts">
// import {
//   Edit,
//   Address,
//   Search,
// } from "myat-ui"; // 可以单独引入
</script>

<template>
  <div class="item">
    <y-icon :size="20">
      <!-- SVG组件图标 -->
      <Edit />
    </y-icon>
  </div>
  <div class="item">
    <y-icon :size="30" :color="'#3451b2'">
      <!-- SVG组件图标 -->
      <Address />
    </y-icon>
  </div>
  <div class="item">
    <y-icon :size="20">
      <!-- SVG组件图标 -->
      <Search />
    </y-icon>
  </div>
</template>
```

:::

## 直接使用 SVG 图标

<div class="example flex" style="font-size: 20px">
  <!-- 由于SVG图标默认不携带任何属性 -->
  <!-- 你需要直接提供它们 -->
  <Edit style="width: 1em; height: 1em; margin-right: 8px" />
  <Address style="width: 1em; height: 1em; margin-right: 8px" />
  <Search style="width: 1em; height: 1em; margin-right: 8px" />
  <Collect style="width: 1em; height: 1em; margin-right: 8px" />
  <Home style="width: 1em; height: 1em; margin-right: 8px" />
  <Set style="width: 1em; height: 1em; margin-right: 8px" />
</div>

::: details Show Code

```vue
<script setup lang="ts">
// import {
// Edit,
// Address,
// Search,
// Collect,
// Home,
// Set,
// } from "tooy-plus"; // 可以单独引入
</script>

<template>
  <div style="font-size: 20px">
    <!-- 由于SVG图标默认不携带任何属性 -->
    <!-- 你需要直接提供它们 -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
    <Address style="width: 1em; height: 1em; margin-right: 8px" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
    <Collect style="width: 1em; height: 1em; margin-right: 8px" />
    <Home style="width: 1em; height: 1em; margin-right: 8px" />
    <Set style="width: 1em; height: 1em; margin-right: 8px" />
  </div>
</template>
```

:::

<style scoped>
/* @import '../../../../play/src/asset/iconfont/iconfont.css'; */

.example {
  /* flex-direction: column; */
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  padding:20px;
}
.example .item {
  margin: 10px 0;
} 

.flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

## API

### Attributes

| 属性名 | 说明                        | 类型                | 默认值       |
| ------ | --------------------------- | ------------------- | ------------ |
| color  | svg 的 fill 颜色            | `string`            | 继承颜色     |
| size   | SVG 图标的大小，size x size | `number` / `string` | 继承字体大小 |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
