<template>
  <div class="auth">
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-card mode="ios" color="dark">
            <ion-card-header>
              <ion-card-subtitle>Лицей №79</ion-card-subtitle>
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
