<script setup>
const supabase = useSupabaseClient();

const { data: books, error } = await supabase.from("books").select("name");
</script>
<template>
  <div class="w-full min-h-screen bg-gradient-to-br from-slate-800 to-stone-950">
    <ul>
      <li v-for="book in books">
        {{ book.name }}
      </li>
    </ul>
  </div>
</template>
