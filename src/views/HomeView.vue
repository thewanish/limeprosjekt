<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
import robotImage from '../assets/robot.png';

const userStore = useUserStore();
const router = useRouter();

const name = ref('');
const email = ref('');
const loading = ref(false);
const error = ref('');

const createUser = async () => {
  if (!name.value || !email.value) {
    error.value = 'Trenger navn og email eller etternavn';
    return;
  }

  loading.value = true;
  error.value = '';

  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/register-user`,
      {
        name: name.value,
        email: email.value,
      }
    );

    userStore.setUser({
      userId: data.userId,
      name: data.name,
    });

    router.push('/chat');
  } catch (err) {
    error.value = 'Noe gikk galt. Prøv igjen';
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
    <!-- Animated lines background (Unchanged) -->
    <div class="absolute inset-0 w-full h-full lines-bg"></div>

    <!-- Container for login form with glowing snake-like effect -->
    <div class="relative z-10 p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
      <!-- Glowing snake box around the login container -->
      <div class="absolute inset-0 snake-box"></div>

      <img :src="robotImage" alt="" class="mx-auto w-24 h-24 mb-4" />
      <h1 class="text-2xl font-semibold mb-4 text-center">
        Velkommen til Vercbot
      </h1>

      <input
        type="text"
        class="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg focus:outline-none"
        placeholder="Navn"
        v-model="name"
      />
      <input
        type="email"
        class="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg focus:outline-none"
        placeholder="Etternavn/Selskap"
        v-model="email"
      />

      <button
        @click="createUser"
        class="w-full p-2 bg-green-500 rounded-lg hover:bg-green-600 transition duration-200"
        :disabled="loading"
      >
        {{ loading ? 'Laster..' : 'Start Chat' }}
      </button>

      <p v-if="error" class="text-red-400 text-center mt-2">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Add the animated lines behind the content (Unchanged) */
.lines-bg {
  background: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0, rgba(255, 255, 255, 0.1) 1px, transparent 1px, transparent 10px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: moveLines 5s linear infinite;
}

@keyframes moveLines {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Glowing snake box around the login container */
.snake-box {
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border: 1px solid rgba(255, 255, 255, 0.2); /* Subtle white border */
  border-radius: 12px;
  z-index: -1;
  animation: snakeMovement 6s ease-in-out infinite; /* Snake movement animation */
}

@keyframes snakeMovement {
  0% {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.5);
    transform: translate(0, 0);
  }
  25% {
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.7);
    transform: translate(10px, 10px);
  }
  50% {
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.7), 0 0 50px rgba(255, 255, 255, 0.8);
    transform: translate(-10px, -10px);
  }
  75% {
    border-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.7);
    transform: translate(5px, -5px);
  }
  100% {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.5);
    transform: translate(0, 0);
  }
}
</style>
