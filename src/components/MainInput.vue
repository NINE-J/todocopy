<template>
  <div class="main-input w-full border-b">
    <div class="w-full flex items-center p-4 bg-white">
      <b-icon class="text-gray-200 w-6 h-6 mr-4" icon="chevron-down"></b-icon>
      <input
        class="h-8 flex-grow"
        type="text"
        placeholder="오늘의 할 일은?"
        v-model="text"
      />
    </div>
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

<style lang="scss" scoped>
input {
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
