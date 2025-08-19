<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const ansiennitet = ref('');
const bransje = ref('');

const login = () => {
  if (!ansiennitet.value || !bransje.value) {
    alert('Vennligst fyll ut begge feltene');
    return;
  }

  // Simulert brukerId, kan også genereres tilfeldig eller hentes fra backend
  const generatedUserId = 'user-' + Math.random().toString(36).substr(2, 9);

  // Sett bruker i store
  userStore.setUser({
    userId: generatedUserId,
    name: `${ansiennitet.value} - ${bransje.value}`,
  });

  // Naviger til chat
  router.push('/chat');
};
</script>

<template>
  <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
    <input
      v-model="ansiennitet"
      placeholder="Ansiennitet"
      class="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
    />
    <input
      v-model="bransje"
      placeholder="Bransje"
      class="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-600"
    />
    <button
      @click="login"
      class="w-full bg-green-600 hover:bg-green-700 transition text-white font-semibold py-2 rounded"
    >
      Logg inn
    </button>
  </div>
</template>
