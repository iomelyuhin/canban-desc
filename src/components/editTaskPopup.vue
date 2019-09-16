<template lang="pug">
    .editPopup(:class="{'active' : editMode}")
      .editPopup__wrap
        button(
          @click="closePopup"
          type=button
        ).editPopup__close-btn x
        h2.editPopup__title Добавить задание
        .editPopup-editzone
          input(
            type="text" 
            placeholder="Заголовок задания"
            v-model="currentTask.title"
          ).editPopup__edit-title
          textarea(
            rows="4"
            placeholder="Описание к заданию"
            v-model="currentTask.description"

          ).editPopup__edit-description {{currentTask.description}}
          textarea.editPopup__edit-comment(
            v-model="currentTask.comment"
            placeholder="Оставьте комментарий"
          ) {{currentTask.comment}}
        .editPopup__btns
          button(
            @click="applyTask"
            type="button"
          ).main-btn.editPopup__apply Применить
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      editedTask: {}
    };
  },
  props: {},
  computed: {
    ...mapState({
      editMode: state => state.isOpenEditPopup,
      currentTask: state => state.currentTask
    })
  },
  methods: {
    ...mapMutations(["closeEditPopup"]),
    closePopup() {
      this.closeEditPopup();
    },
    applyTask() {
      this.closeEditPopup();
    }
  },
  created() {}
};
</script>
