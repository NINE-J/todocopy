<template>
  <div class="main-input">
    <input type="text" v-model="text" />
  </div>
</template>

<script>
export default {
  name: 'MainInput',
  data() {
    return {
      text: undefined
    };
  }
};
</script>

<style lang="scss"></style>
