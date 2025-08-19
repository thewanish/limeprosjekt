// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChatView from '../views/ChatView.vue';
import DocView from '../views/Doc.vue';
import ContactView from '../views/Contact.vue';
import OmView from '../views/Om.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/chat', component: ChatView },
  { path: '/doc', component: DocView },   
  { path: '/contact', component: ContactView },  
  { path: '/om', component: OmView }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
