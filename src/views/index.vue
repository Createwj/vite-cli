<template>
  <h3>index</h3>
  <p>{{ state }}</p>
  <div class="bind">
    111
    <p class="bind-title">123</p>
    <p class="bind-content">321</p>
  </div>
</template>

<script setup lang="ts">
import { useGlobalState } from '@/store/index'
const state = useGlobalState()
const text = JSON.stringify(state)
</script>
<style lang="scss">
.bind {
  color: red;
  &-title {
    color: black;
  }
  &-content {
    color: blue;
  }
}
</style>
