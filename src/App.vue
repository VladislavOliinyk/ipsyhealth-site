<script setup>
import { ref, watch, onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/layout/Footer.vue'
import i18n from './i18n'

/* ======================
   🌙 THEME
====================== */
const isDark = ref(false)

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
  }
})

watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
  localStorage.setItem('theme', val ? 'dark' : 'light')
})

/* ======================
   🌍 LANGUAGE
====================== */
onMounted(() => {
  const savedLang = localStorage.getItem('lang')
  if (savedLang) {
    i18n.global.locale.value = savedLang
  }
})

const toggleLang = () => {
  const nextLang =
    i18n.global.locale.value === 'ua' ? 'en' : 'ua'

  i18n.global.locale.value = nextLang
  localStorage.setItem('lang', nextLang)
}
</script>

<template>
  <Header
    :is-dark="isDark"
    @toggle-dark="isDark = !isDark"
    @toggle-lang="toggleLang"
  />

  <!-- PAGE CONTENT -->
  <RouterView />

  <!-- GLOBAL FOOTER -->
  <Footer />
</template>
