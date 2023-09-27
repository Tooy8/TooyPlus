# Button 按钮

常用的操作按钮。

## 基本使用

使用 `type="xxx"`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<script setup lang="ts">
 import {defineOptions} from 'vue'

import {
  Edit,
  Address,
  Search,
  Collect,
  Home,
  Set,
} from "tooy-plus";  // 通过props的icon属性实现，需要单独引入IconSvg组件
</script>
<div class="example">
  <div class="item">
    <y-button type="default">Default</y-button>
    <y-button type="primary" ref="buttonRef" >
      Primary
    </y-button>
    <y-button type="success">Success</y-button>
    <y-button type="info">Info</y-button>
    <y-button type="warning">Warning</y-button>
    <y-button type="danger">Danger</y-button>
  </div>
  <div class="item">
    <y-button plain>Plain</y-button>
    <y-button type="primary" plain>Primary</y-button>
    <y-button type="success" plain>Success</y-button>
    <y-button type="info" plain>Info</y-button>
    <y-button type="warning" plain>Warning</y-button>
    <y-button type="danger" plain>Danger</y-button>
  </div>
  <div class="item">
    <y-button round>Round</y-button>
    <y-button type="primary" round>Primary</y-button>
    <y-button type="success" round>Success</y-button>
    <y-button type="info" round>Info</y-button>
    <y-button type="warning" round>Warning</y-button>
    <y-button type="danger" round>Danger</y-button>
  </div>
 
 <div class="item">
    <y-button :icon="Edit" circle />
    <!-- 通过插槽实现，支持全局注册 -->
    <y-button type="primary" circle>
      <template #icon><Address /></template>
    </y-button>
    <!-- 通过props的icon属性实现，需要单独引入IconSvg组件 -->
    <y-button type="success" :icon="Search" circle />
    <y-button type="info" :icon="Collect" circle />
    <y-button type="warning" :icon="Home" circle />
    <y-button type="danger" :icon="Set" circle />
  </div>
</div>

::: details Show Code

```vue
<script setup lang="ts">
import {
  Edit,
  Address,
  Search,
  Collect,
  Home,
  Set,
} from "tooy-plus"; // 通过props的icon属性实现，需要单独引入IconSvg组件
</script>
<template>
  <div class="item">
    <y-button type="default">Default</y-button>
    <y-button type="primary">Primary</y-button>
    <y-button type="success">Success</y-button>
    <y-button type="info">Info</y-button>
    <y-button type="warning">Warning</y-button>
    <y-button type="danger">Danger</y-button>
  </div>
  <div class="item">
    <y-button plain>Plain</y-button>
    <y-button type="primary" plain>Primary</y-button>
    <y-button type="success" plain>Success</y-button>
    <y-button type="info" plain>Info</y-button>
    <y-button type="warning" plain>Warning</y-button>
    <y-button type="danger" plain>Danger</y-button>
  </div>
  <div class="item">
    <y-button round>Round</y-button>
    <y-button type="primary" round>Primary</y-button>
    <y-button type="success" round>Success</y-button>
    <y-button type="info" round>Info</y-button>
    <y-button type="warning" round>Warning</y-button>
    <y-button type="danger" round>Danger</y-button>
  </div>
  <div class="item">
    <y-button :icon="Edit" circle />
    <!-- 通过插槽实现，支持全局注册 -->
    <y-button type="primary" circle>
      <template #icon><Address /></template>
    </y-button>
    <!-- 通过props的icon属性实现，需要单独引入IconSvg组件 -->
    <y-button type="success" :icon="Search" circle />
    <y-button type="info" :icon="Collect" circle />
    <y-button type="warning" :icon="Home" circle />
    <y-button type="danger" :icon="Set" circle />
  </div>
</template>
```

:::

## 禁用

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。

