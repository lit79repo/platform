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

    <vue-editor
      id="editor"
      useCustomImageHandler
      @imageAdded="handleImageAdded"
      v-model="htmlForEditor"
    ></vue-editor>
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
    handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData();
      formData.append("image", file);

      axios({
        url: location.protocol + "//" + location.hostname + ":3000/db/dev",
        method: "POST",
        data: formData
      })
        .then(result => {
          let url = result.data.url; // Get url from response
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script> 
