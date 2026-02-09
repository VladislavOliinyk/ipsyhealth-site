<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const onScroll = () => {
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <transition name="fade-scale">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      aria-label="Scroll to top"
      class="fixed bottom-6 right-6 z-40
             w-12 h-12 rounded-full
             bg-blue-600 hover:bg-blue-700
             text-white text-xl
             shadow-lg
             flex items-center justify-center
             transition-all"
    >
      ↑
    </button>
  </transition>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
