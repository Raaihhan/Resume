<template>
    <div class="content">
      <header class="head">
        <h1 class="title">
          <span class="accent">EDUCATION</span> BACKGROUND
        </h1>
        <p class="subtitle">A glimpse into my academic trajectory and accomplishments.</p>
      </header>
  
      <section class="timeline">
        <article v-for="(edu, i) in educations" :key="i" class="entry">
          <!-- Badge tepat di garis -->
          <div class="badge">
            <img
              v-if="edu.logo"
              :src="edu.logo"
              :alt="edu.school"
              @error="onImgError(i)"
            />
            <span v-else class="emoji">{{ edu.emoji }}</span>
          </div>
  
          <!-- Card -->
          <div class="card">
            <div class="row-1">
              <h3 class="degree">{{ edu.title }}</h3>
              <div class="date-pill">
                <span>{{ edu.start }}</span>
                <span class="sep">→</span>
                <span>{{ edu.end }}</span>
              </div>
            </div>
  
            <div class="meta">
              <span class="meta-item"><i>🏫</i> {{ edu.school }}</span>
              <span class="dot">·</span>
              <span class="meta-item"><i>📍</i> {{ edu.location }}</span>
            </div>
  
            <p v-for="(d, idx) in edu.desc" :key="idx" class="desc">{{ d }}</p>
          </div>
        </article>
  
        <div class="end-cap"></div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import unnesLogo from '@/assets/edu/unnes.png'
import smaLogo   from '@/assets/edu/sma-pb-soedirman.png'
  
  const educations = ref([
    {
      title: "S.Kom – Informatics Engineering",
      school: "Universitas Negeri Semarang (UNNES)",
      location: "Semarang • Indonesia",
      start: "2020",
      end: "2024",
      logo: unnesLogo,
      emoji: "🎓",
      desc: [
        "Mengikuti lomba DIMAT-Ti dan meraih Juara Harapan 2.",
        "Website ini dirancang untuk mendeteksi tumor otak menggunakan machine learning, dibuat khusus untuk keperluan penelitian. Platform ini memanfaatkan dataset berisi 3.762 citra dengan 15 fitur. Seleksi fitur menggunakan PCA, diikuti klasifikasi Decision Tree (DT) dan Naive Bayes (NB). Tujuan platform ini adalah menyediakan metode deteksi tumor otak yang cepat, efisien, dan akurat."
      ]
    },
    {
      title: "SMA Islam PB Soedirman",
      school: "PB Soedirman Jakarta Timur",
      location: "Jakarta Timur • Indonesia",
      start: "2016",
      end: "2019",
      logo: smaLogo, 
      emoji: "🏫",
      desc: [
        "Aktif di kegiatan sains & teknologi. Memperkuat dasar logika, pemrograman, dan problem solving."
      ]
    }
  ])
  
  // kalau img gagal load → jatuhkan ke emoji (logo = null)
  function onImgError(index) {
    educations.value[index].logo = null
  }
  </script>
  
  <style lang="scss" scoped>
  @use "@/assets/styles/variables" as *;
  @use "sass:color";
  @use "sass:math";
  
  /* layout halaman (Sidebar sudah dari layout) */
  .content { flex:1; padding:64px 56px; max-width:1200px; margin:0 auto; background:$default-section-background; }
  .head { margin-bottom:24px; }
  .title { font-size:44px; margin:0 0 6px; color:$text-default-color; letter-spacing:.02em; }
  .accent { color:$primary; }
  .subtitle { margin:0; color:$light-7; }
  
  /* timeline params */
  $badge-size: 80px;
$left-gutter: 160px;
$line-x: 70px;
$badge-left: $line-x - $left-gutter - math.div($badge-size, 2);


  
  .timeline { position:relative; padding-left:$left-gutter; margin-top:24px; }
  .timeline::before { content:""; position:absolute; left:$line-x; top:0; bottom:0; width:3px; background:$light-3; border-radius:2px; }
  
  .entry { position:relative; margin:28px 0 44px; }
  
  /* badge di garis (luar card) */
  .badge{
    position:absolute; top:12px; left:$badge-left;
    width:$badge-size; height:$badge-size; border-radius:50%;
    overflow:hidden; display:grid; place-items:center; z-index:2;
    background: color.adjust($primary, $lightness: 30%, $alpha: -0.7);
    box-shadow: 0 8px 18px rgba(0,0,0,.12), inset 0 0 0 3px rgba(255,255,255,.35);
  }
  .badge img { display:block; width:64px; height:64px; border-radius:50%; object-fit:cover; }
  .badge .emoji { font-size:30px; }
  
  /* card */
  .card{ position:relative; z-index:1; background: rgba(255,255,255,.55); border-radius:14px; padding:18px 20px 16px; box-shadow: 0 4px 10px rgba(0,0,0,.04); }
  .row-1{ display:grid; grid-template-columns:1fr auto; align-items:center; gap:18px; }
  .degree{ margin:0; font-size:22px; color:$text-default-color; }
  .date-pill{ justify-self:end; display:flex; align-items:center; gap:10px; background: rgba(255,255,255,.8); border:1px solid $light-3; border-radius:999px; padding:8px 12px; white-space:nowrap; font-weight:600; color: color.adjust($text-default-color, $lightness: -5%); }
  .date-pill .sep{ opacity:.7; }
  
  .meta{ display:flex; align-items:center; gap:10px; color:$light-7; margin-top:8px; font-size:14.5px; }
  .meta .dot{ opacity:.5; }
  .meta i{ font-style:normal; margin-right:6px; }
  
  .desc{ margin-top:10px; margin-bottom:0; line-height:1.65; color: color.adjust($text-default-color, $lightness: -12%); }
  
  .end-cap{ position:absolute; left:calc(#{$line-x} - 12px); bottom:-6px; width:24px; height:24px; border-radius:50%; background:$light-2; box-shadow: inset 0 0 0 6px $light-3; }
  
  @media (max-width: 900px){
    $badge-size: 64px;
  $left-gutter: 128px;
  $line-x: 56px;
  $badge-left: $line-x - $left-gutter - math.div($badge-size, 2);
    .badge img{ width:52px; height:52px; }
  }
  @media (max-width: 560px){
    .row-1{ grid-template-columns: 1fr; gap:10px; }
    .date-pill{ justify-self:start; padding:6px 10px; }
  }
  </style>
  