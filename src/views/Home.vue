<template>
  <div class="container">
    <h1>Todos</h1>
    <MainInput></MainInput>
  </div>
</template>

<script>
import MainInput from '@/components/MainInput.vue';

export default {
  name: 'Home',
  components: {
    MainInput
  }
};
</script>
