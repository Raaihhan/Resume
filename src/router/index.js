import { createRouter, createWebHistory } from 'vue-router'
import Sections from '@/layouts/Sections.vue'

export default createRouter({
  history: createWebHistory('/resume/'),   // <- base path
  routes: [{ path: '/', name: 'Sections', component: Sections }],
  scrollBehavior(to) {
    // scroll halus tiap pindah hash
    if (to.hash) return { top: 0 }
    return { top: 0 }
  }
})
