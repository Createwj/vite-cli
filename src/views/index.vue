<template>
  <h3>index</h3>
  <p>{{ state }}</p>
</template>

<script setup lang="ts">
import { useGlobalState } from '@/store/index'
const state = useGlobalState()
const text = JSON.stringify(state)
</script>
<style></style>
