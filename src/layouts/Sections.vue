<!-- src/layouts/Sections.vue -->
<template>
    <div class="layout">
      <Sidebar />
  
      <main class="view">
        <transition name="view-fade" mode="out-in">
          <component :is="currentComp" :key="route.hash || '#about'" />
        </transition>
      </main>
    </div>
  </template>
  
  <script setup>
  import { computed, onBeforeMount, watch } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  
  import Sidebar from '@/components/Sidebar.vue'
  
  /* Halaman-halaman (pastikan file2 ini TIDAK meng-include Sidebar lagi) */
  import About from '@/pages/About/index.vue'
  import Education from '@/pages/Education/index.vue'
  import Skills from '@/pages/Skills/index.vue'
  import Experience from '@/pages/Experience/index.vue'
  import Portfolio from '@/pages/Portfolio/index.vue'
  import Achievements from '@/pages/Achievements/index.vue'
  import Hobbies from '@/pages/Hobbies/index.vue'
  import Contact from '@/pages/Contact/index.vue'
  
  const route = useRoute()
  const router = useRouter()
  
  /* Peta hash → komponen */
  const views = {
    '#about': About,
    '#education': Education,
    '#skills': Skills,
    '#experience': Experience,
    '#portfolio': Portfolio,
    '#achievements': Achievements,
    '#hobbies': Hobbies,
    '#contact': Contact,
  }
  
  /* Paksa hash default SEBELUM render pertama */
  onBeforeMount(() => {
    if (!route.hash || !views[route.hash]) {
      router.replace({ hash: '#about' })
    }
  })
  
  /* Jika hash berubah ke yang tidak dikenal, fallback ke about */
  watch(() => route.hash, (h) => {
    if (!views[h]) router.replace({ hash: '#about' })
  })
  
  /* Komponen aktif berdasarkan hash */
  const currentComp = computed(() => views[route.hash] || About)
  </script>
  
  <style scoped lang="scss">
  .layout { display: flex; min-height: 100vh; width: 100%; }
  .view   { flex: 1; min-width: 0; }
  
  /* Transisi antar section */
  .view-fade-enter-active, .view-fade-leave-active { transition: opacity .25s ease; }
  .view-fade-enter-from, .view-fade-leave-to { opacity: 0; }
  </style>
  