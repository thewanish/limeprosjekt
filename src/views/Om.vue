<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 p-6 overflow-hidden">
    <div class="max-w-3xl mx-auto animate-fade-in">
      <h1 class="text-3xl font-bold mb-6 text-green-600 animate-slide-down"> Kort om meg</h1>

      <!-- Kontaktinfo -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">Utdanning</h2>
        <p class="text-gray-700">
          Bachelor i IT og informasjonssystemer ga meg solide ferdigheter innen:

          program/ystemutvikling
          webbaserte løsninger 
          brukerstøtte og IT-forvaltning
          
        </p>
         <p class="text-gray-700 font-mono mt-2">Bachelor i IT og informasjonssystemer  </p>
      </section>

      <!-- Kontakt epost -->
      <section class="mb-10">
        <h2 class="text-2xl font-semibold mb-2">Kompetanse</h2>
        <p class="text-gray-700">
          React – God erfaring med komponentbasert utvikling, hooks og moderne frontend-arkitektur. Har bygget flere prosjekter med React. 
          Lært C# gjennom utvikling i Unity, og senere brukt det videre i backend med ASP.NET Core og REST API-er.
        </p>
        <p class="text-gray-700 font-mono mt-2">React, C# og Typescript </p>
      </section>

      <!-- Andre kontaktmuligheter -->
      <section>
        <h2 class="text-2xl font-semibold mb-2">Konsulent erfaring</h2>
        <p class="text-gray-700">
          Jeg jobbet et halvt år hos DNB i 2022 som som supportkonsulent og deretter hos Departementenes sikkerhets- og serviceorganisasjon (DSS) i 2025. Der jobbet jeg med brukerstøtte, feilsøking og problemløsning i systemer brukt av departementene. Rollen ga meg innsikt i sikkerhet, rutiner i offentlig sektor og verdien av tydelig kommunikasjon.
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
