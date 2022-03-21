<template>
  <router-view />
  <h3>layout</h3>
  <footer class="flex flex-row justify-between fixed bottom-0 w-96">
    <router-link to="/my/index" class="w-1/3 text-center">index</router-link>
    <router-link to="/my/about" class="w-1/3 text-center">about</router-link>
    <router-link to="/my/center" class="w-1/3 text-center">center</router-link>
  </footer>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.layout-box {
  border: 1px solid red;
}
</style>
