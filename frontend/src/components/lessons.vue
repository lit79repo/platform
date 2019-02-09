<template>
  <div class="homework">
    <div v-if="data !== null"></div>
    <div v-else>
      <ion-spinner name="crescent center"></ion-spinner>
    </div>
    <ion-toast-controller class="hydrated"></ion-toast-controller>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: null
    };
  },
  mounted() {
    axios
      .get(
        location.protocol +
          "//" +
          location.hostname +
          ":3000/db/dev?segment=lessonds"
      )
      .then(response => {
        this.data = JSON.parse(response.data.toString());
        console.log(response.data);
      });
  }
};
</script>
<style>
.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
