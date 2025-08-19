<script setup lang="ts">
defineOptions({
  name: 'HomeView'
});

import { ref, computed, onMounted } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
import axios from 'axios';

const userStore = useUserStore();
const router = useRouter();

const isLoggedIn = computed(() => !!userStore.userId);

const name = ref('');
const email = ref('');
const loading = ref(false);
const error = ref('');

const createUser = async () => {
  if (!name.value.trim() || !email.value.trim()) {
    error.value = 'Trenger navn og e-post';
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

function handleLogin() {
  createUser();
}

// 🔁 WARM-UP: Send HEAD request on mount (backend wake-up, invisible to user)
onMounted(async () => {
  try {
    await axios.head(`${import.meta.env.VITE_API_URL}/register-user`);
  } catch (err) {
    console.warn('Warm-up HEAD request failed (ignored):', err);
  }
});
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <!-- Step-by-step lyseblå ruter over login -->
    <div v-if="!isLoggedIn" class="max-w-4xl mx-auto mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="bg-blue-100 rounded-lg p-6 shadow-md">
        <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold mb-4 text-lg">1</div>
        <h3 class="text-xl font-semibold mb-2 text-blue-900">Fyll ut feltene</h3>
        <p class="text-blue-800">Skriv inn din erfaring og bransje for å starte chatten.</p>
      </div>
      <div class="bg-blue-100 rounded-lg p-6 shadow-md">
        <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold mb-4 text-lg">2</div>
        <h3 class="text-xl font-semibold mb-2 text-blue-900">Trykk Start og Vent</h3>
        <p class="text-blue-800">Trykk start og vent 30 sekunder for å laste inn og begynne samtalen.</p>
      </div>
      <div class="bg-blue-100 rounded-lg p-6 shadow-md">
        <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white font-bold mb-4 text-lg">3</div>
        <h3 class="text-xl font-semibold mb-2 text-blue-900">Snakk med chatbotten</h3>
        <p class="text-blue-800">Still spørsmål og få svar umiddelbart fra vår AI.</p>
      </div>
    </div>

    <!-- Innloggingsskjema -->
    <div v-if="!isLoggedIn" class="max-w-md mx-auto p-4 bg-white rounded shadow mb-8">
      <h2 class="text-xl font-semibold mb-4">Snakk med vår chatbot</h2>
      <form @submit.prevent="handleLogin">
        <input
          v-model="name"
          type="text"
          placeholder="Ansiennitet"
          class="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          v-model="email"
          type="text"
          placeholder="Bransje"
          class="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          class="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded transition"
          :disabled="loading"
        >
          {{ loading ? 'Laster..' : 'Start chat (tar 30 sek å våkne)' }}
        </button>
      </form>
      <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
    </div>

    <!-- Tre større ruter nederst -->
    <div v-if="!isLoggedIn" class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <router-link
        to="/contact"
        class="flex flex-col items-center bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow hover:bg-green-50 hover:ring-2 hover:ring-green-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 mb-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span class="text-lg font-semibold text-gray-900">Kontakt</span>
      </router-link>

      <router-link
        to="/doc"
        class="flex flex-col items-center bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow hover:bg-green-50 hover:ring-2 hover:ring-green-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 mb-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.1 0-2 .9-2 2v6h4v-6c0-1.1-.9-2-2-2z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 14v-2a2 2 0 00-2-2h-4v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2z" />
        </svg>
        <span class="text-lg font-semibold text-gray-900">Dokumentasjon</span>
      </router-link>

      <router-link
        to="/om"
        class="flex flex-col items-center bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow hover:bg-green-50 hover:ring-2 hover:ring-green-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-14 h-14 mb-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"></circle>
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 12v.01M12 7h.01M12 17h.01" />
        </svg>
        <span class="text-lg font-semibold text-gray-900">Om Shilwan</span>
      </router-link>
    </div>
  </div>
</template>
