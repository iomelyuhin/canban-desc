<template lang="pug">
    li.canban__item 
        h2.canban__item-title В работе
        ul.canban__task-list
            canbanTaskList(
                v-for="task in runTasks"
                :task="task"
            )
        .canban__task-item-btns
            button.canban__task-item-btn.main-btn.btn--add-btn.active + Добавить задачу    
        
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            runTasks: []
        }
    },
    components: {
        canbanTaskList: () => import("./canbanTaskList.vue")
    },
    computed: {
        ...mapState({
            tasks: state => state.tasks
        })
    },
    created() {
        this.runTasks = this.tasks.filter(task => task.status === "run");
    }
    
}
</script>

<style lang="scss" scoped>

</style>