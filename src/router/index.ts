import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChatView from '../views/ChatView.vue';
import DocView from '../views/Doc.vue';
import ContactView from '../views/Contact.vue';
import OmView from '../views/Om.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/chat', name: 'Chat', component: ChatView },
  { path: '/doc', name: 'Doc', component: DocView },
  { path: '/contact', name: 'Contact', component: ContactView },
  { path: '/om', name: 'Om', component: OmView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
