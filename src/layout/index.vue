<template>
  <router-view />
  <h3>layout</h3>
  <footer class="flex flex-row justify-between fixed bottom-0 w-96">
    <router-link to="/" class="w-1/3 text-center">1</router-link>
    <router-link to="home" class="w-1/3 text-center">2</router-link>
    <router-link to="my" class="w-1/3 text-center">3</router-link>
  </footer>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.layout-box {
  border: 1px solid red;
}
</style>
