<template>
  <ion-nav>
    <nav-home class="ion-page" style="z-index: 99;">
      <ion-header
        translucent
        mode="ios"
        class="header header-ios header-translucent header-translucent-ios hydrated"
      >
        <ion-toolbar class="hydrated">
          <ion-title class="title-ios hydrated" style>Лицей 79</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content
        mode="ios"
        fullscreen
        class="hydrated"
        style="--offset-top:64px; --offset-bottom:0px;"
      >
        <ion-list class="list list-ios hydrated">
          <ion-item
            button
            @click="goto('lessons')"
            class="in-list item ion-activatable ion-focusable item-label hydrated"
          >
            <ion-icon slot="start" name="list" mode="ios" role="img" class="hydrated"></ion-icon>
            <ion-label class="sc-ion-label-ios-h sc-ion-label-ios-s hydrated">
              <h3>Расписание Уроков</h3>
            </ion-label>
          </ion-item>
          <ion-item
            button
            @click="goto('files')"
            class="in-list item ion-activatable ion-focusable item-label hydrated"
          >
            <ion-icon slot="start" name="cloud-circle" mode="ios" role="img" class="hydrated"></ion-icon>
            <ion-label class="sc-ion-label-ios-h sc-ion-label-ios-s hydrated">
              <h3>Файлы</h3>
            </ion-label>
          </ion-item>
          <ion-item
            button
            @click="goto('news')"
            class="in-list item ion-activatable ion-focusable item-label hydrated"
          >
            <ion-icon slot="start" name="barcode" mode="ios" role="img" class="hydrated"></ion-icon>
            <ion-label class="sc-ion-label-ios-h sc-ion-label-ios-s hydrated">
              <h3>Новости</h3>
            </ion-label>
          </ion-item>
          <ion-item
            button
            @click="goto('homework')"
            class="in-list item ion-activatable ion-focusable item-label hydrated"
          >
            <ion-icon
              slot="start"
              name="checkmark-circle-outline"
              mode="ios"
              role="img"
              class="hydrated"
            ></ion-icon>
            <ion-label class="sc-ion-label-ios-h sc-ion-label-ios-s hydrated">
              <h3>Домашнее Задание</h3>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </nav-home>
  </ion-nav>
</template>
<script>
export default {
  methods: {
    goto: to => {
      location.href = "#/" + to;
    }
  }
};
</script>
