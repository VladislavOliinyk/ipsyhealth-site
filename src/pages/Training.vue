<template>
  <main class="bg-white dark:bg-neutral-950">

    <!-- PAGE TITLE -->
    <section class="pt-16 pb-12">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h1 class="text-3xl font-semibold text-neutral-900 dark:text-white">
          Навчання
        </h1>
      </div>
    </section>

    <!-- MISSION / VALUES -->
    <section class="pb-36">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

          <!-- CARD 1 -->
          <div class="group relative p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-neutral-900
                      border border-blue-100 dark:border-blue-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="absolute -top-5 left-6 text-6xl text-blue-400 opacity-30">“</div>
            <p class="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
              <strong class="block text-xl mb-3">Наша мета</strong>
              Надання якісного навчання в Україні, саме тому була створена ГО
              «Інститут психології здоров'я Institute of Health Psychology».
            </p>
          </div>

          <!-- CARD 2 -->
          <div class="group relative p-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950 dark:to-neutral-900
                      border border-emerald-100 dark:border-emerald-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="absolute -top-5 left-6 text-6xl text-emerald-400 opacity-30">“</div>
            <p class="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
              <strong class="block text-xl mb-3">Наш підхід</strong>
              Ми використовуємо сучасні та дієві навчальні методології, постійно вдосконалюємо
              наші програми завдяки практичним напрацюванням.
            </p>
          </div>

          <!-- CARD 3 -->
          <div class="group relative p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-white dark:from-violet-950 dark:to-neutral-900
                      border border-violet-100 dark:border-violet-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="absolute -top-5 left-6 text-6xl text-violet-400 opacity-30">“</div>
            <p class="text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
              <strong class="block text-xl mb-3">Експертиза</strong>
              Всі викладачі програм – практикуючі психологи з багаторічним досвідом, через що всі
              знання надаються тільки після особистого опрацювання їх на практиці.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- TABS -->
    <section class="pb-32">
      <div class="max-w-7xl mx-auto px-6">

        <!-- TAB BUTTONS -->
        <div class="flex flex-col md:flex-row gap-4 justify-center mb-20">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-6 py-4 rounded-full border transition-all duration-300 text-sm md:text-base font-medium text-center
                   w-full md:w-[420px]"
            :class="activeTab === tab.id
              ? 'border-blue-500 text-blue-600 bg-blue-50 dark:bg-blue-950 shadow-md'
              : 'border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900'"
          >
            {{ tab.title }}
          </button>
        </div>

        <!-- TAB CONTENT -->
        <transition name="fade" mode="out-in">
          <div :key="activeTab">

