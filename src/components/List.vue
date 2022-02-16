<template>
  <div class="list-container w-full">
    <ul class="w-full">
      <li
        class="flex items-center p-4 bg-white border-b border-gray-100"
        v-for="todo in todos"
        :key="todo.id"
      >
        <b-icon
          v-if="!todo.completed"
          class="text-gray-200 w-6 h-6 mr-4 cursor-pointer"
          icon="check-square"
          @click="toggleState(todo)"
        ></b-icon>
        <b-icon
          v-else
          class="text-gray-600 w-6 h-6 mr-4 cursor-pointer"
          icon="check-square-fill"
          @click="toggleState(todo)"
        ></b-icon>
        <span class="mr-auto">{{ todo.text }}</span>
        <b-icon
          class="ml-4 text-gray-400"
          icon="trash"
          @click="removeTodo(todo)"
        ></b-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'List',
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    toggleState(todo) {
      this.$store.commit('toggleState', todo);
    },
    removeTodo(todo) {
      this.$store.commit('removeTodo', todo);
    }
  },
  mounted() {
    const backup = localStorage.getItem('todosBackup');
    if (backup) this.$store.commit('fetchTodos', JSON.parse(backup));
  }
};
</script>
