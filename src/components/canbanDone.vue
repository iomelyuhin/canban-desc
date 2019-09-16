<template lang="pug">
    li.canban__item 
        h2.canban__item-title Сделано
        ul.canban__task-list
            canbanTaskList(
                v-for="task in doneTasks"
                :key="taskId"
                :task="task"
            )
        .canban__task-item-btns
            button.canban__task-item-btn.main-btn.btn--add-btn.active + Добавить задачу    
        
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
      doneTasks: state => state.tasks.filter(task => task.status === "done")
    })
  }
};
</script>