<div class="example">
  <div class="item">
    <y-button disabled>Default</y-button>
    <y-button type="primary" disabled>Primary</y-button>
    <y-button type="success" disabled>Success</y-button>
    <y-button type="info" disabled>Info</y-button>
    <y-button type="warning" disabled>Warning</y-button>
    <y-button type="danger" disabled>Danger</y-button>
  </div>
  <div class="item">
    <y-button plain disabled>Plain</y-button>
    <y-button type="primary" plain disabled>Primary</y-button>
    <y-button type="success" plain disabled>Success</y-button>
    <y-button type="info" plain disabled>Info</y-button>
    <y-button type="warning" plain disabled>Warning</y-button>
    <y-button type="danger" plain disabled>Danger</y-button>
  </div>
</div>

::: details Show Code

```vue
<template>
  <div class="item">
    <y-button disabled>Default</y-button>
    <y-button type="primary" disabled>Primary</y-button>
    <y-button type="success" disabled>Success</y-button>
    <y-button type="info" disabled>Info</y-button>
    <y-button type="warning" disabled>Warning</y-button>
    <y-button type="danger" disabled>Danger</y-button>
  </div>
  <div class="item">
    <y-button plain disabled>Plain</y-button>
    <y-button type="primary" plain disabled>Primary</y-button>
    <y-button type="success" plain disabled>Success</y-button>
    <y-button type="info" plain disabled>Info</y-button>
    <y-button type="warning" plain disabled>Warning</y-button>
    <y-button type="danger" plain disabled>Danger</y-button>
  </div>
</template>
```

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。

<div class="example">
  <div class="item">
    <y-button size="large">Large</y-button>
    <y-button>Default</y-button>
    <y-button size="small">Small</y-button>
  </div>
  <div class="item">
    <y-button size="large" round>Large</y-button>
    <y-button round>Default</y-button>
    <y-button size="small" round>Small</y-button>
  </div>
  <div class="item">
    <y-button :icon="Edit" size="large" circle />
    <y-button :icon="Edit" circle />
    <y-button :icon="Edit" size="small" circle />
  </div>
</div>

::: details Show Code

```vue
<template>
  <div class="item">
    <y-button size="large">Large</y-button>
    <y-button>Default</y-button>
    <y-button size="small">Small</y-button>
  </div>
  <div class="item">
    <y-button size="large" round>Large</y-button>
    <y-button round>Default</y-button>
    <y-button size="small" round>Small</y-button>
  </div>
  <div class="item">
    <y-button :icon="Edit" size="large" circle />
    <y-button :icon="Edit" circle />
    <y-button :icon="Edit" size="small" circle />
  </div>
</template>
```

:::

<style scoped>
  .example {
    display: flex;
    flex-direction: column;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    padding:20px;
  }
  .example .item {
    margin: 10px 0;
  } 
</style>

## API

### Attributes

| 属性名      | 说明                  | 类型                                                       | 默认值 |
| ----------- | --------------------- | ---------------------------------------------------------- | ------ |
| size        | 尺寸                  | `'large' \| 'default' \| 'small'`                          | —      |
| type        | 类型                  | `'primary' \| 'success' \| 'warning' \|'danger' \| 'info'` | —      |
| plain       | 是否为朴素按钮        | `boolean`                                                  | —      |
| round       | 是否为圆角按钮        | `boolean`                                                  | false  |
| circle      | 是否为圆形按钮        | `boolean`                                                  | false  |
| disabled    | 按钮是否为禁用状态    | `boolean`                                                  | false  |
| icon        | 图标组件              | `'string' \| 'Component'`                                  | —      |
| autofocus   | 原生 `autofocus` 属性 | `boolean`                                                  | false  |
| native-type | 原生 type 属性        | `'button' \| 'submit' \| 'reset'`                          | button |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| icon    | 自定义图标组件 |

### Exposes

| 属性名 | 说明           | 类型                     |
| ------ | -------------- | ------------------------ |
| ref    | 按钮 html 元素 | `Ref<HTMLButtonElement>` |



<style scoped>
  .example {
    display: flex;
    flex-direction: column;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    padding:20px;
  }
  .example .item {
    margin: 10px 0;
  } 
</style>