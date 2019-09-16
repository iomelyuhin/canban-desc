<template lang="pug">
    li.canban__item 
        h2.canban__item-title Нужно сделать
        ul.canban__task-list#todoItem(
            @dragstart="onDragStart"
        )
            canbanTaskList(
                v-for="task in todoTasks"
                :key="taskId"
                :task="task"
            )
            .canban__task-item-btns
                button(
                    @click="openAddTaskPopup"
                ).canban__task-item-btn.main-btn.btn--add-btn.active + Добавить задачу    
        
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      todoTasks: state => state.tasks.filter(task => task.status === "todo")
    })
  },
  components: {
    canbanTaskList: () => import("./canbanTaskList.vue")
  },
  methods: {
    ...mapMutations(["openAddPopup"]),
    openAddTaskPopup() {
      this.openAddPopup();
    },
    onDragStart(e) {
      e.dataTransfer.setData("elem", e.target.innerHTML);
    }
  }
};
</script>
