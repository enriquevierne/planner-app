<script setup>
import { ref } from "vue";
const supabase = useSupabaseClient();

// Definir uma variável reativa para os dados
const getBooks = await supabase.from("books").select("id");
</script>
<template>
  <div class="w-full min-h-screen bg-gradient-to-br from-slate-800 to-stone-950">
    <NuxtPage />
  </div>
</template>
