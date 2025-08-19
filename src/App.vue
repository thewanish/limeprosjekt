<template>
  <div>
    <Navbar v-if="!isChatRoute" />
    <router-view v-slot="{ Component, route }">
      <keep-alive include="HomeView" v-if="route.name === 'Home'">
        <component :is="Component" />
      </keep-alive>
      <component v-else :is="Component" />
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';

const route = useRoute();
const isChatRoute = ref(route.name === 'Chat');

watch(() => route.name, (newName) => {
  isChatRoute.value = newName === 'Chat';
});
</script>
