<template>
  <div class="auth">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-card mode="ios" color="dark">
            <ion-card-header>
              <ion-card-subtitle>Лицей 79</ion-card-subtitle>
              <ion-card-title>Авторизация</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <ion-item>
                <ion-label position="floating" placeholder="Код пользователя">Код ученика</ion-label>
                <ion-input v-model="code" type="password"></ion-input>
              </ion-item>
              <ion-button
                @click="goto('main')"
                mode="ios"
                expand="full"
                fill="outline"
                color="dark"
              >Далее</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>
        <br>
        <ion-row>
          <ion-col>made with
            <ion-icon name="heart"></ion-icon>using
            <ion-icon name="logo-javascript"></ion-icon>
          </ion-col>on
          <a href="https://github.com/lit79repo/platform" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <ion-icon name="logo-freebsd-devil"></ion-icon>
          <ion-icon name="logo-tux"></ion-icon>
        </ion-row>
      </ion-row>
    </ion-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: 1
    };
  },
  methods: {
    goto: to => {
      location.href = "#/" + to;
    }
  }
};
</script>
