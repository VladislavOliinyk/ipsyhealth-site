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
            <h2 class="text-xl font-semibold dark:text-white">Володимир Волошин</h2>
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
            <h2 class="text-lg font-semibold dark:text-white">Юлія Іорш</h2>
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
            <h3 class="font-semibold dark:text-white">Руслана Бондарчук</h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-300">КООРДИНАТОР<br />АДМІНІСТРАТОР</p>
          </div>
          <div class="space-y-3">
            <img src="/public/team/badyk.png" 
            class="w-48 h-48 object-cover rounded-full mx-auto"
            style="object-position: center 70%;"
            />
            <h3 class="font-semibold dark:text-white">Катерина Бадюк</h3>
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
  { name: 'Моос Яна Олександрівна', photo: '/public/team/yana-moos.jpeg', position: 'center 20%', title: 'EMDR, позитивна психотерапія, психодрама, тілесно-орієнтована', with: 'дорослими', format: 'онлайн', experience: '9+ років', specialization: 'Травматерапія', open: false },
  { name: 'Дима Павло', photo: '/public/team/pavlo-dima.jpg', position: 'center 10%', title: 'Психоаналітик, травматерапевт, тренер', with: 'дорослими', format: 'онлайн', experience: '19 років', specialization: 'Кризова психологія, досвід травми, ПТСР', open: false },
  { name: 'Науменко Олена Миколаївна', photo: '/team/naumenko.jpg', position: 'center 0%', title: 'Психолог, психотерапевт (символдрама, арттерапія)', with: 'дітьми та дорослими', format: 'онлайн та офлайн', experience: '25+ років', specialization: 'Дитячий та юнацький психотерапевт, сімейні відносини, пісочна терапія', open: false },
  { name: 'Божор Олена', photo: '/public/team/elena-bozhor.png', position: 'center 15%', title: 'EMDR, ART-THERAPY (супервізор, фасилітатор)', with: 'дітьми та дорослими', format: 'онлайн та офлайн', experience: '21 рік', specialization: 'Травматерапія, сімейна та дитяча психотерапія', open: false },
  { name: 'Собчак Ганна', photo: '/public/team/hanna-sobchak.jpg', position: 'center 0%', title: 'Психотерапевт (Гештальт, схема-терапія, EMDR)', with: 'дорослими', format: 'онлайн та офлайн', experience: '10 років', specialization: 'Клінічна психологія', open: false },
  { name: 'Дичковська Галина Орестівна', photo: '/team/dychkovska.jpg', position: 'center 60%', title: 'Психотерапевт у методі позитивної психотерапії', with: 'дорослими', format: 'онлайн та офлайн', experience: 'з 2012 року', specialization: 'Втрати, екзистенційні кризи, родові питання, психосоматика, бездітність, залежності та співзалежності', open: false },
  { name: 'Панасенко Оксана', photo: '/team/panasenko.jpg', position: 'center 15%', title: 'Психотерапевт (Гештальт, EMDR, IFS)', with: 'дорослими', format: 'онлайн та офлайн', experience: '8 років', specialization: 'Травма, робота з групами', open: false },
  { name: 'Франчук Тетяна Володимирівна', photo: '/team/franchuk-tetiana.png', position: 'center 25%', title: 'Психолог, психотерапевт ССТ', with: 'дітьми та дорослими', format: 'онлайн та офлайн', experience: '18 років', specialization: 'Кризова психологія', open: false },
  { name: 'Карепова Елліна', photo: '/team/karepova-ellina.png', position: 'center 15%', title: 'Психолог, тілесно-орієнтований терапевт', with: 'дітьми, підлітками, дорослими', format: 'онлайн та офлайн', experience: '15 років', specialization: 'Тривожність, відносини, дитячо-батьківські стосунки, проживання втрати', open: false },
  { name: 'Драбич Тетяна Вікторівна', photo: '/team/drabych-tetiana.jpg', position: 'center 80%', title: 'Психолог (практичний, клінічний, реабілітаційний), консультант у методі позитивної психотерапії', with: 'дітьми та дорослими', format: 'онлайн та офлайн', experience: '22 роки', specialization: 'Кризова та травма-фокусована психологія', open: false },
  { name: 'Батюсь Ольга Анатоліївна', photo: '/team/batusy-olha.jpg', position: 'center 0%', title: 'Психолог, травматерапевт', with: 'дорослими', format: 'онлайн та офлайн', experience: '6+ років', specialization: 'Травматерапія, EMDR', open: false },
  { name: 'Віткалова Вікторія Олексіївна', photo: '/team/viktoria-vitkalova.jpg', position: 'center 20%', title: 'Аналітично орієнтований психолог', with: 'дорослими, дітьми та підлітками', format: 'очно (Київ) та онлайн', experience: '13 років', specialization: 'Втрати, батьківсько-дитячі стосунки, травмоінформована терапія, кризова психологія, розлади адаптації', open: false },
  { name: 'Добросинець Василина Василівна', photo: '/team/vasylyna-dobrocynec.jpeg', position: 'center 20%', title: 'Психолог (арт-терапія)', with: 'дітьми та сімʼями', format: 'офлайн', experience: '11 років', specialization: 'Робота з дітьми та сімʼями', open: false },
  { name: 'Москалюк Інга Василівна', photo: '/team/moskalyk.png', position: 'center 15%', title: 'Арт-терапевт, гештальт (2 ст)', with: 'дітьми від 9 років та дорослими', format: 'в більшості офлайн', experience: 'з 1 жовтня 2018 року', specialization: 'Стосунки між батьками і дітьми, сімейне насилля, дитячі травми, тривожність, низька самооцінка', open: false },
  { name: 'Мамонтов Олег Юрійович', photo: '/team/mamontow.jpg', position: 'center 60%', title: 'Гештальт-терапевт, EMDR-терапевт', with: 'дорослими', format: 'онлайн', experience: '4 роки', specialization: 'Кризова психологія, травматерапія, робота з втратою, робота з військовими', open: false },
  { name: 'Полякова Анастасія Сергіївна', photo: '/team/poliyakova.jpg', position: 'center 0%', title: 'Практичний психолог, гештальт-терапевт', with: 'дітьми, підлітками, дорослими', format: 'онлайн та офлайн', experience: '6 років', specialization: 'Кризова психологія, робота з травмою і втратою, батьківсько-дитячі відносини', open: false },
  { name: 'Максимчук Ганна Миколаївна', photo: '/team/hanna-maksymchuk.jpg', position: 'center 35%', title: 'Психолог, психотерапевт у методі позитивної психотерапії, супервізорка', with: 'дорослими', format: 'онлайн', experience: '9 років', specialization: 'Клінічна психологія, психотерапія травми', open: false },
  { name: 'Паук Марія Іванівна', photo: '/team/maria-pavyk.jpg', position: 'center 20%', title: 'Психолог', with: 'дітьми, підлітками та сімʼями', format: 'переважно офлайн', experience: '8 років', specialization: 'Тривожність, страхи, селективний мутизм, батьківсько-дитячі стосунки', open: false },
  { name: 'Шевченко Наталія Валеріївна', photo: '/team/shevshenko.jpg', position: 'center 20%', title: 'Клінічний психолог, логотерапевт, КПТ-консультант', with: 'дорослими та сімейними парами', format: 'онлайн та офлайн', experience: '3 роки', specialization: 'Кризова психологія, травмофокусована терапія, робота з військовими', open: false },
  { name: 'Давиденко Марина Олександрівна', photo: '/team/marina-davidenko.jpg', position: 'center 70%', title: 'Психолог, арттерапевт, нейропсихолог', with: 'дітьми та дорослими', format: 'онлайн та офлайн', experience: '10+ років', specialization: 'Арттерапія, сімейні відносини, нейропсихологія', open: false },
  { name: 'Картушова Євгенія Олегівна', photo: '/team/evgenia-kart.jpg', position: 'center 60%', title: 'Психолог (схема-терапія)', with: 'дорослими', format: 'онлайн', experience: '3 роки', specialization: 'Розлади особистості, тривожні та афективні розлади', open: false },
  { name: 'Швецова Ірина Василівна', photo: '/team/iryna-shvetsova.jpeg', position: 'center 0%', title: 'Психолог, психотерапевт у методі позитивної психотерапії', with: 'дорослими', format: 'онлайн та офлайн', experience: '4 роки', specialization: 'Відновлення самоцінності, сімейні та міжособистісні відносини, робота з травмою', open: false },
  { name: 'Ємцева Ганна Миколаївна', photo: '/team/gannysja-rydenko.jpg', position: 'center 20%', title: 'Клінічний психолог, КПТ', with: 'дітьми та дорослими', format: 'онлайн та офлайн', experience: '10 років', specialization: 'Кризова, військова психологія, втрата, суїцидальна поведінка', open: false },
  { name: 'Назаренко Наталія Юріївна', photo: '/team/nazarenko.jpeg', position: 'center 15%', title: 'Клінічний психолог, арттерапевт, логоконсультантка', with: 'дорослими та дітьми', format: 'онлайн та офлайн', experience: '3 роки', specialization: 'Кризова психологія, сімейні відносини', open: false },
  { name: 'Серга Ольга Олександрівна', photo: '/team/serga.jpg', position: 'center 50%', title: 'Психіатр, психолог, психотерапевт', with: 'дітьми та дорослими', format: 'онлайн', experience: '20 років', specialization: 'Дитячо-батьківські стосунки', open: false },
  { name: 'Думна Анастасія Миколаївна', photo: '/team/dymna-anastasia.jpeg', position: 'center 30%', title: 'Психолог', with: 'дорослими', format: 'онлайн та офлайн', experience: '4 роки', specialization: 'Цвяхотерапія', open: false },
  { name: 'Прищепа Марина Михайлівна', photo: '/team/maryna-pryshepa.jpeg', position: 'center 20%', title: 'Психолог (військова психологія)', with: 'дорослими', format: 'онлайн та офлайн', experience: '10 років', specialization: 'Робота з ветеранами з тілесними ураженнями', open: false },
  { name: 'Цюбченко Анастасія Олегівна', photo: '/team/svitchenko.jpg', position: 'center 60%', title: 'Психолог, травматерапевт', with: 'дорослими', format: 'онлайн та офлайн', experience: '4+ роки', specialization: 'EMDR, когнітивно-поведінкова терапія', open: false },
  { name: 'Бандура Ольга Олександрівна', photo: '/team/olha-bandyra.jpeg', position: 'center 40%', title: 'Психотерапевт (позитивна психотерапія)', with: 'дітьми та дорослими', format: 'онлайн та офлайн', experience: '10 років', specialization: 'Травма, втрата, сімейні відносини', open: false },
  { name: 'Опілат Ольга Миколаївна', photo: '/team/olga-opilat.jpeg', position: 'center 20%', title: 'Психолог-консультант (арттерапія)', with: 'дітьми та дорослими', format: 'онлайн та офлайн', experience: '1 рік психологиня / 5 років психосоціальна підтримка', specialization: 'Травма, психосоматика, сімейні відносини', open: false },
  { name: 'Павлюк Наталія Василівна', photo: '/team/nataliia-pavluk.jpg', position: 'center 10%', title: 'Психолог, логотерапевт', with: 'дорослими та підлітками', format: 'онлайн та офлайн', experience: '22 роки', specialization: 'Сімейні відносини, кризова психологія, залежності', open: false },
  { name: 'Лановлюк Інна Віталіївна', photo: '/team/inna-lanovliuk.png', position: 'center 60%', title: 'Психолог', with: 'дітьми, дорослими та групами', format: 'онлайн', experience: '4 роки', specialization: 'Травма, втрата, тривога, депресія', open: false },
  { name: 'Колесник Вікторія Леонідівна', photo: '/team/kolesnik.png', position: 'center 20%', title: 'Психолог', with: 'дорослими', format: 'онлайн та офлайн', experience: '15 років', specialization: 'Травмофокусована терапія, кризова психологія, гіпноз', open: false },
  { name: 'Сиско Наталія Миколаївна', photo: '/team/sysko.png', position: 'center 20%', title: 'Психолог, клінічний психолог', with: 'дорослими', format: 'онлайн та офлайн', experience: '28 років', specialization: 'Тривожні та стресові стани, робота з втратою', open: false },
  { name: 'Шаврова Любов Іванівна', photo: '/team/shavrova-lubov.jpg', position: 'center 0%', title: 'Практична психологія, хібукітерапія', with: 'дітьми, підлітками та дорослими', format: 'онлайн та офлайн', experience: '8 років', specialization: 'Тривожність, ПТСР, кризові стани, дитячо-батьківські відносини', open: false },
  { name: 'Дуднік Алла Олександрівна', photo: '/team/dudnik-alla.jpg', position: 'center 20%', title: 'Клінічний психолог, нейропсихолог', with: 'дорослими, підлітками та дітьми', format: 'онлайн та офлайн', experience: '13 років', specialization: 'Нейропсихологія, робота з тривогою, депресією та втратами', open: false },
  { name: 'Гриців Іванна Павлівна', photo: '/team/ivanina.png', position: 'center 40%', title: 'Психолог, арт-терапевт', with: 'дітьми та дорослими', format: 'онлайн та офлайн', experience: '20 років', specialization: 'Психологічна підтримка в кризі та після травматичних подій', open: false },
  { name: 'Свідюк Анна Володимирівна', photo: '/team/svidok.jpg', position: 'center 20%', title: 'Психолог, практик психотерапії', with: 'всі вікові групи', format: 'онлайн та офлайн', experience: 'з 2009 року', specialization: 'Інтегративна психотерапія, психологічне консультування', open: false },
  { name: 'Коширець Віктор Васильович', photo: '/team/placeholder.jpg', position: 'center 20%', title: 'Психолог, військовий психолог', with: 'дорослими', format: 'онлайн та офлайн', experience: 'з 2014 року', specialization: 'Військова психологія, клієнт-центрована психотерапія', open: false }
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
