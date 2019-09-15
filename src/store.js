import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    isOpenEditPopup: false,
    isOpenPopup: false,
    currentTask: {},
    

  },
  mutations: {
    SET_TASKS: (state, tasks) => (state.tasks = tasks),
    openEditCurrentPopup: (state, curretTask) => {
      state.isOpenEditPopup = true;
      state.currentTask = curretTask;
    },
    closeEditPopup: (state) => {
      state.isOpenEditPopup = false;
    },
    openAddPopup: (state) => {
      state.isOpenPopup = true;
      
    },
    closeAddPopup: (state) => {
      state.isOpenPopup = false;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(item => item.id !== taskId);
    },
  },
  actions: {
    fetchTasks({ commit }) {
      // const response = this.$axios.get("/tasks.json"); получить json с сервера
      const response = require("./data/tasks.json");
      commit("SET_TASKS", response);
      return response
    },
    fetchTodoTasks({ commit }) {
      // const response = this.$axios.get("/tasks.json"); получить json с сервера
      return commit("SET_TODO_TASKS");
       
    },
  }
});
