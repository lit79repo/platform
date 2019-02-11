<template>
  <div id="app">
    <ion-list>
      <ion-list-header>Настройки</ion-list-header>
      <ion-item>
        <ion-label>Сегмент</ion-label>
        <ion-select multiple="true">
          <ion-select-option value="lessons" selected>Расписание</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label>Класс</ion-label>
        <ion-select multiple="true" cancel-text="Nah" ok-text="Okay!">
          <ion-input></ion-input>
        </ion-select>
      </ion-item>
    </ion-list>

    <vue-editor id="editor" useCustomImageHandler v-model="htmlForEditor"></vue-editor>
    <button @click="upload()">upload</button>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
import axios from "axios";
export default {
  components: {
    VueEditor
  },

  data() {
    return {
      htmlForEditor: ""
    };
  },

  methods: {
    upload: function(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      let data = this.htmlForEditor;
      console.log(data);
      //formData.set(name, value, filename);
      formData.set(
        "data",
        JSON.stringify({
          data: data
        })
      );
      formData.set("segment", "lessons");
      axios({
        url: location.protocol + "//" + location.hostname + ":3000/db/dev",
        method: "POST",
        data: formData
      });
    }
  }
};
</script> 
