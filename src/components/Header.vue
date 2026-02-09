<script setup>
import { useI18n } from 'vue-i18n'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)

defineProps({
  isDark: Boolean,
})

defineEmits(['toggle-lang', 'toggle-dark'])

const { t, locale } = useI18n()
const route = useRoute()

// auto-close mobile menu on route change
watch(() => route.fullPath, () => {
  isOpen.value = false
})
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 border-b transition-colors',
      isDark ? 'bg-neutral-950 text-white' : 'bg-white text-black'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- LOGO -->
      <RouterLink to="/" class="h-full py-2 block">
        <img
          src="/logo.png"
          class="h-full w-auto object-contain"
          alt="IpsyHealth"
        />
      </RouterLink>

      <!-- DESKTOP MENU -->
      <nav class="hidden md:flex gap-8 text-sm font-medium">
        <RouterLink to="/" class="nav-link">{{ t('nav.home') }}</RouterLink>
        <RouterLink to="/about" class="nav-link">{{ t('nav.about') }}</RouterLink>
        <RouterLink to="/team" class="nav-link">{{ t('nav.team') }}</RouterLink>
        <RouterLink to="/training" class="nav-link">{{ t('nav.training') }}</RouterLink>
        <RouterLink to="/contacts" class="nav-link">{{ t('nav.contacts') }}</RouterLink>
      </nav>

      <!-- ACTIONS -->
      <div class="flex items-center gap-4">
        <!-- LANGUAGE -->
        <button
          class="text-xs opacity-70 hover:opacity-100"
          @click="$emit('toggle-lang')"
        >
          {{ locale.toUpperCase() }}
        </button>

        <!-- DARK MODE -->
        <button
          class="text-sm opacity-70 hover:opacity-100"
          @click="$emit('toggle-dark')"
        >
          {{ isDark ? '☀️' : '🌙' }}
        </button>

        <!-- MOBILE BURGER -->
        <button
          class="md:hidden text-2xl"
          @click="isOpen = !isOpen"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- MOBILE MENU -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden fixed inset-0 z-40
               bg-white dark:bg-neutral-950
               flex flex-col items-center justify-center
               space-y-8 text-lg font-medium"
      >
        <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
        <RouterLink to="/about">{{ t('nav.about') }}</RouterLink>
        <RouterLink to="/team">{{ t('nav.team') }}</RouterLink>
        <RouterLink to="/training">{{ t('nav.training') }}</RouterLink>
        <RouterLink to="/contacts">{{ t('nav.contacts') }}</RouterLink>

        <button
          class="mt-10 text-sm opacity-60"
          @click="isOpen = false"
        >
          ✕ Закрити
        </button>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.nav-link {
  opacity: 0.7;
  padding-bottom: 4px;
}
.nav-link.router-link-active {
  opacity: 1;
  font-weight: 600;
  border-bottom: 1px solid currentColor;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>