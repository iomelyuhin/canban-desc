<template lang="pug">
    li.canban__item 
        h2.canban__item-title Нужно сделать
        ul.canban__task-list
            canbanTaskList
        .canban__task-item-btns
            button.canban__task-item-btn.main-btn.btn--add-btn.active + Добавить задачу    
        
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    props: {
        tasks: Array
    },
    data() {
        return {

        }
    },
    computed: {
    },
    components: {
        canbanTaskList: () => import("./canbanTaskList.vue")
    },
    created() {
        
    },
    methods: {
    }
    
}
</script>
