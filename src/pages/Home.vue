<script setup>
import { ref, onMounted } from 'vue'

const showHero = ref(false)
const showVision = ref(false)
const showMission = ref(false)
const dividerShown = ref(false)

onMounted(() => {
  // HERO
  requestAnimationFrame(() => {
    showHero.value = true
  })

  // CEREMONIAL SEQUENCE — NO TRANSITION COMPONENTS
  // гарантовано працює, бо це чистий CSS + class toggle
  setTimeout(() => {
    showVision.value = true
  }, 300)

  setTimeout(() => {
    showMission.value = true
  }, 550)

  setTimeout(() => {
    dividerShown.value = true
  }, 200)
})
</script>

<template>
  <section
    class="min-h-[calc(100vh-64px)] flex flex-col bg-white dark:bg-neutral-950"
  >
    <!-- HERO -->
    <div
      class="pt-16 pb-8 max-w-3xl mx-auto px-6 flex flex-col items-center text-center space-y-5"
    >
      <img
        v-if="showHero"
        src="/logo.png"
        alt="Institute of Health Psychology"
        class="h-24 md:h-28 w-auto fade"
      />

      <h1
        v-if="showHero"
        class="text-3xl md:text-5xl font-semibold tracking-tight fade"
        style="color: var(--accent)"
      >
        {{ $t('hero.title') }}
      </h1>

      <p
        v-if="showHero"
        class="text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl fade"
      >
        {{ $t('hero.description') }}
      </p>

      <div v-if="showHero" class="flex gap-6 pt-1 fade">
        <a href="https://www.facebook.com/InstituteofHealthPsychology" class="social-link">{{ $t('hero.social.facebook') }}</a>
        <a href="http://www.youtube.com/@healthpsychology7961" class="social-link">{{ $t('hero.social.youtube') }}</a>
        <a href="https://t.me/HealthPsycholog/" class="social-link">{{ $t('hero.social.telegram') }}</a>
      </div>
    </div>

    <!-- DIVIDER (reserved space) -->
    <div class="divider-slot" aria-hidden="true">
      <span class="divider-line" :class="{ shown: dividerShown }" />
    </div>

    <!-- VISION / MISSION -->
    <section class="pb-12">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

        <!-- VISION -->
        <div
          class="vm-block"
          :class="{ show: showVision }"
        >
          <div class="h-12 flex items-center justify-center">
            <div class="w-14 h-14 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center">
              <div class="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white"></div>
            </div>
          </div>

          <h2 class="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white">
            {{ $t('visionMission.vision.title') }}
          </h2>

          <p class="text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto">
            {{ $t('visionMission.vision.text') }}
          </p>
        </div>

        <!-- MISSION -->
        <div
          class="vm-block"
          :class="{ show: showMission }"
        >
          <div class="h-12 flex items-center justify-center">
            <div class="flex gap-2">
              <div class="w-1 h-10 bg-neutral-900 dark:bg-white"></div>
              <div class="w-1 h-10 bg-neutral-900 dark:bg-white opacity-70"></div>
              <div class="w-1 h-10 bg-neutral-900 dark:bg-white opacity-40"></div>
            </div>
          </div>

          <h2 class="text-2xl md:text-3xl font-semibold text-neutral-900 dark:text-white">
            {{ $t('visionMission.mission.title') }}
          </h2>

          <ul class="space-y-1 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-md mx-auto">
            <li v-for="(item, i) in $tm('visionMission.mission.items')" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
        </section>

    <!-- ================= VALUES ================= -->
    <section class="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div class="max-w-7xl mx-auto px-6">
        <!-- SECTION HEADER -->
        <div class="max-w-3xl mx-auto text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-semibold" style="color: var(--accent)">
            {{ $t('values.title', 'Наші цінності') }}
          </h2>
          <p class="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-300">
            {{ $t('values.subtitle', 'Принципи, на яких ґрунтується наша робота') }}
          </p>
        </div>

        <!-- VALUES GRID -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <!-- VALUE ITEM -->
          <div class="value-card">
            <h3 class="value-title">Ментальне здоров’я</h3>
            <p class="value-text">
              Головною цінністю для нас є ментальне здоров’я: ми допомагаємо людям знаходити сили та ресурси, пізнавати та розвивати себе, жити повноцінно та якісно, переживати складні життєві обставини.
            </p>
          </div>

          <div class="value-card">
            <h3 class="value-title">Професійна етика</h3>
            <p class="value-text">
              Наші фахівці ґрунтують свою роботу на Етичному кодексі психолога, політиці захисту дітей, принципі конфіденційності та законах України.
            </p>
          </div>

          <div class="value-card">
            <h3 class="value-title">Якісне навчання</h3>
            <p class="value-text">
              Ми постійно проводимо лекції, вебінари, супервізії та навчальні програми від провідних спеціалістів з різних країн: 8-крокова програма з роботи з горем і втратою, курс з біосугестивної терапії, основи психотравматології та інші.
            </p>
          </div>

          <div class="value-card">
            <h3 class="value-title">Психологічна підтримка</h3>
            <p class="value-text">
              Ми пропонуємо безкоштовні групи психологічної підтримки та стабілізації для дорослих і дітей, де можна знайти нові сили, підтримку й однодумців.
            </p>
          </div>

          <div class="value-card">
            <h3 class="value-title">Доступність послуг</h3>
            <p class="value-text">
              Для нас важливо, щоб якісна професійна допомога була доступною незалежно від фінансового становища людини.
            </p>
          </div>

          <div class="value-card">
            <h3 class="value-title">Відкритість інформації</h3>
            <p class="value-text">
              Ми відкрито ділимось знаннями та матеріалами: публічні лекції та зустрічі з провідними фахівцями доступні на наших платформах у соціальних мережах.
            </p>
          </div>

        </div>
      </div>
        </section>

    <!-- ================= SERVICES ================= -->
    <section class="py-20 bg-white dark:bg-neutral-950">
      <div class="max-w-7xl mx-auto px-6">

        <!-- HEADER -->
        <div class="max-w-4xl mx-auto text-center mb-14">
          <h2 class="text-3xl md:text-4xl font-semibold" style="color: var(--accent)">
            Послуги ГО «Інститут психології здоров'я»
          </h2>
        </div>

        <!-- SERVICES FLOW -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <!-- EDUCATIONAL -->
          <div class="service-card">
            <div class="service-icon" aria-hidden="true">🎓</div>
            <h3 class="service-title">Освітні</h3>
            <p class="service-text">
              Навчання спеціалістів сфери психічного здоровʼя: курси, програми, супервізії та практико-орієнтовані формати підвищення кваліфікації.
            </p>
          </div>

          <!-- CLINICAL -->
          <div class="service-card">
            <div class="service-icon" aria-hidden="true">🫂</div>
            <h3 class="service-title">Клінічні</h3>
            <p class="service-text">
              Психологічні консультації та групи підтримки для дітей, підлітків і дорослих — у безпечному, підтримуючому середовищі.
            </p>
          </div>

          <!-- SCIENTIFIC -->
          <div class="service-card">
            <div class="service-icon" aria-hidden="true">📚</div>
            <h3 class="service-title">Науково-методичні</h3>
            <p class="service-text">
              Розробка методичних матеріалів, проведення психологічних досліджень і впровадження науково обґрунтованих підходів у практику.
            </p>
          </div>

        </div>
      </div>
        </section>

    <!-- ================= PROJECTS ================= -->
    <section class="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div class="max-w-7xl mx-auto px-6">

        <!-- HEADER -->
        <div class="max-w-4xl mx-auto text-center mb-20">
          <h2 class="text-3xl md:text-4xl font-semibold" style="color: var(--accent)">
            Наші проєкти
          </h2>
        </div>

        <!-- PROJECTS GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <!-- SUPPORT GROUPS -->
          <div class="project-card">
            <h3 class="project-card-title">ГРУПИ ПІДТРИМКИ</h3>
            <ul class="project-card-list">
              <li>Групи стабілізації та підтримки для дітей;</li>
              <li>Групи стабілізації та підтримки для дорослих;</li>
              <li>Групи психологічної підтримки військовослужбовців і ветеранів;</li>
              <li>Групи підтримки для дорослих, у яких є зниклі безвісті та полонені;</li>
              <li>Родинний кемпінг разом з партерами ГО «Серце Азовсталі» (психофізичне відновлення родин захисників Маріуполя;</li>
              <li>Група самодопомоги з точкового масажу за методом ТТТ (техніка натискання травми).</li>
            </ul>
          </div>

          <!-- LOSS PROGRAM -->
          <div class="project-card">
            <h3 class="project-card-title">Програма для дорослих, підлітків і дітей, які втратили близьких внаслідок смерті:</h3>
            <ul class="project-card-list">
              <li>група психологічної підтримки дружин загиблих військовослужбовців;</li>
              <li>групи підтримки для людей, які втратили близьких внаслідок самогубства;</li>
              <li>групи підтримки для жінок, які втратили дитину під час вагітності або пологів;</li>
              <li>психологічна підтримка людей, які втратили улюблену тварину;</li>
              <li>програма реабілітації для батьків загиблих захисників Маріуполя разом з партерами ГО «Серце Азовсталі»;</li>
              <li>психологічний супровід дітей, які втратили близьких</li>
            </ul>
          </div>

          <!-- EDUCATIONAL PROJECTS -->
          <div class="project-card lg:col-span-2">
            <h3 class="project-card-title">НАВЧАЛЬНІ ПРОЄКТИ:</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="edu-block">
                <p>
                  <strong>Біосугестивна терапія (БСТ)</strong> (авторський метод Олександра Стражного) – простий ефективний метод комплексного відновлення здоров’я людини, який може бути використаний для роботи з втратою, психосоматичними розладами, ПТСР тощо. Поєднує прийоми вербального і невербального навіювання у стані легкого трансу. (тренер – Володимир Волошин);
                </p>
              </div>

              <div class="edu-block">
                <p>
                  <strong>8-крокова програма по роботі з горем і втратою</strong>: призначена для психологів і психотерапевтів, що сертифікується і дає можливість вести групи підтримки по втраті на базі «Інституту психології здоров’я» та поза його межами. На сьогодні навчання відбувається тричі на рік, постійно відбуваються супервізії для ведучих груп;
                </p>
              </div>

              <div class="edu-block">
                <p>
                  <strong>Супервізійні і консультативні групи для психологів та психотерапевтів</strong> (теми): втрата; невизначена втрата; пренатальна втрата; втрата близьких внаслідок війни; втрата близьких внаслідок онкозахворювання; діти, які втратили близьких; психічна травма.
                </p>
              </div>

              <div class="edu-block">
                <p>
                  <strong>«Основи психотравматології»</strong> – комплексна навчальна програма з 12 модулів: від кризової терапії та лікування ПТСР до роботи з дітьми, військовими, ветеранами та профілактики вигоряння.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FOOTNOTE -->
        <div class="project-footnote">
          <p>
            Теми і зміст наших програм весь час оновлюються: слідкуйте за анонсами на наших сторінках
          </p>
          <div class="project-links">
            <a href="https://t.me/HealthPsycholog" target="_blank" aria-label="Telegram" class="project-link">
              <span class="project-link-icon">📢</span>
              <span>Telegram</span>
            </a>
            <a href="https://www.facebook.com/InstituteofHealthPsychology" target="_blank" aria-label="Facebook" class="project-link">
              <span class="project-link-icon">📘</span>
              <span>Facebook</span>
            </a>
          </div>
        </div>

      </div>
    </section>

  </section>
</template>

<style scoped>
/* GENERIC FADE */
.fade {
  animation: fadeUp 0.9s ease forwards;
}

/* VISION / MISSION — GUARANTEED */
.vm-block {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.9s ease, transform 0.9s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.vm-block.show {
  opacity: 1;
  transform: translateY(0);
}

/* DIVIDER */
.divider-slot {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider-line {
  width: 8rem;
  height: 1px;
  background-color: rgb(163 163 163);
  opacity: 0;
  transform: scaleX(0);
  transform-origin: center;
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.divider-line.shown {
  opacity: 1;
  transform: scaleX(1);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.social-link {
  font-size: 0.875rem;
  font-weight: 500;
  color: #737373;
}
.social-link:hover {
  color: #171717;
}

/* VALUES SECTION */
.value-card {
  background: white;
  border: 1px solid rgb(229 229 229);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.dark .value-card {
  background: rgb(23 23 23);
  border-color: rgb(64 64 64);
}

.value-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.value-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(23 23 23);
}

.dark .value-title {
  color: white;
}

.value-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgb(82 82 82);
}

.dark .value-text {
  color: rgb(212 212 212);
}


/* SERVICES SECTION */
.service-card {
  position: relative;
  border: 1px solid rgb(229 229 229);
  border-radius: 1.25rem;
  padding: 2.5rem 2rem 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.dark .service-card {
  background: rgb(23 23 23);
  border-color: rgb(64 64 64);
}

.service-card--center {
  transform: translateY(-12px);
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.08);
}

.service-marker {
  position: absolute;
  top: -14px;
  left: 24px;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  font-weight: 600;
  color: rgb(115 115 115);
}

.dark .service-marker {
  color: rgb(163 163 163);
}

.service-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(23 23 23);
}

.dark .service-title {
  color: white;
}

.service-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgb(82 82 82);
}

.dark .service-text {
  color: rgb(212 212 212);
}


/* SERVICES SECTION */
.service-card {
  position: relative;
  border: 1px solid rgb(229 229 229);
  border-radius: 1.25rem;
  padding: 2.5rem 2rem 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.dark .service-card {
  background: rgb(23 23 23);
  border-color: rgb(64 64 64);
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.08);
}

.service-icon {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  background: rgb(245 245 245);
  margin-bottom: 0.5rem;
}

.dark .service-icon {
  background: rgb(38 38 38);
}

.service-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(23 23 23);
}

.dark .service-title {
  color: white;
}

.service-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgb(82 82 82);
}

