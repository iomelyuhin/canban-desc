<template lang="pug">
    li.canban__item 
        h2.canban__item-title Сделано
        canbanTaskList
        
</template>

<script>

export default {
    components: {
        canbanTaskList: () => import("./canbanTaskList.vue")
    },
    computed: {

    }
    
}
</script>

<style lang="scss" scoped>

</style>