<template>
    <div class="splash">
      <DotLottieVue
        :src="lottieUrl"
        autoplay
        loop
        style="width: 180px; height: 180px"
      />
    </div>
  </template>
  
  <script setup>
  import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
  
  // PAKAI URL YANG INI (punya kamu)
  const lottieUrl =
    'https://lottie.host/23369891-452d-4972-9c86-a0e4860d6de3/42WQSbUhEA.lottie'
  </script>
  
  <style scoped>
  .splash {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: #140f29;  /* biar kelihatan */
    z-index: 99999;       /* pastikan di atas konten lain */
  }
  </style>
  