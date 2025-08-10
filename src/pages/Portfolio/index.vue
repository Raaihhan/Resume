<template>
    <div class="page">
      <Sidebar />
      <main class="content">
        <h1 class="title"><span class="accent">PORTFOLIO</span></h1>
        <p class="subtitle">Coming soon.</p>
      </main>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped>
  @use "@/assets/styles/variables" as *;
  
  .page { display:flex; min-height:100vh; background:$default-section-background; }
  .content { flex:1; padding:64px 56px; }
  .title { margin:0 0 6px; color:$text-default-color; font-size:44px; }
  .accent { color:$primary; }
  .subtitle { color:$light-7; margin:0; }
  </style>
  