.dark .service-text {
  color: rgb(212 212 212);
}


/* PROJECTS SECTION */
.project-card {
  background: white;
  border: 1px solid rgb(229 229 229);
  border-radius: 1.5rem;
  padding: 2.5rem;
}

.dark .project-card {
  background: rgb(23 23 23);
  border-color: rgb(64 64 64);
}

.project-card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: rgb(23 23 23);
}

.dark .project-card-title {
  color: white;
}

.project-card-list {
  list-style: none;
  padding-left: 0;
  display: grid;
  gap: 0.75rem;
}

.project-card-list li {
  position: relative;
  padding-left: 1.25rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgb(82 82 82);
}

.project-card-list li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: rgb(163 163 163);
}

.dark .project-card-list li {
  color: rgb(212 212 212);
}

.edu-block {
  background: rgb(245 245 245);
  border-radius: 1rem;
  padding: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgb(82 82 82);
}

.dark .edu-block {
  background: rgb(38 38 38);
  color: rgb(212 212 212);
}

.project-footnote {
  margin-top: 4rem;
  text-align: center;
}

.project-links {
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.project-links a {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(23 23 23);
}

.dark .project-links a {
  color: white;
}


.project-links {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(23 23 23);
  padding: 0.5rem 0.75rem;
  border-radius: 9999px;
  background: rgb(245 245 245);
  transition: background 0.2s ease, transform 0.2s ease;
}

.project-link:hover {
  transform: translateY(-2px);
  background: rgb(229 229 229);
}

.dark .project-link {
  background: rgb(38 38 38);
  color: white;
}

.dark .project-link:hover {
  background: rgb(64 64 64);
}

.project-link-icon {
  font-size: 1rem;
}

</style>
