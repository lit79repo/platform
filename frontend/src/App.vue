<template>
  <div id="app">
    <router-view/>
    <md-bottom-bar md-type="shift" :md-theme="'bottom-bar-' + theme">
      <md-bottom-bar-item
        md-label="Расписание"
        md-icon="list"
        @click="theme = 'teal'; goto('/lessons')"
      ></md-bottom-bar-item>
      <md-bottom-bar-item
        md-label="Домашнее Задание"
        md-icon="pages"
        @click="theme = 'orange'; goto('/homework')"
      ></md-bottom-bar-item>
      <md-bottom-bar-item md-label="Блог" md-icon="comment" @click="theme = 'red'; ; goto('/blog')"></md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      theme: "teal"
    };
  },
  methods: {
    goto: to => {
      location.href = "#" + to;
    }
  }
};
</script>

<style>
#app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.md-bottom-bar {
  position: absolute;
  bottom: 0;
}
</style>
