<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');
const emit = defineEmits(['send']);

const sendMessage = () => {
  if (!message.value.trim()) return;
  emit('send', message.value);
  message.value = '';
};
</script>

<template>
  <div class="p-4 bg-white flex border-t border-gray-200">
    <input
      v-model="message"
      @keyup.enter="sendMessage"
      placeholder="Skriv her"
      type="text"
      class="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
    />
    <button
      @click="sendMessage"
      class="ml-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
    >
      Send
    </button>
  </div>
</template>
