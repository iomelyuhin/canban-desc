<template lang="pug">
    div 
        button.canban__task-item-btn.main-btn.btn--edit-btn.active(
            @click="openEditPopup"
        ) Редактировать
        button(
            @click="removeCurrentTask"
        ).canban__task-item-btn.main-btn.btn--delete-btn.active Удалить
</template>
<script>
import { mapMutations } from "vuex";
export default {
    props: {
        task: Object
    },
    methods: {
        ...mapMutations(['openEditCurrentPopup', 'removeTask']),
        openEditPopup() {
            this.openEditCurrentPopup(this.task);
        },
        removeCurrentTask() {
            this.removeTask(this.task.id);
        }
    }
}
</script>