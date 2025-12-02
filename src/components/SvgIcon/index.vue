<template>
  <svg aria-hidden="true" class="svg-icon" :style="{ width: size, height: size }">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>
<script setup lang="ts">
import { computed } from 'vue';

// 定义组件属性
const props = defineProps({
  // 图标名称，对应 src/assets/icons 下的 SVG 文件名
  name: {
    type: String,
    required: true
  },
  // 图标颜色
  color: {
    type: String,
    default: ''
  },
  // 图标大小
  size: {
    type: [Number, String],
    default: '1em'
  }
})

// 计算 symbolId，对应 vite 配置中的格式
// 假设文件名是 'user'，生成的 ID 就是 '#icon-user'
const symbolId = computed(() => `#icon-${props.name}`)
</script>
<style scoped>
.svg-icon {
  /* 让图标跟文字对齐 */
  vertical-align: -0.15em;
  /* 默认颜色填充为当前文字颜色 (非常重要！这样图标颜色能随父级 div 变色) */
  fill: currentColor;
  overflow: hidden;
}
</style>
