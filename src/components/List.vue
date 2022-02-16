<template>
  <div class="list-container w-full">
    <ul class="w-full">
      <li
        class="flex items-center p-4 bg-white border-b border-gray-100"
        v-for="todo in filteredTodos"
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
        <span
          class="mr-auto"
          :class="{ 'line-through text-gray-400': todo.completed }"
          >{{ todo.text }}</span
        >
        <b-icon
          class="ml-4 text-gray-400"
          icon="trash"
          @click="removeTodo(todo)"
        ></b-icon>
      </li>
    </ul>
    <div class="p-4 bg-white flex items-center justify-between">
      <span class="text-sm">{{ activeItemsNum }} items left</span>
      <div>
        <span
          class="text-sm p-2 mr-2 rounded-md border border-gray-100 cursor-pointer"
          :class="{ 'border-red-300': filter == 'all' }"
          @click="toggleFilter('all')"
          >All</span
        >
        <span
          class="text-sm p-2 mr-2 rounded-md border border-gray-100 cursor-pointer"
          :class="{ 'border-red-300': filter == 'active' }"
          @click="toggleFilter('active')"
          >Active</span
        >
        <span
          class="text-sm p-2 rounded-md border border-gray-100 cursor-pointer"
          :class="{ 'border-red-300': filter == 'completed' }"
          @click="toggleFilter('completed')"
          >Completed</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'List',
  computed: {
    ...mapState(['todos']),
    filteredTodos() {
      return this.filter == 'active'
        ? this.todos.filter((el) => !el.completed)
        : this.filter == 'completed'
        ? this.todos.filter((el) => el.completed)
        : this.todos;
    },
    activeItemsNum() {
      return this.todos.filter((el) => !el.completed).length;
    }
  },
  methods: {
    toggleState(todo) {
      this.$store.commit('toggleState', todo);
    },
    removeTodo(todo) {
      this.$store.commit('removeTodo', todo);
    },
    toggleFilter(state) {
      this.filter = state;
    }
  },
  data() {
    return {
      filter: 'all'
    };
  },
  mounted() {
    const backup = localStorage.getItem('todosBackup');
    if (backup) this.$store.commit('fetchTodos', JSON.parse(backup));
  }
};
</script>
