<template>
  <nav class="bg-white border-b border-gray-200" role="navigation" aria-label="Hovedmeny">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo only -->
        <router-link
          to="/"
          class="flex items-center space-x-3 hover:text-green-600 focus:outline-none focus:text-green-600"
        >
          <img
            :src="logo"
            alt="Lime Technologies logo"
            class="h-10 w-auto"
            aria-hidden="true"
          />
        </router-link>

        <!-- Desktop Menu -->
        <ul class="hidden sm:flex space-x-8 font-source-sans-pro text-gray-900 text-base font-medium">
          <li>
            <router-link
              to="/"
              class="hover:text-green-600 focus:outline-none focus:text-green-600"
            >Hjem</router-link>
          </li>

          <li class="relative group">
            <button
              type="button"
              class="inline-flex items-center hover:text-green-600 focus:outline-none focus:text-green-600"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Meny
              <svg
                class="ml-1 h-4 w-4 text-gray-500 group-hover:text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown panel -->
            <ul
              class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
              role="menu"
              aria-label="Dokumentasjon meny"
            >
              <li>
                <router-link
                  to="/contact"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 focus:outline-none focus:bg-green-50 focus:text-green-700"
                  role="menuitem"
                >Kontakt</router-link>
              </li>
              <li>
                <router-link
                  to="/Doc"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 focus:outline-none focus:bg-green-50 focus:text-green-700"
                  role="menuitem"
                >Dokumentasjon</router-link>
              </li>
              <li>
                <router-link
                  to="/Om"
                  class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 focus:outline-none focus:bg-green-50 focus:text-green-700"
                  role="menuitem"
                >Info</router-link>
              </li>
            </ul>
          </li>
        </ul>

        <!-- Hamburger button -->
        <button
          @click="isOpen = !isOpen"
          class="sm:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
          aria-label="Åpne hovedmeny"
          :aria-expanded="isOpen ? 'true' : 'false'"
        >
          <svg
            v-if="!isOpen"
            class="h-6 w-6 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="h-6 w-6 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="sm:hidden bg-white border-t border-gray-200"
      role="menu"
      aria-label="Mobil hovedmeny"
    >
      <ul class="flex flex-col px-4 py-3 space-y-1 font-source-sans-pro text-gray-900">
        <li>
          <router-link
            to="/"
            @click="closeMenu"
            class="block px-3 py-2 rounded hover:bg-green-50 hover:text-green-700 focus:outline-none focus:bg-green-50 focus:text-green-700"
            role="menuitem"
          >Hjem</router-link>
        </li>

        <li>
          <button
            @click="toggleMobileDropdown"
            class="w-full flex items-center justify-between px-3 py-2 rounded hover:bg-green-50 hover:text-green-700 focus:outline-none focus:bg-green-50 focus:text-green-700"
            aria-haspopup="true"
            :aria-expanded="mobileDropdownOpen ? 'true' : 'false'"
          >
            Meny
            <svg
              :class="{'transform rotate-180': mobileDropdownOpen}"
              class="h-4 w-4 transition-transform duration-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <ul
            v-show="mobileDropdownOpen"
            class="pl-6 mt-1 space-y-1"
            role="menu"
            aria-label="Mobil dokumentasjon undermeny"
          >
            <li>
              <router-link
                to="/contact"
                class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 focus:outline-none focus:bg-green-50 focus:text-green-700"
                role="menuitem"
              >Kontakt</router-link>
            </li>
            <li>
              <router-link
                to="/Doc"
                class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 focus:outline-none focus:bg-green-50 focus:text-green-700"
                role="menuitem"
              >Dokumentasjon</router-link>
            </li>
            <li>
              <router-link
                to="/Om"
                class="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700 focus:outline-none focus:bg-green-50 focus:text-green-700"
                role="menuitem"
              >Info</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import logo from '../assets/lime.svg'
import { ref } from 'vue'

const isOpen = ref(false)
const mobileDropdownOpen = ref(false)

function closeMenu() {
  isOpen.value = false
  mobileDropdownOpen.value = false
}

function toggleMobileDropdown() {
  mobileDropdownOpen.value = !mobileDropdownOpen.value
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.font-source-sans-pro {
  font-family: 'Source Sans Pro', system-ui, sans-serif;
}
</style>
