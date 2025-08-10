<template>
  <transition name="fade">
    <SplashScreen v-if="loading" />
  </transition>

  <!-- konten app muncul setelah loading selesai -->
  <router-view v-show="!loading" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SplashScreen from '@/components/SplashScreen.vue'

const loading = ref(true)

onMounted(() => {
  // TODO: ganti dengan proses init asli (router.isReady(), fetch config, dsb)
  setTimeout(() => {
    loading.value = false
  }, 5000)
})
</script>

<style lang="scss">
@use "./assets/styles/variables" as *;
@use "./assets/styles/base";

/* Fade transisi splash */
.fade-enter-active, .fade-leave-active { transition: opacity .35s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
