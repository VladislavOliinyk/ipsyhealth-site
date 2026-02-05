<template>
  <footer class="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-20 pb-10">
    <div class="max-w-7xl mx-auto px-6">

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">

        <!-- COLUMN 1 -->
        <div class="space-y-6">
          <div class="flex items-center gap-3">
            <img src="/favicon.png" alt="Інститут психології здоровʼя" class="h-10 w-10" />
            <span class="text-lg font-semibold" style="color: var(--accent)">
              Інститут психології здоровʼя
            </span>
          </div>

          <div>
            <h4 class="footer-subtitle">Благодійність</h4>
            <p class="footer-text">
              Діяльність нашої організації зосереджена на тому, щоб забезпечувати якісні безкоштовні професійні послуги з підтримки психічного здоров’я населення України. Тому всі групи підтримки ми проводимо безкоштовно і надаємо освітні послуги фахівцям у сфері психічного здоров’я.
            </p>
          </div>

          <div>
            <h4 class="footer-subtitle">Партнери</h4>
            <p class="footer-text">
              Ми цінуємо співпрацю та підтримку наших партнерів, з якими багато років співпрацюємо у наданні допомоги клієнтам. Ми відкриті до партнерської взаємодії та розширення мережі співпраці.
            </p>

            <!-- PARTNERS SLIDER -->
            <div class="mt-6">
              <div class="relative overflow-hidden">
                <div
                  class="flex transition-transform duration-700"
                  :style="{ transform: `translateX(-${activePartner * 100}%)` }"
                >
                  <div
                    v-for="(logo, i) in partners"
                    :key="i"
                    class="min-w-full flex justify-center"
                  >
                    <img :src="logo" class="h-12 opacity-80" />
                  </div>
                </div>
              </div>

              <div class="flex justify-center gap-2 mt-3">
                <button
                  v-for="(p, i) in partners"
                  :key="i"
                  @click="activePartner = i"
                  class="w-2 h-2 rounded-full"
                  :class="activePartner === i
                    ? 'bg-neutral-800 dark:bg-white'
                    : 'bg-neutral-300 dark:bg-neutral-600'"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- COLUMN 2 -->
        <div class="space-y-6">
          <h4 class="footer-subtitle">Де ми знаходимось?</h4>

          <ul class="space-y-2 footer-text">
            <li>📍 м. Київ, вул. Бердичівська, 1</li>
            <li>✉️ ihealthpsy@gmail.com</li>
            <li>📞 +380997301395</li>
          </ul>

          <div class="space-y-3">
            <img
              src="/qr.png"
              alt="QR donation"
              class="w-32 h-32 bg-white p-2 rounded-md"
            />
            <p class="footer-text text-sm">
              Отримувач: ГО «ІНСТИТУТ ПСИХОЛОГІЇ ЗДОРОВ'Я»<br />
              Код отримувача: 43618394<br />
              Рахунок отримувача: UA333052990000026006035014466<br />
              Банк: АТ КБ «ПРИВАТБАНК»<br />
              Призначення платежу: «Благодійна пожертва»
            </p>
          </div>

          <!-- SOCIALS -->
          <div class="flex gap-4">
            <a
              href="https://www.facebook.com/InstituteofHealthPsychology"
              target="_blank"
              aria-label="Facebook"
              class="social-icon"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V11H16l-.4 3h-2.1v7A10 10 0 0022 12z"
                />
              </svg>
            </a>

            <a href="#" aria-label="Instagram" class="social-icon">
              <svg viewBox="0 0 24 24" class="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </a>

            <a href="#" aria-label="YouTube" class="social-icon">
              <svg viewBox="0 0 24 24" class="h-5 w-5">
                <path
                  fill="currentColor"
                  d="M23 7.5s-.2-1.7-.8-2.5c-.8-.9-1.7-.9-2.1-1C16.9 3.5 12 3.5 12 3.5h0s-4.9 0-8.1.5c-.4.1-1.3.1-2.1 1-.6.8-.8 2.5-.8 2.5S1 9.5 1 11.5v1c0 2 .1 4 .1 4s.2 1.7.8 2.5c.8.9 1.9.9 2.4 1 1.7.2 7.7.5 7.7.5s4.9 0 8.1-.5c.4-.1 1.3-.1 2.1-1 .6-.8.8-2.5.8-2.5s.1-2 .1-4v-1c0-2-.1-4-.1-4zM9.8 15.5v-7l6.2 3.5-6.2 3.5z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- COLUMN 3 -->
        <div class="space-y-4">
          <h4 class="footer-subtitle">НАШІ ПРЕДСТАВНИЦТВА</h4>

          <details
            v-for="city in cities"
            :key="city.name"
            class="city-card"
          >
            <summary>{{ city.name }}</summary>
            <div class="footer-text mt-2">
              {{ city.person }}<br />
              {{ city.phone }}<br />
              {{ city.email }}
            </div>
          </details>
        </div>
      </div>

      <div class="mt-16 text-center text-sm text-neutral-400">
        © {{ new Date().getFullYear() }} Інститут психології здоровʼя. Всі права захищені.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const partners = [
  '/partners/yarmiz-1.png',
  '/partners/thisworld4u-1.png',
  '/partners/peopleinneed-1.png',
  '/partners/npa_100-1.png',
  '/partners/ngu-1-1.png',
  '/partners/institute_kostyuka-1.png',
  '/partners/association_reabilitation-1.png'
]

