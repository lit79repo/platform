<template>
  <div class="hello">
    <md-empty-state md-icon="school" md-label="Добро пожаловать" md-description="Выберете пункт из меню">
    </md-empty-state>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style scoped>
</style>
