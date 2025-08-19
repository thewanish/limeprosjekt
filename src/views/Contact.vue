<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 p-6 overflow-hidden">
    <div class="max-w-3xl mx-auto animate-fade-in">
      <h1 class="text-3xl font-bold mb-6 text-green-600 animate-slide-down"> Kontakt info</h1>

      <!-- Kontaktinfo -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">✉️ Hvordan komme i kontakt?</h2>
        <p class="text-gray-700">
          Har du spørsmål, tilbakemeldinger eller bare vil slå av en prat? 
          Du kan nå meg enkelt via epost under
        </p>
      </section>

      <!-- Kontakt epost -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">📧 Epostadresse</h2>
        <p class="text-gray-700">
          Send meg gjerne en epost om du har noe spørsmål:
        </p>
        <p class="text-gray-700 font-mono mt-2">payan.sh@outlook.com  </p>
      </section>

      <!-- Andre kontaktmuligheter -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">📱 Andre måter</h2>
        <p class="text-gray-700">
          Foreløpig er epost beste måte å kontakte meg på
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Ingen ekstra script nødvendig her
</script>

<style scoped>
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

.delay-300 { animation-delay: 0.3s; }
</style>
