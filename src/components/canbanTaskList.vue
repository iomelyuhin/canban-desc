<template lang="pug">
    li.canban__task-item
        .canban-task-item-wrap
            .canban-task-item-main-row
            .canban__task-item-id №id
            h3.canban-task-item-title title
            .canban-task-item-date-row  
            .canban__task-item-dateCreated Создано 21-11-19 22-15
            .canban__task-item-dateChanged Изменено 21-11-19 22-15
            .canban__task-item-description description
            .canban__task-item-comment comment
            .canban__task-item-controls
            canbanTaskBtns
</template>

<script>
export default {
    props: {
        
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