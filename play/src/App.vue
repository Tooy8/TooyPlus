<template>
  <div>

    <div class="play-container">
      <div class="item">
        Input:
        <y-input v-model="value" placeholder="Basic usage" />
      </div>
      <div class="item">
        lazyInput:
        <y-input v-model.lazy="lazyValue" placeholder="Lazy usage" />
      </div>
      <h2>前缀后缀</h2>
      <div class="item">
        <y-input v-model="value" placeholder="slots">
          <template #prefix>
            <search></search>

          </template>
          <template #suffix>
            <Edit></Edit>

          </template>
        </y-input>
        <y-input v-model="value" prefix="￥" suffix="RMB" placeholder="props" />
      </div>
      <h2>不同大小</h2>
      <div class="item">
        <y-input v-model="value" size="large" placeholder="large" />
        <y-input v-model="value" placeholder="default" />
        <y-input v-model="value" size="small" placeholder="small" />
      </div>
      <h2>一键清空</h2>
      <div class="item">
        <y-input v-model="value" allow-clear placeholder="input allow clear" />
      </div>
      <h2>密码</h2>
      <div class="item">
        <y-input v-model="value" password placeholder="password" />
      </div>
      <h2>禁用</h2>
      <div class="item">
        <y-input v-model="value" disabled placeholder="disabled" />
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'App',


})
</script>
<script setup lang="ts">
import { ref, watchEffect } from "vue";

const value = ref("");
const lazyValue = ref("");
watchEffect(() => {
  console.log("lazyValue:", lazyValue.value);
});
</script>
<style lang="scss" scoped>
.play-container {
  display: flex;
  flex-direction: column;
  height: 900px;
  width: 100%;
  align-items: center;
  justify-content: center;
}
</style>
