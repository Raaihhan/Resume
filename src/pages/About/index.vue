<!-- src/pages/About/index.vue -->
<template>
    <div class="content">
      <section class="intro">
        <h1 class="title">
          WELCOME TO <span class="accent">MY RESUME!</span>
        </h1>
  
        <div class="meta">
          <span>📍 Jakarta - Indonesia</span>
          <span>·</span>
          <a href="mailto:raihanamin2212@gmail.com">raihanamin2212@gmail.com</a>
          <span>·</span>
          <a href="tel:+6281284697557">🇲🇨 (+62) 81284697557</a>
        </div>
  
        <p class="lead">
          Aku adalah seorang <strong>Backend Developer</strong> selama <strong>2 tahun</strong>,
          berfokus pada pengembangan layanan menggunakan <strong>Golang</strong> dan <strong>gRPC</strong>.
        </p>
        <p class="lead">
          Selama bekerja, aku membangun dan memelihara berbagai layanan backend yang efisien,
          mengoptimalkan kinerja sistem, serta memastikan komunikasi antar microservices berjalan
          lancar melalui protokol gRPC. Aku juga memiliki pengalaman dalam mengelola database,
          menerapkan autentikasi, dan merancang API yang aman dan scalable.
        </p>
        <p class="lead">
          Tujuanku adalah terus mengembangkan keahlian di bidang backend development, mempelajari
          teknologi baru, dan berkontribusi pada pengembangan sistem yang andal, cepat, dan mudah digunakan.
        </p>
  
        <!-- Social links -->
        <SocialLinks :links="social" />
      </section>
    </div>
  </template>
  
  <script setup>
  import SocialLinks from '@/components/SocialLinks.vue'
  
  /* Ganti URL di bawah dengan milikmu */
  const social = {
    instagram: 'https://instagram.com/username_kamu',
    facebook:  'https://facebook.com/username_kamu',
    linkedin:  'https://www.linkedin.com/in/username-kamu/',
    github:    'https://github.com/username_kamu',
  }
  </script>
  
  
  <style lang="scss" scoped>
@use "@/assets/styles/variables" as *;

.page { 
  display: flex; 
  min-height: 100vh; 
  background: $default-section-background; 
}

.content { 
  flex: 1; 
  padding: 80px 60px; /* jarak atas lebih lebar biar turun */
  max-width: 1500px;  /* biar teks nggak cepat turun */
  margin-top: 250px;     /* biar center */
}

.title { 
  font-size: 48px; 
  letter-spacing: .5px; 
  margin: 0 0 16px; 
  color: $text-default-color; 
}

.accent { 
  color: $primary; 
}

.meta { 
  display: flex; 
  flex-wrap: nowrap;  /* biar kalau kecil rapih */
  gap: 12px; 
  align-items: center; 
  font-size: 18px; 
  color: $light-7; 
  margin-bottom: 32px; 
}

.lead { 
  color: darken($text-default-color, 15%); 
  font-size: 18px;
  line-height: 1.7; 
  max-width: 3400px; /* perlebar isi paragraf */
  margin-bottom: 16px; 
}
</style>

  
  