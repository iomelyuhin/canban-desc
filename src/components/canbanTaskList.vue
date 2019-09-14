<template lang="pug">
    li.canban__task-item
        .canban-task-item-wrap
            .canban-task-item-main-row
            .canban__task-item-id №{{task.id}}
            h3.canban-task-item-title {{task.title}}
            .canban-task-item-date-row  
            .canban__task-item-dateCreated Создано 21-11-19 22-15
            .canban__task-item-dateChanged Изменено 21-11-19 22-15
            .canban__task-item-description {{task.description}}
            .canban__task-item-comment {{task.comment}}
            .canban__task-item-controls
            canbanTaskBtns
</template>

<script>
export default {
    props: {
        task: Object
    },
    components: {
        canbanTaskBtns: () => import("./canbanTaskBtns.vue")
        
    },
    data() {
        return {

        }
    },
    methods: {

    }

    
}
</script>

<style lang="scss">

</style>