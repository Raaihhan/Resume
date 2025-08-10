// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Sections from '@/layouts/Sections.vue'

export default createRouter({
  history: createWebHistory('/resume/'), // base tetap /resume/
  routes: [{ path: '/', component: Sections }],
})
