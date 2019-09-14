<template lang="pug">
    .editPopup(
      :class="{'active' : isOpenPopup}"
    )        
        .editPopup__wrap
          button(
            @click="closePopup"
            type=button
          ).editPopup__close-btn x
          h2.editPopup__title Добавить задание
          .editPopup-editzone
            input(
              v-model="task.title"
              type="text" 
              placeholder="Заголовок задания"
            ).editPopup__edit-title
            textarea(
              v-model="task.description"
              rows="4"
              placeholder="Описание к заданию"
            ).editPopup__edit-description
            //- textarea.editPopup__edit-comment Комментарий к заданию 1
          .editPopup__btns
            button(
              @click="addNewTask"
              type="button"
            ).main-btn.editPopup__apply Применить
            button(
              @click="cancel"
              type="button"
            ).main-btn.editPopup__cancel Отменить
</template>

<script>
import { mapMutations } from "vuex";
let uniqId = 3;
export default {
    props: {
        isOpenPopup: Boolean,
        tasks: Array
    },
    data() {
      return {
        task: {
          id: "0",
          title: "",
          description: "",
          status: "todo",
          comment: ""
        }
      }
    },
    methods: {
      ...mapMutations(["addTask", "closeAddPopup"]),
      closePopup() {
        this.closeAddPopup();
        // this.$emit('closePopup');
      },
      addNewTask(){
        uniqId++;
        this.task.id = uniqId;
        this.addTask({...this.task});
        this.task.title = "";
        this.task.description = "";
        this.closePopup();
      },
      cancel() {
        this.task.title = "";
        this.task.description = "";
        this.closePopup();

      }
    }
}
</script>