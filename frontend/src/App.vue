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
