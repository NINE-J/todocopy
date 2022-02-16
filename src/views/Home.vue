<template>
  <div
    class="home w-screen h-screen flex justify-center py-16 px-8 bg-gray-100"
  >
    <div class="lg:w-1/3 md:w-2/3 w-full flex flex-col items-center">
      <h1 class="md:text-8xl text-6xl text-red-300 mb-4">Todos</h1>
      <div class="shadow-lg w-full">
        <MainInput></MainInput>
        <List></List>
      </div>
    </div>
  </div>
</template>

<script>
import MainInput from '@/components/MainInput.vue';
import List from '@/components/List.vue';

export default {
  name: 'Home',
  components: {
    MainInput,
    List
  }
};
</script>
