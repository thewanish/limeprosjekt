<template>
  <div>
    <Navbar v-if="!isChatRoute" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, RouterView } from 'vue-router';  // <-- legg til RouterView her
import Navbar from './components/Navbar.vue';

const route = useRoute();
const isChatRoute = ref(route.path === '/chat');

watch(() => route.path, (newPath) => {
  isChatRoute.value = (newPath === '/chat');
});
</script>
