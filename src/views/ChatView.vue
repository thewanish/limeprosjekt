<script setup lang="ts">
import { ref, nextTick, onMounted, watch } from 'vue';
import { useUserStore } from '../stores/user';
import { useChatStore } from '../stores/chat';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import Header from '../components/Header.vue';
import ChatInput from '../components/ChatInput.vue';

const userStore = useUserStore();
const chatStore = useChatStore();
const router = useRouter();

if (!userStore.userId) {
  router.push('/');
}

const chatContainer = ref<HTMLElement | null>(null);

const scrollToBottom = () => {
  nextTick(() => {
    const container = chatContainer.value;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  });
};

onMounted(() => {
  chatStore.loadChatHistory().then(() => {
    nextTick(() => {
      scrollToBottom();
    });
  });
});

watch(
  () => chatStore.messages,
  () => {
    nextTick(() => {
      scrollToBottom();
    });
  },
  { immediate: true }
);

// Når brukeren forlater /chat, f.eks. tilbakeknapp til /, så logg ut userStore
onBeforeRouteLeave((to, _from, next) => {
  if (to.path === '/') {
    userStore.logout();
  }
  next();
});

const formatMessage = (text: string) => {
  if (!text) return '';

  return text
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
    .replace(/\*(.*?)\*/g, '<i>$1</i>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/(?:^|\n)- (.*?)(?:\n|$)/g, '<li>$1</li>')
    .replace(/(?:^|\n)(\d+)\. (.*?)(?:\n|$)/g, '<li>$1. $2</li>')
    .replace(/<\/li>\n<li>/g, '</li><li>')
    .replace(/<li>/, '<ul><li>')
    .replace(/<\/li>$/, '</li></ul>');
};
</script>

<template>
  <div class="flex flex-col h-screen bg-gray-100 text-gray-900">
    <Header />

    <!-- Chat messages -->
    <div
      id="chat-container"
      class="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100"
      ref="chatContainer"
    >
      <div
        v-for="(msg, index) in chatStore.messages"
        :key="index"
        class="flex items-start"
        :class="msg.role === 'user' ? 'justify-end' : 'justify-start'"
      >
        <div
          v-html="formatMessage(msg.content)"
          class="max-w-xs px-4 py-2 rounded-lg md:max-w-md"
          :class="msg.role === 'user' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-900'"
        ></div>
      </div>
      <div v-if="chatStore.isLoading" class="flex justify-start">
        <div class="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg">
          <span class="animate-pulse">Arbeidstilsynet bot skriver...</span>
        </div>
      </div>
    </div>

    <ChatInput @send="chatStore.sendMessage" />
  </div>
</template>

<style scoped>
/* Ekstra styling kan legges til her */
</style>
