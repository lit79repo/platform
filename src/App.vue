<template>
  <div id="app">
    <md-tabs class="md-primary" md-alignment="centered">
      <md-tab @click="goTo('#/main')"  md-icon="home"></md-tab>
      <md-tab @click="goTo('#/blogs')"   md-icon="pages"></md-tab>
      <md-tab @click="goTo('#/lessons')"   md-icon="list"></md-tab>
      <md-tab @click="goTo('#/l')"   md-icon="public"></md-tab>
    </md-tabs>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goTo: href => {
      location.href=href;
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
</style>
