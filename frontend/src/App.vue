<template>
  <div id="app" class="page-container">
    <md-app class="fullpage" md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Ліцей №79</span>
      </md-app-toolbar >
       <md-app-drawer :md-active.sync="menuVisible">
        <md-list>
          <md-list-item>
            <md-icon>view_quilt</md-icon>
            <span class="md-list-item-text">Розклад</span>
          </md-list-item>

          <md-list-item>
            <md-icon>assignment</md-icon>
            <span class="md-list-item-text">Д.З.</span>
          </md-list-item>

          <router-link to="/disk" @click="menuVisible != menuVisible">
          <md-list-item>
            <md-icon>save_alt</md-icon>
            <span class="md-list-item-text">Диск</span>
          </md-list-item>
          </router-link>
          <md-list-item>
            <md-icon>account_balance</md-icon>
            <span class="md-list-item-text">Для Вчителя</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
      menuVisible: false
    };
  }
};
</script>

<style>
body {
  margin: 0;
}

#app, .fullpage {
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
}
*{
  font-family: 'Comfortaa', cursive;
}

</style>
