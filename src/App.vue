<template>
  <div>
    <Navbar v-if="!isChatRoute" />
    <RouterView />
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';

const route = useRoute();

const isChatRoute = computed(() => route.path === '/chat');
</script>