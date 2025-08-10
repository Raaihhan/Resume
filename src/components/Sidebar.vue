<template>
    <aside class="sidebar">
      <!-- PROFILE -->
      <div class="profile">
        <div class="avatar-wrap">
          <img class="avatar" src="/assets/profile.jpg" alt="profile" />
        </div>
  
        <div class="name">Muhammad Raihan</div>
        <div class="role">Backend Developer</div>
      </div>
  
      <!-- MENU -->
      <nav class="menu">
  <RouterLink :to="{ hash: '#about' }"        class="item" :class="{active: $route.hash==='#about'}">ABOUT</RouterLink>
  <RouterLink :to="{ hash: '#education' }"    class="item" :class="{active: $route.hash==='#education'}">EDUCATION</RouterLink>
  <RouterLink :to="{ hash: '#skills' }"       class="item" :class="{active: $route.hash==='#skills'}">SKILLS</RouterLink>
  <RouterLink :to="{ hash: '#experience' }"   class="item" :class="{active: $route.hash==='#experience'}">EXPERIENCE</RouterLink>
  <RouterLink :to="{ hash: '#portfolio' }"    class="item" :class="{active: $route.hash==='#portfolio'}">PORTFOLIO</RouterLink>
  <RouterLink :to="{ hash: '#achievements' }" class="item" :class="{active: $route.hash==='#achievements'}">ACHIEVEMENTS</RouterLink>
  <RouterLink :to="{ hash: '#hobbies' }"      class="item" :class="{active: $route.hash==='#hobbies'}">HOBBIES</RouterLink>
  <RouterLink :to="{ hash: '#contact' }"      class="item" :class="{active: $route.hash==='#contact'}">CONTACT</RouterLink>
</nav>

  
      <!-- FOOTER tanpa panah -->
      <footer class="foot">
        <div class="lang">
          <img src="/assets/bendera.jpg" alt="Flag" />
          <span>English</span>
        </div>
        <small>Designed by <a href="#" class="credit">Churros</a></small>
      </footer>
    </aside>
  </template>
  
  <script setup>
  import { RouterLink, useRoute } from 'vue-router'
  const $route = useRoute()
  
  // Fungsi ketika tanda panah di avatar diklik
  function onAvatarArrowClick() {
    alert('Tombol avatar arrow diklik!') 
    // nanti bisa kamu ganti dengan navigasi atau aksi lain
  }
  </script>
  
  <style lang="scss" scoped>
  @use "@/assets/styles/variables" as *;
  
  .sidebar{
    width: 260px; background: $nav-background; color: $nav-contrast-90;
    display:flex; flex-direction:column; padding: 28px 22px 20px; gap: 28px;
  }
  
  .profile{ display:flex; flex-direction:column; align-items:center; gap: 18px; margin-top: 6px; }
  
  .avatar-wrap{
    position: relative; width: 180px; height: 180px; border-radius: 50%;
    display:grid; place-items:center;
    background:
      radial-gradient(circle at center, transparent 66%, $nav-background 66.2% 68%, transparent 68.2%),
      radial-gradient(circle at center, transparent 78%, rgba(#5a46aa, .35) 78.2% 79.5%, transparent 79.7%),
      radial-gradient(circle at center, transparent 86%, rgba(#7e45dc, .35) 86.2% 87.2%, transparent 87.4%);
    box-shadow:
      0 12px 24px rgba(0,0,0,.35),
      inset 0 0 0 2px rgba(255,255,255,.04);
  }
  
  .avatar{
    width: 160px; height: 160px; border-radius: 50%; object-fit: cover;
    border: 3px solid $nav-avatar-border-color;
  }
  
  .avatar-badge{
    position: absolute; left: -6px; bottom: 14px;
    width: 38px; height: 38px; border-radius: 50%;
    display:grid; place-items:center;
    background: #1a1530; color: $nav-contrast;
    border: 3px solid #2a2146;
    box-shadow: 0 6px 14px rgba(0,0,0,.45);
    cursor: pointer; padding: 0;
    transition: transform .15s ease, background .2s ease;
    &:hover{ transform: translateY(-1px); background: lighten(#1a1530, 4%); }
  }
  
  .name{
    color: $nav-contrast; letter-spacing: .22em; text-indent: .22em;
    font-weight: 700; font-size: 22px; text-align:center;
  }
  .role{
    color: $nav-contrast-70; font-size: 18px; letter-spacing:.02em;
  }
  
  .menu{ display:flex; flex-direction:column; gap: 12px; margin-top: 10px; }
  .item{
    padding: 12px 0;
    text-align: center;
    font-family: $font-family-base;
    font-weight: 600; letter-spacing:.04em;
    color: $nav-contrast-70;
    &:hover{ color: $nav-contrast; background: $nav-background-selected; }
    &.active{ color: lighten($primary, 20%); background: rgba($primary,.12); }
  }
  
  .foot{ margin-top:auto; display:flex; flex-direction:column; align-items:center; gap:14px; }
  .lang{
    display:flex; align-items:center; gap:10px; color:$nav-contrast-80; font-weight:600;
    img{ width:22px; height:22px; border-radius:50%; box-shadow:0 0 0 2px rgba(255,255,255,.06); }
  }
  .credit{ color: lighten($primary, 10%); text-decoration:none; }
  .credit:hover{ color: lighten($primary, 18%); }
  </style>
  