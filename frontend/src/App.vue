<template>
  <div id="app">
    <ion-app>
      <ion-page class="show-page">
        <ion-content class="content" padding>
          <router-view/>
        </ion-content>
      </ion-page>
    </ion-app>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css?family=PT+Mono");
* {
  font-family: "PT Mono", monospace;
}
</style>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
