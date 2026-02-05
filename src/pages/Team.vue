<template>
  <main class="bg-white dark:bg-neutral-950">
    <!-- PAGE TITLE -->
    <!--<section class="pt-24 pb-16 text-center">
      <h1 class="text-3xl md:text-4xl font-semibold text-blue-500 dark:text-blue-400">
        НАША КОМАНДА
      </h1>
    </section>-->

    <!-- LEADERSHIP -->
    <section class="pt-12 pb-20">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex flex-col items-center text-center space-y-6">
          <img
            src="/team/volodymyr.jpg"
            alt="Володимир Волошин"
            class="w-48 h-48 object-cover rounded-full"
            style="object-position: center 0%;"
          />
          <div class="space-y-2">
            <h2 class="text-xl font-semibold">Володимир Волошин</h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-300">
              PH.D., ПСИХОЛОГ (СПЕЦІАЛІЗАЦІЯ: КРИЗОВА ПСИХОЛОГІЯ, ТРАВМАТЕРАПІЯ, АРТ-ТЕРАПІЯ),<br />
              СУПЕРВІЗОР<br />
              ДИРЕКТОР ГО «ІНСТИТУТ ПСИХОЛОГІЇ ЗДОРОВ’Я»
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CO-FOUNDER -->
    <section class="pb-20">
      <div class="max-w-5xl mx-auto px-6">
        <div class="flex flex-col items-center text-center space-y-6">
          <img
            src="/team/yuliia.jpg"
            alt="Юлія Іорш"
            class="w-40 h-40 object-cover rounded-full"
                        style="object-position: center 0%;"
          />
          <div class="space-y-2">
            <h2 class="text-lg font-semibold">Юлія Іорш</h2>
            <p class="text-sm text-neutral-600 dark:text-neutral-300">
              ПСИХОЛОГИНЯ, СЕРТИФІКОВАНА EFPA В ГАЛУЗІ ОСВІТИ<br />
              (СПЕЦІАЛІЗАЦІЯ: КРИЗОВА ПСИХОЛОГІЯ, ТЕРАПІЯ ПСИХОЛОГІЧНОЇ ТРАВМИ,<br />
              ТІЛЕСНО-ОРІЄНТОВАНА ПСИХОТЕРАПІЯ),<br />
              СПІВЗАСНОВНИЦЯ ГО «ІНСТИТУТ ПСИХОЛОГІЇ ЗДОРОВʼЯ»
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ADMIN TEAM -->
    <section class="pb-24">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          <div class="space-y-3">
            <img src="/team/bodnarchyk.png" 
            class="w-48 h-48 object-cover rounded-full mx-auto"
            style="object-position: center 0%;"
            />
            <h3 class="font-semibold">Руслана Бондарчук</h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-300">КООРДИНАТОР<br />АДМІНІСТРАТОР</p>
          </div>
          <div class="space-y-3">
            <img src="/public/team/badyk.png" 
            class="w-48 h-48 object-cover rounded-full mx-auto"
            style="object-position: center 70%;"
            />
            <h3 class="font-semibold">Катерина Бадюк</h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-300">КООРДИНАТОР<br />АДМІНІСТРАТОР</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PSYCHOLOGISTS GRID -->
    <section class="pb-32">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <article
            v-for="p in psychologists"
            :key="p.name"
            class="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <!-- PHOTO -->
            <div class="w-48 h-48 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
              <img
                :src="p.photo"
                :alt="p.name"
                class="w-full h-full object-cover"
                :style="{ objectPosition: p.position || 'center 20%' }"
              />
            </div>

            <!-- NAME -->
            <h4 class="font-semibold text-neutral-900 dark:text-white">
              {{ p.name }}
            </h4>

            <!-- TITLE -->
            <p class="text-sm font-medium text-blue-500 dark:text-blue-400">
              {{ p.title }}
            </p>

            <!-- META INFO -->
            <div class="w-full text-sm text-neutral-700 dark:text-neutral-300 space-y-1 text-left">
              <p class="flex items-start gap-2"><span>👤</span><strong>Працює з:</strong> {{ p.with }}</p>
              <p class="flex items-start gap-2"><span>💻</span><strong>Формат:</strong> {{ p.format }}</p>
              <p class="flex items-start gap-2"><span>🎓</span><strong>Досвід:</strong> {{ p.experience }}</p>
            </div>

            <!-- DETAILS -->
            <!-- DETAILS BUTTON -->
            <div class="w-full flex justify-center mt-2">
              <button
                @click="p.open = !p.open"
                class="group inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium
                       bg-white dark:bg-neutral-800
                       border border-neutral-300 dark:border-neutral-700
                       text-neutral-700 dark:text-neutral-200
                       shadow-sm
                       transition-all duration-300
                       hover:shadow-md hover:-translate-y-0.5
                       hover:border-blue-400 dark:hover:border-blue-400"
              >
                <span>
                  {{ p.open ? 'Сховати деталі' : 'Детальніше' }}
                </span>
                <svg
                  class="w-4 h-4 transition-transform duration-300"
                  :class="p.open ? 'rotate-180' : ''"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <!-- DETAILS CONTENT -->
            <transition name="fade">
              <p
                v-if="p.open"
                class="mt-3 text-sm text-neutral-600 dark:text-neutral-300 whitespace-pre-line"
              >
                <strong>Спеціалізація:</strong> {{ p.specialization }}
              </p>
            </transition>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const psychologists = ref([
  {
    name: 'Москалюк Інга Василівна',
    photo: '/team/moskalyk.png',
    position: 'center 15%',
    title: 'АРТ-ТЕРАПЕВТ, ГЕШТАЛЬТ (2 СТ)',
    with: 'дітьми і дорослими',
    format: 'офлайн',
    experience: '7 років',
    specialization: 'Стосунки між батьками і дітьми, сімейне насилля, дитячі травми, тривожність, низька самооцінка',
    open: false
  },
  {
    name: 'Аніщенко Тетяна',
    photo: '/team/anishenko.png',
    position: 'center 0%',
    title: 'ЛІКАР-ПСИХОЛОГ / ПСИХІАТР',
    with: 'дорослими',
    format: 'онлайн та офлайн',
    experience: '8 років',
    specialization: 'Робота з військовими, ветеранами, травмофокусована терапія',
    open: false
  }, {
    name: 'Власенко Тетяна',
    photo: '/team/vlasenko.png',
    position: 'center 20%',
    title: 'ПСИХОЛОГ, ГЕШТАЛЬТ-КОНСУЛЬТАНТ (2 СТ)',
    with: 'дітьми',
    format: 'онлайн та офлайн',
    experience: '7 років',
    specialization: 'Травматерапія; психологичне консультування та психокоррекційна робота з дітьми та підлітками; когнітивно-поведінкова модель у роботі з дітьми та підлітками.',
    open: false
  },
  {
    name: 'Марціновська Ірина',
    photo: '/team/marcinovska.png',
    position: 'center 25%',
    title: 'ПСИХОЛОГ',
    with: 'дітьми та дорослими',
    format: 'онлайн та офлайн',
    experience: '20 років',
    specialization: 'кататимно-імагінативна психотерапія, КПТ, арттерапія, сімейні відносини, кризова психологія, вікова психологія, дитячо-батьківські відносини.',
    open: false
  },
    {
    name: 'Шкарпітко Діана',
    photo: '/team/shkarpitko.png',
    position: 'center 25%',
    title: 'ПСИХОЛОГ',
    with: 'дорослими',
    format: 'онлайн та офлайн',
    experience: '8 років',
    specialization: 'робота з військовими, ветеранами.',
    open: false
  },
      {
    name: 'Гончар Тетяна',
    photo: '/team/gonchartetyana.png',
    position: 'center 5%',
    title: 'ПСИХОЛОГ',
    with: 'дітьми, підлітками, дорослими',
    format: 'онлайн та офлайн',
    experience: '5 років',
    specialization: 'дитячо-батьківські стосунки, дитячо-юнацька, системна сімейна психотерапія.',
    open: false
  },
  {
  name: 'Федорова Тетяна',
  photo: '/team/fedorova-tetiana.png',
  position: 'center 35%',
  title: 'ПСИХОЛОГ, ПСИХОТЕРАПЕВТ',
  with: 'дітьми, підлітками, дорослими',
  format: 'онлайн та офлайн',
  experience: '25+ років',
  specialization: 'Символдрама, когнітивно-поведінкова терапія, арт-терапія. Кризова психологія, тривожні розлади, робота з дітьми та підлітками, сімейні відносини.',
  open: false
},
{
  name: 'Драбич Тетяна',
  photo: '/team/drabych-tetiana.png',
  position: 'center 0%',
  title: 'ПСИХОЛОГ',
  with: 'дітьми та дорослими',
  format: 'онлайн та офлайн',
  experience: '22 роки',
  specialization: 'Сімейні відносини.',
  open: false
},
{
  name: 'Христенко Віталій',
  photo: '/team/khrystenko-vitalii.png',
  position: 'center 10%',
  title: 'ПСИХОЛОГ',
  with: 'дорослими',
  format: 'офлайн',
  experience: '18 років',
  specialization: 'Екстремальна психологія.',
  open: false
},
{
  name: 'Герман Олена',
  photo: '/team/herman-olena.png',
  position: 'center 0%',
  title: 'ПСИХОЛОГ-КОНСУЛЬТАНТ (ПОЗИТИВНА ПСИХОТЕРАПІЯ)',
  with: 'дорослими',
  format: 'онлайн та офлайн',
  experience: '5 років',
  specialization: 'Тривога, депресія, кризові та гострі стани, втрата близької людини, порушення харчової поведінки, адаптація, міжособистісні стосунки.',
  open: false
},
{
  name: 'Шкарлатюк Катерина',
  photo: '/team/shkarlatiuk-kateryna.png',
  position: 'center 0%',
  title: 'ПСИХОЛОГ',
  with: 'дорослими',
  format: 'онлайн та офлайн',
  experience: '10 років',
  specialization: 'Кризова психологія.',
  open: false
},
{
  name: 'Тристан Вікторія',
  photo: '/team/trystan-viktoriia.png',
  position: 'center 20%',
  title: 'ПСИХОЛОГ-МЕТОДИСТ, АРТ-ТЕРАПЕВТ, ХІБУКІТЕРАПЕВТ',
  with: 'дітьми, підлітками,дорослими',
  format: 'онлайн та офлайн',
  experience: '30+ років',
  specialization: 'Практична психологія, хібукітерапія, арттерапія.',
  open: false
},
{
  name: 'Маркс Марина',
  photo: '/team/marks-marina.png',
  position: 'center 15%',
  title: 'ПСИХОЛОГ',
  with: 'дітьми та дорослими',
  format: 'онлайн',
  experience: '10+ років',
  specialization: 'EMDR, КПТ, біосугестивна терапія, DBT, хібукі терапія. ПТСР, депресія, адаптація до цивільного життя, втрати.',
  open: false
},
{
  name: 'Карепова Елліна',
  photo: '/team/karepova-ellina.png',
  position: 'center 15%',
  title: 'ПСИХОЛОГ, ТІЛЕСНО-ОРІЄНТОВАНИЙ ТЕРАПЕВТ',
  with: 'дітьми, підлітками. дорослими',
  format: 'онлайн та офлайн',
  experience: '15 років',
  specialization: 'Тривожність, відносини, дитячо-батьківські стосунки, проживання втрати близької людини.',
  open: false
},
{
  name: 'Франчук Тетяна',
  photo: '/team/franchuk-tetiana.png',
  position: 'center 25%',
  title: 'ПСИХОЛОГ, ПСИХОТЕРАПЕВТ ССТ',
  with: 'дітьми та дорослими',
  format: 'онлайн та офлайн',
  experience: '15 років',
  specialization: 'Кризова психологія.',
  open: false
},
{
  name: 'Панасенко Оксана',
  photo: '/team/panasenko-oksana.jpg',
  position: 'center 15%',
  title: 'ПСИХОТЕРАПЕВТ (ГЕШТАЛЬТ, EMDR, IFS)',
  with: 'дорослими',
  format: 'онлайн та офлайн',
  experience: '8 років',
  specialization: 'Травма, робота з групами.',
  open: false
},
{
  name: 'Собчак Ганна',
  photo: '/team/sobchak-hanna.jpg',
  position: 'center 20%',
  title: 'ПСИХОТЕРАПЕВТ (ІНТЕГРАТИВНИЙ ПІДХІД)',
  with: 'дорослими',
  format: 'онлайн та офлайн',
  experience: '7 років',
  specialization: 'Клінічна психологія, пропедевтика психіатрії, патодослідження, EMDR, сімейна терапія, кризи та травми, кризова інтервенція, схема-терапія.',
  open: false
},
{
  name: 'Дима Павло',
  photo: '/team/dyma-pavlo.jpg',
  position: 'center 10%',
  title: 'ПСИХОАНАЛІТИК, ТРАВМАТЕРАПЕВТ, ТРЕНЕР',
  with: 'дорослими',
  format: 'онлайн',
  experience: '19 років',
  specialization: 'Кризова психологія, досвід травми, ПТСР.',
  open: false
},
{
  name: 'Серга Ольга',
  photo: '/team/serha-olha.jpg',
  position: 'center 15%',
  title: 'ПСИХІАТР, ПСИХОЛОГ, ПСИХОТЕРАПЕВТ',
  with: 'дітьми та дорослими',
  format: 'онлайн',
  experience: '20 років',
  specialization: 'Дитячо-батьківські стосунки.',
  open: false
},
{
  name: 'Божор Олена',
  photo: '/team/bozhor-olena.jpg',
  position: 'center 15%',
  title: 'EMDR, ART-THERAPY (СУПЕРВІЗОР, ФАСИЛІТАТОР)',
  with: 'дітьми та дорослими',
  format: 'онлайн та офлайн',
  experience: '21 рік',
  specialization: 'Травматерапія, сімейна та дитяча психотерапія.',
  open: false
},
{
  name: 'Бучинська Ольга',
  photo: '/team/buchynska-olha.jpg',
  position: 'center 20%',
  title: 'ПСИХОЛОГ, ПСИХОТЕРАПЕВТ',
  with: 'дорослими',
  format: 'онлайн та офлайн',
  experience: '20+ років',
  specialization: 'Гештальт, психодрама, екзистенційний аналіз і логотерапія.',
  open: false
},
])
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}


</style>
