import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, payload) {
      return state.todos.push(payload);
    },
    removeTodo(state, payload) {
      const target = state.todos.indexOf(payload);
      return state.todos.splice(target, 1);
    },
    toggleState(state, payload) {
      const target = state.todos.indexOf(payload);
      return (state.todos[target].completed = !state.todos[target].completed);
    },
    fetchTodos(state, payload) {
      console.log('fetch done');
      return (state.todos = payload);
    }
  },
  actions: {},
  modules: {}
});
