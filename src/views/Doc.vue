<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 p-6 overflow-hidden">
    <div class="max-w-3xl mx-auto animate-fade-in">
      <h1 class="text-3xl font-bold mb-6 text-green-600 animate-slide-down">📁 Dokumentasjon</h1>

      <!-- Om prosjektet -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">🛠️ Hva er greia?</h2>
        <p class="text-gray-700">
          Dette er en smart chatbot-app som lar brukeren snakke med en AI – som bruker API til OpenAI sin GPT-3.5.  
          Den er bygget med Vite, Vue og TypeScript for en smooth, moderne dev-opplevelse.
        </p>
      </section>

      <!-- GPT-integrasjon -->
      <section class="mb-10 animate-fade-in delay-300">
        <h2 class="text-2xl font-semibold mb-2">🤖 GPT-3.5 API under panseret</h2>
        <p class="text-gray-700">
          Når du sender en melding, sendes den via backend til GPT-3.5. Svaret returneres nesten med en gang – 
          som å chatte med en smart kompis som aldri sover. Alt skjer via et enkelt API-kall.
        </p>
      </section>

      <!-- Teknologi brukt -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">🧱 Hva brukte Shilwan her?</h2>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Vite</strong> – Rask oppstart.</li>
          <li><strong>Vue 3</strong> – Component-based frontend magic.</li>
          <li><strong>TypeScript</strong> – Safety first. Eller i hvert fall type safety.</li>
          <li><strong>Tailwind CSS</strong> – Styling uten å skrive CSS fra scratch. Love it.</li>
          <li><strong>Pinia</strong> – Brukes som state manager (aka app-hukommelse).</li>
          <li><strong>Vue Router</strong> – Navigasjon mellom views uten full page reloads.</li>
        </ul>
      </section>

      <!-- Prosjektstruktur -->
      <section class="mb-10 animate-slide-up delay-500">
        <h2 class="text-2xl font-semibold mb-2">📁 Hvordan er ting organisert?</h2>
        <p class="text-gray-700 mb-2">
          Appen er delt opp i komponenter, slik at alt er lett å holde styr på:
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li><code>Header.vue</code> – Toppbaren med logo og slikt.</li>
          <li><code>ChatInput.vue</code> – Hvor du skriver meldinger til AI-en.</li>
          <li><code>ChatView.vue</code> – Hele chat-opplevelsen bor her.</li>
          <li><code>Navbar.vue</code> – Navigasjon, skjules når du er i selve chatten.</li>
          <li><code>user.ts</code> og <code>chat.ts</code> – Lagrer brukerdata og chat-historikk.</li>
        </ul>
      </section>

      <!-- Videre utvikling -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">📁 Hva kan komme videre?</h2>
        <p class="text-gray-700">
          Dette er bare starten – her er noen ideer for neste versjon(er):
        </p>
        <ul class="list-disc list-inside text-gray-700 space-y-1">
          <li>Login & brukerprofiler (aka auth)</li>
          <li>Endre til GPT-4 og kanskje bilder</li>
          <li>Dark/light mode switch, kanskje?</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Ingen script nødvendig her
</script>

<style scoped>
/* Animasjoner beholdes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes slideDown {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-down {
  animation: slideDown 0.8s ease-out;
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.delay-300 { animation-delay: 0.3s; }
.delay-500 { animation-delay: 0.5s; }
</style>
