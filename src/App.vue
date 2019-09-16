<template lang="pug">
  #app
    .wrapper
      canban
      editTaskPopup
      addTaskPopup

</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    canban: () => import("./components/canban"),
    addTaskPopup: () => import("./components/addTaskPopup"),
    editTaskPopup: () => import("./components/editTaskPopup")
  },
  computed: {
    // ...mapState({
    //   openPopup: state => state.isOpenPopup
    // })
  },
  methods: {}
};
</script>
<style lang="scss">
// layout
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

html {
  font-style: 18px;
}
body,
html {
  height: 100%;
}

body {
  font-family: "Open Sans", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.42;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  overflow: hidden;
  min-height: 100%;
  position: relative;
  background-color: darkslategrey;
}

.container {
  margin: 0 auto;
  max-width: 1480px;
  width: 95%;
}

.fullscreen-section {
  height: 100vh;
  min-height: 650px;
}

button {
  border: 0;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}

p {
  margin: 0;
  padding: 0;
}

button[type="button"] {
  cursor: pointer;
  background-color: transparent;
}

a {
  color: inherit;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}

//
</style>
