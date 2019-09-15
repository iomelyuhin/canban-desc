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
        }
    },
    components: {
        canbanTaskList: () => import("./canbanTaskList.vue")
    },
    computed: {
        ...mapState({
            runTasks: state => state.tasks.filter(task => task.status === "run"),
        })
    }
    
}
</script>

<style lang="scss" scoped>

</style>