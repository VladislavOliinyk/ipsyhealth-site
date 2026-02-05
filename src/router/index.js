import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Team from '../pages/Team.vue'
import Training from '../pages/Training.vue'
import Contacts from '../pages/Contacts.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/team', name: 'Team', component: Team },
    { path: '/training', name: 'Training', component: Training },
    { path: '/contacts', name: 'Contacts', component: Contacts },
  ],
})

export default router