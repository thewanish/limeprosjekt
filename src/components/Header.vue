<script setup lang="ts">
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
import robotImage from '../assets/robot.png';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.logout();
  router.push('/');
};
</script>

<template>
  <div
    class="py-4 px-6 bg-white shadow-md flex justify-between items-center border-b border-gray-200"
  >
    <img :src="robotImage" alt="Chat AI" class="w-8 h-8" /> 
    <h1 class="text-lg font-semibold text-gray-900">Chatbot</h1>
    <button
      @click="logout"
      class="text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
    >
      Tilbake til forsiden
    </button>
  </div>
</template>
