<template>
  <h2>测试</h2>
  <el-button type="primary" size="default" :icon="Check">主按钮</el-button>
  <el-button type="success" size="default" :icon="Edit">成功按钮</el-button>

  <SvgIcon name="face_savoring_food_color" size="128px" />

</template>

<script setup lang="ts">
import { Check, Edit } from '@element-plus/icons-vue';

</script>

<style lang="scss" scoped>
h2 {
  color: $primary-color;
}
</style>
