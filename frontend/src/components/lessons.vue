<template>
  <div class="lessons">
    <md-progress-bar class="md-accent" v-if="loading" md-mode="query"></md-progress-bar>
    <md-card>
      <md-card-header>
        <div class="md-title">Расписание</div>
      </md-card-header>

      <md-card-content>
        <md-steppers md-vertical>
          <md-step
            v-if="errorGetData !== true"
            md-label="Выберете ваш класс"
            md-description="Из данного списка ниже:"
          ></md-step>
          <md-step v-else md-label="Ошибка Загрузки" md-description="Попробуйте чуть позже"></md-step>
          <md-step v-if="errorGetData !== true" v-for="day in data" :md-label="day.className">
            <md-list>Понедельник:
              <md-list-item v-for="lesson in day.lessons[0]">{{ lesson }}</md-list-item>
            </md-list>
            <md-list>Вторник:
              <md-list-item v-for="lesson in day.lessons[1]">{{ lesson }}</md-list-item>
            </md-list>
            <md-list>Среда:
              <md-list-item v-for="lesson in day.lessons[2]">{{ lesson }}</md-list-item>
            </md-list>
            <md-list>Четверг:
              <md-list-item v-for="lesson in day.lessons[3]">{{ lesson }}</md-list-item>
            </md-list>
            <md-list>Пятница:
              <md-list-item v-for="lesson in day.lessons[4]">{{ lesson }}</md-list-item>
            </md-list>
          </md-step>
        </md-steppers>
        <md-snackbar md-position="center" :md-active.sync="errorGetData" md-persistent>
          <span>Ошибка Загрузки</span>
        </md-snackbar>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Lessons",
  data() {
    return {
      errorGetData: false,
      url:
        location.protocol +
        "//" +
        location.hostname + //+ ":3000",
        (location.port ? ":" + location.port : ""),
      loading: true,
      data: [
        {
          className: "Загрузка",
          lessons: [
            [["11"], ["12"], ["13"], ["14"], ["15"], ["16"], ["17"]],
            [["21"], ["12"], ["13"], ["14"], ["15"], ["16"], ["17"]],
            [["31"], ["12"], ["13"], ["14"], ["15"], ["16"], ["17"]],
            [["41"], ["12"], ["13"], ["14"], ["15"], ["16"], ["17"]],
            [["51"], ["12"], ["13"], ["14"], ["15"], ["16"], ["17"]]
          ]
        }
      ]
    };
  },
  methods: {},
  mounted() {
    axios
      .get(this.url + "/db/get/lessons")
      .then(response => {
        this.data = response.data;
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
        this.errorGetData = true;
      });
  }
};
</script>
<style>
.md-snackbar {
  border-radius: 3px;
}
</style>