<!-- TAB 1: 8-STEP GRIEF PROGRAM -->
<div v-if="activeTab === 1" class="space-y-24">

  <!-- INTRO -->
  <section class="max-w-4xl mx-auto space-y-6">
    <h2 class="text-2xl md:text-3xl font-semibold text-center dark:text-white">
      Програма призначена для керівників груп психологічної підтримки, які працюють:
    </h2>

    <ul class="space-y-3 text-neutral-700 dark:text-neutral-300 text-lg">
      <li>• з дорослими людьми, що втратили супутника життя, батьків, брата, сестру чи дитину;</li>
      <li>• з дітьми та підлітками, які втратили брата або сестру, батьків;</li>
      <li>• для груп батьків таких дітей, які втратили близьких.</li>
    </ul>
  </section>

  <!-- DESCRIPTION -->
  <section
    class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-10 rounded-3xl
           bg-gradient-to-br from-blue-50 to-white
           dark:from-blue-950 dark:to-neutral-900
           border border-blue-100 dark:border-blue-900"
  >
    <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
      Програма містить рекомендації щодо проведення бесід з родичами, працівниками дитячого садка або школи.
      Участь у програмі навчання допоможе побудувати роботу та впорядкувати тематичний зміст з цієї теми.
    </p>

    <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
      Крім того, це навчання дозволяє забезпечити більш якісну, професійну підтримку при переживанні
      втрати близької людини, використовуючи можливість залучення близького оточення.
    </p>
  </section>

  <!-- FORMATS -->
  <section class="grid grid-cols-1 md:grid-cols-3 gap-8">

  <!-- VIDEO -->
  <div
    class="p-10 rounded-3xl text-center
           bg-gradient-to-br from-red-50 to-white
           dark:from-neutral-900 dark:to-neutral-950
           border border-red-100 dark:border-neutral-800
           transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="flex justify-center mb-6">
      <div class="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center text-red-500 text-3xl shadow">
        ▶️
      </div>
    </div>

    <h3 class="text-xl font-semibold mb-1 dark:text-white">Запис навчання</h3>
    <p class="text-sm font-medium text-neutral-500 mb-4">Кнут Андерсен, Норвегія</p>

    <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
      8-ми крокова програма психологічної підтримки для дорослих, дітей та підлітків,
      які пережили втрату.
    </p>

    <button
      class="inline-flex items-center gap-2 px-7 py-3 rounded-full
             bg-red-500 text-white font-medium shadow-lg
             transition-all duration-300 hover:bg-red-600 hover:shadow-xl"
    >
      ▶️ Дивитись запис
    </button>
  </div>

  <!-- ONLINE -->
  <div
    class="p-10 rounded-3xl text-center
           bg-gradient-to-br from-blue-50 to-white
           dark:from-neutral-900 dark:to-neutral-950
           border border-blue-100 dark:border-neutral-800
           transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="flex justify-center mb-6">
      <div class="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-500 text-3xl shadow">
        🌐
      </div>
    </div>

    <h3 class="text-xl font-semibold mb-4 dark:text-white">Онлайн формат навчання</h3>

    <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
      Навчання онлайн — для вашої безпеки та зручності.
    </p>

    <div class="flex flex-col gap-3">
      <button
        class="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full
               bg-blue-500 text-white font-medium shadow-lg
               transition-all duration-300 hover:bg-blue-600 hover:shadow-xl"
      >
        🔍 Дізнатись більше
      </button>

      <button
        class="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full
               bg-white dark:bg-neutral-800
               border border-blue-200 dark:border-blue-800
               text-blue-600 dark:text-blue-400 font-medium shadow
               transition-all duration-300 hover:shadow-md"
      >
        🔍 Контрольні запитання
      </button>
    </div>
  </div>

  <!-- OFFLINE -->
  <div
    class="p-10 rounded-3xl text-center
           bg-gradient-to-br from-emerald-50 to-white
           dark:from-neutral-900 dark:to-neutral-950
           border border-emerald-100 dark:border-neutral-800
           transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div class="flex justify-center mb-6">
      <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-500 text-3xl shadow">
        📍
      </div>
    </div>

    <h3 class="text-xl font-semibold mb-4 dark:text-white">Офлайн формат навчання</h3>

    <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
      Дати очного навчання будуть вказані в календарі подій.
    </p>

    <div class="flex flex-col gap-3">
      <button
        class="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full
               bg-emerald-500 text-white font-medium shadow-lg
               transition-all duration-300 hover:bg-emerald-600 hover:shadow-xl"
      >
        🔍 Календар подій
      </button>

      <button
        class="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full
               bg-white dark:bg-neutral-800
               border border-emerald-200 dark:border-emerald-800
               text-emerald-600 dark:text-emerald-400 font-medium shadow
               transition-all duration-300 hover:shadow-md"
      >
        🔍 Контрольні запитання
      </button>
    </div>
  </div>

</section>


  <!-- EXPERIENCE -->
  <section
    class="max-w-6xl mx-auto p-10 rounded-3xl
           bg-gradient-to-br from-neutral-50 to-white
           dark:from-neutral-900 dark:to-neutral-950
           border"
  >
    <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
      Представлені розробки ґрунтуються на багаторічному досвіді ведення груп для дорослих,
      які втратили близьких людей, та подоланні труднощів, що виникають у сім’ї.
    </p>

    <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
      Кожна тема має продовження з поглибленням, питаннями для роздумів та літературою з рекомендаціями.
      Для ефективної роботи важливо, щоб керівники груп мали знання про горювання та кризові реакції.
    </p>
  </section>

  <!-- AUTHORS / THANKS -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-10">

    <div class="p-8 rounded-3xl bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900">
      <h3 class="text-xl font-semibold mb-4 dark:text-white">Група авторів</h3>
      <p class="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        Карі Е. Бюгге, Хеге Сантандер, Анне Каро Орфосс, Карен Тересе Сулхейм Хогстведт,
        Еліне Греллан Рьокхольт та психолог Айнхіль Селнес.
      </p>
    </div>

    <div class="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-900">
      <h3 class="text-xl font-semibold mb-4 dark:text-white">Подяка</h3>
      <p class="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
        Ми вдячні Кнуту Андерсену та Лінді Хансен за підтримку, а також усім керівникам
        груп підтримки за участь у розвитку програми протягом багатьох років.
      </p>
    </div>

  </section>

