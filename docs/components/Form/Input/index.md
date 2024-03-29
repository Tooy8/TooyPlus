# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装

## 基本使用

::: tip .lazy
默认情况下，`v-model` 会在每次 `input` 事件后更新数据 (IME 拼字阶段的状态例外)。你可以添加 `lazy` 修饰符来改为在每次 `change` 事件后更新数据。

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const value = ref("");
const lazyValue = ref("");
watchEffect(() => {
  console.log("value:", value.value);
});
watchEffect(() => {
  console.log("lazyValue:", lazyValue.value);
});
</script>

```vue
<!-- 在 "change" 事件后同步更新而不是 "input" -->
<y-input v-model.lazy="lazyValue" />
```

:::

<div class="example">
  <div class="item">
    <y-input v-model="value" placeholder="Basic usage" />
  </div>
  <div class="item">
    <y-input v-model.lazy="lazyValue" placeholder="Lazy usage" />
  </div>
</div>

::: details Show Code

```vue
<template>
  <div class="example">
    <y-input v-model="value" placeholder="Basic usage" />
    <y-input v-model.lazy="lazyValue" placeholder="Lazy usage" />
  </div>
</template>
```

:::

## 前缀和后缀

要在输入框中添加图标，你可以使用 `prefix` 和 `suffix` 命名的插槽 。另外，也可以直接使用 `prefix` 和 `suffix` 属性插入 `String`。

<div class="example">
  <!-- slot -->
  <div class="item">
    <y-input v-model="value" placeholder="slots">
      <template #prefix>
        <Search></Search>
      </template>
      <template #suffix>
        <Edit></Edit>
      </template>
    </y-input>
  </div>
  <!-- props -->
  <div class="item">
    <y-input v-model="value" prefix="￥" suffix="RMB" placeholder="props" />
  </div>
</div>

::: details Show Code

```vue
<template>
  <!-- slot -->
  <y-input v-model="value" placeholder="slots">
    <template #prefix>
      <Search></Search>
    </template>
    <template #suffix>
      <Edit></Edit>
    </template>
  </y-input>
  <!-- props -->
  <y-input v-model="value" prefix="￥" suffix="RMB" placeholder="props" />
</template>
```

:::

## 尺寸

使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `large` , `small`。

<div class="example">
  <div class="item">
    <y-input v-model="value" size="large" placeholder="large" />
  </div>
  <div class="item">
    <y-input v-model="value" placeholder="default" />
  </div>
  <div class="item">
    <y-input v-model="value" size="small" placeholder="small" />
  </div>
</div>

::: details Show Code

```vue
<template>
  <y-input v-model="value" size="large" placeholder="large" />
  <y-input v-model="value" placeholder="default" />
  <y-input v-model="value" size="small" placeholder="small" />
</template>
```

:::

## 一键清空

使用 `allow-clear` 属性即可得到一个可一键清空的输入框

<div class="example">
  <y-input v-model="value" allow-clear placeholder="input allow  clear" />
</div>

::: details Show Code

```vue
<template>
  <y-input v-model="value" allow-clear placeholder="input allow clear" />
</template>
```

:::

## 密码框

使用 `password` 属性即可得到一个可切换显示隐藏的密码框

<div class="example">
  <y-input v-model="value" password allow-clear placeholder="password" />
</div>

::: details Show Code

```vue
<template>
  <y-input v-model="value" password allow-clear placeholder="password" />
</template>
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 `input` 组件

<div class="example">
  <y-input v-model="value" disabled placeholder="disabled" />
</div>

::: details Show Code

```vue
<template>
  <y-input v-model="value" disabled placeholder="disabled" />
</template>
```

:::

<!-- <div class="example">
  <div class="item">
  </div>
  <div class="item">
  </div>
</div> -->

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
