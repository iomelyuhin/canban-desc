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
  },
  actions: {
    fetchTasks({ commit }) {
      // const response = this.$axios.get("/tasks.json"); получить json с сервера
      const response = require("./data/tasks.json");
      commit("SET_TASKS", response);
      return response
    },
  }
});
