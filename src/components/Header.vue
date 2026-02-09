<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  isDark: Boolean,
})

defineEmits(['toggle-lang', 'toggle-dark'])

const { t, locale } = useI18n()
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
      <div class="h-full py-2">
        <RouterLink to="/" class="h-full block">
          <img
            src="/logo.png"
            class="h-full w-auto object-contain"
            alt="IpsyHealth"
          />
        </RouterLink>
      </div>

      <!-- MENU -->
<nav class="hidden md:flex gap-8 text-sm font-medium">
  <RouterLink to="/" class="nav-link">{{ t('nav.home') }}</RouterLink>
  <RouterLink to="/about" class="nav-link">{{ t('nav.about') }}</RouterLink>
<RouterLink to="/team" class="nav-link">{{ $t('nav.team') }}</RouterLink>
<RouterLink to="/training" class="nav-link">{{ $t('nav.training') }}</RouterLink>
  <RouterLink to="/contacts" class="nav-link">{{ t('nav.contacts') }}</RouterLink>
</nav>

      <!-- ACTIONS -->
      <div class="flex items-center gap-4">
        <!-- 🌍 LANGUAGE -->
        <button
          class="text-xs opacity-70 hover:opacity-100"
          @click="$emit('toggle-lang')"
        >
          {{ locale.toUpperCase() }}
        </button>

        <!-- 🌙 DARK MODE -->
        <button
          class="text-sm opacity-70 hover:opacity-100"
          @click="$emit('toggle-dark')"
        >
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </div>

    </div>
  </header>
</template>

<style>
.nav-link {
  opacity: 0.7;
  padding-bottom: 4px;
}
.nav-link.router-link-active {
  opacity: 1;
  font-weight: 600;
  border-bottom: 1px solid currentColor;
}
</style>
