<template>
    <nav class="bg-gray-800 text-white p-4 flex items-center justify-between relative z-20">
      <div class="text-xl font-semibold">
        <router-link to="/" class="logo-text">VERCBOT</router-link>
      </div>
  
      <!-- Hamburger button (mobile only) -->
      <button @click="isOpen = !isOpen" class="sm:hidden focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
  
      <!-- Desktop Menu with hover boxes -->
      <ul class="hidden sm:flex space-x-4">
        <li>
          <router-link
            to="/"
            class="px-3 py-2 rounded-md transition duration-200 hover:bg-gray-700 hover:text-green-400"
          >
            Hjem
          </router-link>
        </li>
        <li>
          <router-link
            to="/doc"
            class="px-3 py-2 rounded-md transition duration-200 hover:bg-gray-700 hover:text-green-400"
          >
            Dokumentasjon
          </router-link>
        </li>
      </ul>
  
      <!-- Mobile Menu (shown when hamburger is open) -->
      <ul
        v-if="isOpen"
        class="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-start p-4 sm:hidden"
      >
        <li class="py-2 w-full">
          <router-link
            to="/"
            @click="isOpen = false"
            class="block w-full px-3 py-2 rounded-md hover:bg-gray-700 hover:text-green-400"
          >
            Hjem
          </router-link>
        </li>
        <li class="py-2 w-full">
          <router-link
            to="/doc"
            @click="isOpen = false"
            class="block w-full px-3 py-2 rounded-md hover:bg-gray-700 hover:text-green-400"
          >
            Dokumentasjon
          </router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isOpen = ref(false);
  </script>
  
  <style scoped>
  /* Animasjon for logoens tekstfarge */
  @keyframes pulse {
    0% {
      color: #ffffff;
    }
    50% {
      color: #b0b0b0; /* Grå farge */
    }
    100% {
      color: #ffffff;
    }
  }
  
  .logo-text {
    animation: pulse 3s ease-in-out infinite;
  }
  </style>
  