</div>


            <!-- TAB 3: BIO-SUGGESTIVE THERAPY -->
            <div v-if="activeTab === 3" class="space-y-32">

              <section class="text-center max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-neutral-900 p-10 rounded-3xl border border-blue-100 dark:border-blue-900">
                <h2 class="text-2xl font-semibold mb-6 dark:text-white">
                  Цей метод є простим, і водночас ефективним терапевтичним засобом, метою якого є
                  позбавлення людини психосоматичних розладів.
                </h2>
              </section>

              <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                <div class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  БСТ поєднує прийоми вербального і невербального навіювання в стані легкого трансу.
                  Дводенний курс навчання дозволяє психологу, лікарю або коучу засвоїти метод у повному
                  обсязі і після завершення тренінгу використовувати його у своїй практиці, працюючи
                  з клієнтами індивідуально або з групою – безпосередньо або дистанційно.
                </div>
                <div class="h-64 md:h-72 rounded-2xl overflow-hidden">
                  <span class="text-neutral-400"><img src="/images/bst-method.png" alt="BST Method" class="w-full h-full object-cover"></span>
                </div>
              </section>

              <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
        <div class="h-64 md:h-72 rounded-2xl overflow-hidden">
                  <span class="text-neutral-400"><img src="/images/perevagy.png" alt="BST Method" class="w-full h-full"></span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-4 dark:text-white">Переваги біосугестивної терапії:</h3>
                  <ul class="space-y-3 text-neutral-700 dark:text-neutral-300">
                    <li>✔ Для сеансу потрібно 18 хвилин.</li>
                    <li>✔ Позитивний ефект після першого сеансу.</li>
                    <li>✔ Невелика кількість сеансів.</li>
                    <li>✔ Позитивний результат у ~95% пацієнтів.</li>
                  </ul>
                </div>
              </section>

              <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                <div>
                  <h3 class="text-xl font-semibold mb-4 dark:text-white">
                    Повна вартість курсу – еквівалент 120 євро, до якого входить:
                  </h3>
                  <ul class="space-y-3 text-neutral-700 dark:text-neutral-300">
                    <li>✔ Тренінг-інтенсив з лікувальними сеансами;</li>
                    <li>✔ Тексти психотерапевтичного сеансу;</li>
                    <li>✔ Музичні файли;</li>
                    <li>✔ Посібник з біосугестивної терапії (електронна версія).</li>
                  </ul>
                </div>
        <div class="h-64 md:h-72 rounded-2xl overflow-hidden">
                  <span class="text-neutral-400"><img src="/public/images/ivestestion.png" alt="BST Method" class="w-full h-full"></span>
                </div>
              </section>

<section
  class="text-center space-y-6 p-10 rounded-3xl
         bg-gradient-to-br from-violet-50 to-white
         dark:from-violet-950 dark:to-neutral-900
         border border-violet-100 dark:border-violet-900"
>
  <!-- CERTIFICATE IMAGE -->
<div
  class="max-w-xs md:max-w-sm mx-auto
         rounded-2xl overflow-hidden
         bg-white dark:bg-neutral-800
         shadow-xl border border-neutral-200 dark:border-neutral-700"
>
    <img
      src="/public/images/biosugestive.png"
      alt="Сертифікат з біосугестивної терапії"
      class="w-full h-auto object-contain"
    />
  </div>

  <!-- TITLE -->
  <p class="text-lg md:text-xl font-semibold text-neutral-900 dark:text-white">
    СЕРТИФІКАЦІЯ – 500 ГРН
  </p>

  <!-- DESCRIPTION -->
  <p class="text-sm md:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
    Індивідуальне налаштування постанови голосу, перевірка і корекція аудіозапису сеансу,
    екзамен та офіційна сертифікація після успішного завершення курсу.
  </p>
</section>


<section
  class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center
         p-10 rounded-3xl
         bg-gradient-to-br from-emerald-50 to-white
         dark:from-emerald-950 dark:to-neutral-900
         border border-emerald-100 dark:border-emerald-900"
>
  <!-- TEXT -->
  <div class="space-y-4 text-neutral-700 dark:text-neutral-300">
    <h3 class="text-xl font-semibold text-neutral-900 dark:text-white">
      Міжнародне стажування
    </h3>

    <p class="leading-relaxed">
      У подальшому, за умови використання методу БСТ у своїй практиці, фахівцю
      надається можливість безкоштовного стажування в Міжнародному центрі
      Біосугестивної терапії «Astralitus» (Угорщина).
    </p>

    <p class="text-sm text-neutral-500 dark:text-neutral-400">
      Практичний досвід, міжнародна спільнота та робота з фахівцями з різних країн.
    </p>
  </div>

  <!-- IMAGE -->
  <div
    class="max-w-sm mx-auto rounded-2xl overflow-hidden
           bg-white dark:bg-neutral-800
           shadow-xl border border-neutral-200 dark:border-neutral-700"
  >
    <img
      src="/public/images/ugorshina.png"
      alt="Стажування в центрі Astralitus"
      class="w-full h-auto object-contain"
    />
  </div>
</section>

            </div>
          </div>
        </transition>

      </div>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ref([
  { id: 1, title: '8 крокова програма по роботі з втратою для дорослих, дітей та підлітків' },
  { id: 2, title: 'Курс стажування «Основи психотравматології»' },
  { id: 3, title: 'Навчальний курс «Біосугестивна терапія»' }
])

const activeTab = ref(3)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
