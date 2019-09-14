<template lang="pug">
    li.canban__item 
        h2.canban__item-title Нужно сделать
        ul.canban__task-list
            canbanTaskList(
                v-for="task in todoTasks"
                :task="task"
            )
        .canban__task-item-btns
            button.canban__task-item-btn.main-btn.btn--add-btn.active + Добавить задачу    
        
</template>

<script>
import { mapState } from "vuex";
export default {
    props: {
    },
    data() {
        return {
            todoTasks: []
        }
    },
    computed: {
        ...mapState({
            tasks: state => state.tasks
        })
    },
    components: {
        canbanTaskList: () => import("./canbanTaskList.vue")
    },
    created() {
        this.todoTasks = this.tasks.filter(task => task.status === "todo");
    },
    methods: {
    }
    
}
</script>
