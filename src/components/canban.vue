<template lang="pug">
    .maincontent
        .canban
          .container.container--canban
            h1.canban__title Канбан доска
            ul.canban__list
              canbanTodo(
                  :tasks="tasks"
              )
              canbanRun
              canbanDone
              
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            
        }
    },
    props: {
    },
    components: {
        canbanTodo: () => import("./canbanTodo.vue"),
        canbanRun:() => import("./canbanRun.vue"),
        canbanDone: () => import("./canbanDone.vue")
    },
    computed: {
        ...mapState({
            tasks: state => state.tasks
        })
    },
    created() {
        this.fetchTasks();
    },
    methods: {
        ...mapActions(['fetchTasks'])
    }
    
}
</script>
<style lang="scss">
.canban {
    background-color: darkslategrey;
    min-height: 100vh;
}

.container--canban {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.canban__title {
    text-transform: uppercase;
    font-weight: 800;
    color: whitesmoke;
    margin: 20px;
}
.canban__list {
    display: flex;
    width: 100%;
    justify-content: space-around;
}
.canban__item {
    width: 33%;
    justify-content: space-between;
    background: whitesmoke;
}
.canban__item-title {
    background: whitesmoke;
    text-transform: uppercase;
    text-align: center;
    font-weight: 900;
    padding-top: 10px;
}
.canban__task-list {
    background: whitesmoke;
}
.canban__task-item {
    padding: 10px;
}
.canban-task-item-wrap {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
.canban-task-item-main-row {
    display: flex;
}
.canban__task-item-id {
    font-weight: bold;
    font-size: 20px;
}
.canban-task-item-title {
    text-transform: uppercase;
    margin-left: 10px;
    font-size: 20px;
    font-weight: bold;
}
.canban-task-item-date-row {
    margin-top: 5px;
    font-size: 12px;
    font-style: italic;
}
.canban__task-item-description {
    margin-top: 5px;
}
.canban__task-item-comment {
    margin-top: 5px;
    background-color: lavender;
    padding: 10px;
    border-radius: 10px 10px 10px 0;
}
.canban__task-item-controls {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
}

.canban__task-item-btns {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
}
.main-btn {
    margin: 5px;
    padding: 10px;
    background-color: transparent;
    border-radius: 20px;
    border: 2px solid darkslategrey;
    transition: border-color 0.3s, color 0.3s;
    &:hover {
        border: 2px solid rgba(#2f4f4f, .2);
        color: rgba(#2f4f4f, .2);
        transition: border-color 0.3s, color 0.3s;
    }
    &.disabled {
        border: 2px solid rgba(#2f4f4f, .2);
        color: rgba(#2f4f4f, .2);
    }
}
.btn--edit-btn {
    display: none;
    &.active {
        display: block;
    }
}    
.btn--delete-btn {
    display: none;
    &.active {
        display: block;
    }
}
.btn--add-btn {
    display: none;
    &.active {
        display: block;
    }
}

.editPopup {
    opacity: 0;
    left: -100%;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(#2f4f4f, .5);
    transition: opacity .3s;
    .editPopup__wrap {
        display: none;
    }
    &.active {
        opacity: 1;
        left: 0;
        transition: opacity .3s;
        .editPopup__wrap {
            display: block;
        }
    }
}
.editPopup__wrap {
    position: fixed;
    width: 40%;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 50px;
}

.editPopup__close-btn {
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    font-size: 18px;
    font-weight: 600;
}

.editPopup-editzone {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}
.editPopup__edit-title {
    border: none;
    border-bottom: 2px solid darkslategrey;
    margin-bottom: 5px;
    padding: 5px;
    font-weight: bold;
    text-transform: uppercase;
}
.editPopup__edit-description {
    border: 2px solid darkslategrey;
    margin-bottom: 5px;
    padding: 5px;
    margin-top: 5px;
    resize: none;
    height: 100px;
}
.editPopup__edit-comment {
    border: none;
    height: 100px;
    border-radius: 10px 10px 10px 0;
    background-color: whitesmoke;
    resize: none;
    padding: 5px;
    margin-top: 5px;
}
.editPopup__btns {
    margin-top: 5px;
}
</style>
