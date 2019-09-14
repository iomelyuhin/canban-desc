<template lang="pug">
    .editPopup 
        .editPopup__wrap
          button(
            type=button
          ).editPopup__close-btn x
          h2.editPopup__title Добавить задание
          .editPopup-editzone
            input(
              type="text" 
              placeholder="Заголовок задания"
            ).editPopup__edit-title
            textarea(
              rows="4"
              placeholder="Описание к заданию"
            ).editPopup__edit-description desc
            textarea.editPopup__edit-comment comment
          .editPopup__btns
            button(
              type="button"
            ).main-btn.editPopup__apply Применить
            button(type="button").main-btn.editPopup__cancel Отменить
</template>

<script>
let uniqId = 3;
export default {
    props: {

    },
    computed: {

    },
    data() {
      return {

      }
    },
    methods: {

    },

}
</script>