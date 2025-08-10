<template>
    <div class="social">
      <a
        v-if="links.instagram"
        :href="links.instagram"
        class="btn"
        aria-label="Instagram"
        target="_blank"
        rel="noopener"
        title="Instagram"
      >
        <!-- Instagram -->
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.2c2.8 0 3.1 0 4.2.1 1 .1 1.6.2 2 .4.5.2.8.4 1.2.8.4.4.6.7.8 1.2.2.4.3 1 .4 2 .1 1.1.1 1.4.1 4.2s0 3.1-.1 4.2c-.1 1-.2 1.6-.4 2-.2.5-.4.8-.8 1.2-.4.4-.7.6-1.2.8-.4.2-1 .3-2 .4-1.1.1-1.4.1-4.2.1s-3.1 0-4.2-.1c-1-.1-1.6-.2-2-.4a3.6 3.6 0 0 1-2-2c-.2-.4-.3-1-.4-2C2.2 15.1 2.2 14.8 2.2 12s0-3.1.1-4.2c.1-1 .2-1.6.4-2 .2-.5.4-.8.8-1.2.4-.4.7-.6 1.2-.8.4-.2 1-.3 2-.4C8.9 2.2 9.2 2.2 12 2.2Zm0 3.5c-2.7 0-3 0-4.1.1-.9.1-1.4.2-1.7.4-.4.1-.6.3-.9.6-.3.3-.5.5-.6.9-.2.3-.3.8-.4 1.7-.1 1.1-.1 1.4-.1 4.1s0 3 .1 4.1c.1.9.2 1.4.4 1.7.1.4.3.6.6.9.3.3.5.5.9.6.3.2.8.3 1.7.4 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c.9-.1 1.4-.2 1.7-.4.4-.1.6-.3.9-.6.3-.3.5-.5.6-.9.2-.3.3-.8.4-1.7.1-1.1.1-1.4.1-4.1s0-3-.1-4.1c-.1-.9-.2-1.4-.4-1.7-.1-.4-.3-.6-.6-.9a2.2 2.2 0 0 0-.9-.6c-.3-.2-.8-.3-1.7-.4-1.1-.1-1.4-.1-4.1-.1Zm0 3.3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5-2.1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
        </svg>
      </a>
  
      <a
        v-if="links.facebook"
        :href="links.facebook"
        class="btn"
        aria-label="Facebook"
        target="_blank"
        rel="noopener"
        title="Facebook"
      >
        <!-- Facebook -->
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 22v-8h2.6l.4-3h-3v-1.9c0-.9.3-1.5 1.6-1.5h1.5V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V11H7v3h2.2v8h4.3Z"/>
        </svg>
      </a>
  
      <a
        v-if="links.linkedin"
        :href="links.linkedin"
        class="btn"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener"
        title="LinkedIn"
      >
        <!-- LinkedIn -->
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6 9h3.6v10H6V9Zm1.8-7C6.8 2 6 2.8 6 3.9s.8 1.9 1.8 1.9S9.6 5 9.6 3.9 8.8 2 7.8 2ZM11 9h3.4v1.5h.1c.5-.9 1.8-1.8 3.6-1.8 3.9 0 4.6 2.3 4.6 5.2V19H19v-3.9c0-.9 0-2.1-1.3-2.1s-1.6 1-1.6 2V19H12V9Z"/>
        </svg>
      </a>
  
      <a
        v-if="links.github"
        :href="links.github"
        class="btn"
        aria-label="GitHub"
        target="_blank"
        rel="noopener"
        title="GitHub"
      >
        <!-- GitHub -->
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 1.9 2.9 1.4v-1.3c-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.2 1.2a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.8.2 3.1.1 3.4.8.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9v1.4c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z"/>
        </svg>
      </a>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    links: {
      type: Object,
      default: () => ({
        instagram: '',
        facebook: '',
        linkedin: '',
        github: '',
      }),
    },
  })
  </script>
  
  <style lang="scss" scoped>
@use "@/assets/styles/variables" as *;
@use "sass:color";

/* palet baru: background lebih cerah, ikon warna ungu gelap */
$btn-bg:        color.adjust($primary, $lightness: 45%);  /* pastel */
$btn-bg-hover:  color.adjust($primary, $lightness: 55%);
$icon:          color.adjust($text-default-color, $lightness: -10%); /* tidak putih */
$icon-hover:    color.adjust($text-default-color, $lightness: -18%);

.social { display: flex; gap: 16px; margin-top: 24px; }

.btn{
  width: 44px; height: 44px; border-radius: 50%;
  display: grid; place-items: center;
  background: $btn-bg;
  color: $icon;                     /* ⬅️ warna ikon */
  text-decoration: none;
  box-shadow: 0 6px 12px rgba(0,0,0,.08), inset 0 0 0 1px rgba(255,255,255,.35);
  transition: transform .2s ease, background-color .2s ease, color .2s ease, box-shadow .2s ease;
}
.btn:hover{
  background: $btn-bg-hover;
  color: $icon-hover;               /* ⬅️ ikon sedikit lebih gelap saat hover */
  transform: translateY(-2px);
  box-shadow: 0 10px 18px rgba(0,0,0,.12), inset 0 0 0 1px rgba(255,255,255,.45);
}

svg{ width: 22px; height: 22px; }
</style>

  