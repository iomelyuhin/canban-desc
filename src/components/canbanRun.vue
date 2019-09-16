<template lang="pug">
    li.canban__item#overRunTasks(
      @dragover.prevent="ondragOver"
      @dragleave="ondragLeave"
      @drop="onDrop"
    )
        h2.canban__item-title В работе
        ul.canban__task-list
            canbanTaskList(
                v-for="task in runTasks"
                :key="taskId"
                :task="task"
            )
        
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    canbanTaskList: () => import("./canbanTaskList.vue")
  },
  computed: {
    ...mapState({
      runTasks: state => state.tasks.filter(task => task.status === "run")
    })
  },
  methods: {
    ondragOver() {
      const dragoverRun = document.querySelector("#overRunTasks");
      dragoverRun.classList.add("active");
    },
    ondragLeave() {
      const dragoverRun = document.querySelector("#overRunTasks");
      dragoverRun.classList.remove("active");
    },
    onDrop() {
      const dragoverRun = document.querySelector("#overRunTasks");
      dragoverRun.classList.remove("active");
    }
  }
};
</script>
