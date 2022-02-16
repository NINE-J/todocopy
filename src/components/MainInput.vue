<template>
  <div class="main-input w-full border-b">
    <div class="w-full flex items-center p-4 bg-white">
      <b-icon class="text-gray-200 w-6 h-6 mr-4" icon="chevron-down"></b-icon>
      <input
        class="h-8 flex-grow"
        type="text"
        placeholder="오늘의 할 일은?"
        v-model="text"
        @keydown.enter="addTodo"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'MainInput',
  watch: {
    todos: {
      deep: true,
      handler() {
        localStorage.setItem('todosBackup', JSON.stringify(this.todos));
      }
    }
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    newId() {
      if (this.todos.length == 0) return 0;
      const maxId = this.todos[this.todos.length - 1].id;
      return maxId + 1;
    },
    addTodo() {
      this.$store.commit('addTodo', {
        id: this.newId(),
        text: this.text,
        completed: false
      });
      this.text = undefined;
    }
  },
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