const activePartner = ref(0)

onMounted(() => {
  setInterval(() => {
    activePartner.value = (activePartner.value + 1) % partners.length
  }, 3000)
})

const cities = [
  { name: 'м. Запоріжжя', person: 'Панасенко Оксана', phone: '+380504406311 (лише писати)', email: 'poazp@ukr.net' },
  { name: 'м. Одеса', person: 'Стратієвська Анастасія', phone: '+380505078941 (лише писати)', email: 'nastyavalery3@gmail.com' },
  { name: 'м. Львів', person: 'Клочник Надія', phone: '+380975896655 (лише писати)', email: 'klochnyk.nm@gmail.com' },
  { name: 'м. Дніпро', person: 'Карепова Елліна', phone: '0679939683 (лише писати)', email: 'iph.dnipro@gmail.com' },
  { name: 'м. Вишневе', person: 'Франчук Тетяна', phone: '+380936092671 (писати)', email: 'iph.vyshneve@gmail.com' },
  { name: 'м. Суми', person: 'Данілова Дарʼя', phone: '+380955726854', email: 'psy.danilova.daria@gmail.com' },
  { name: 'м. Івано-Франківськ', person: 'Дичківська Галина', phone: '+380951057555 (лише писати)', email: 'iph.ivano.frankivsk@gmail.com' }
]
</script>

<style scoped>
.footer-subtitle {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(23 23 23);
}

.dark .footer-subtitle {
  color: white;
}

.footer-text {
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgb(82 82 82);
}

.dark .footer-text {
  color: rgb(212 212 212);
}

.social-icon {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(229 229 229);
  color: rgb(23 23 23);
}

.dark .social-icon {
  background: rgb(38 38 38);
  color: white;
}

.city-card {
  border: 1px solid rgb(229 229 229);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  background: white;
}

.dark .city-card {
  background: rgb(23 23 23);
  border-color: rgb(64 64 64);
}

.city-card summary {
  cursor: pointer;
  font-weight: 500;
  list-style: none;
  color: rgb(23 23 23);
}

.city-card summary::-webkit-details-marker {
  display: none;
}

.dark .city-card summary {
  color: white;
}

.city-card:hover {
  background: rgb(245 245 245);
}

.dark .city-card:hover {
  background: rgb(38 38 38);
}

.city-card[open] {
  border-color: rgb(163 163 163);
}
</style>