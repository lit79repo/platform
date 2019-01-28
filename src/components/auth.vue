<template>
  <!-- div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Створення Аккаунта</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">Ім'я</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.firstName.required">Ім'я потрібно для створення аккаунта.</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Ім'я некорректне</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Фамілія</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.lastName.required">Фамілія потрібна для створення аккаунта.</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Не достатньо символів.</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('gender')">
                <label for="gender">Класс</label>
                <md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="sending">
                  <md-option></md-option>
                </md-select>
                <span class="md-error">Класс потрібен для створення Аккаунта.</span>
              </md-field>
            </div>
          </div>

          <md-field :class="getValidationClass('email')">
            <label for="email">Пошта</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">Пошта Потрібна для створення аккаунта.</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Пошта не корректно введена.</span>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
  </div-->
   <md-steppers md-vertical>
   	<form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-step id="first" md-label="Фамілія та Ім'я" :md-done.sync="first">
 		<div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">Ім'я</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.firstName.required">Ім'я потрібно для створення аккаунта.</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Ім'я некорректне</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Фамілія</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.lastName.required">Фамілія потрібна для створення аккаунта.</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Не достатньо символів.</span>
              </md-field>
            </div>
          </div>
      </md-step>

      <md-step id="second" md-label="Класс" :md-done.sync="second">
      		<div class="md-layout md-gutter">
            	<div class="md-layout-item md-small-size-100">
              	<md-field :class="getValidationClass('classs')">
                	<label for="classs">Класс</label>
                	<md-select name="classs" id="classs" v-model="form.classs" md-dense :disabled="sending">
                  <md-option></md-option>
                </md-select>
                <span class="md-error">Класс потрібен для створення Аккаунта.</span>
              </md-field>
            </div>
          </div>
      </md-step>

      <md-step id="third" md-label="Пошта та Пароль">
            <md-field :class="getValidationClass('email')">
            <label for="email">Пошта</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">Пошта Потрібна для створення аккаунта.</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Пошта не корректно введена.</span>
          </md-field>
            <md-field :class="getValidationClass('email')">
            <label for="email">Пароль</label>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">Парль Потрібен для створення аккаунта.</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Пароль не корректно введен.</span>
          </md-field>
      </md-step>
  	</form>
  </md-steppers>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        classs: null,
        email: null,
        password: null
      },
      active: 'first',
      first: false,
      second: false,
      third: false,
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      },
      setDone (id, index) {
        this[id] = true

        this.secondStepError = null
        document.querySelector("#"+ index).click();
        if (index) {
          this.active = index
        }
        console.log(id, index);
      },
      setError () {
        this.secondStepError = 'This is an error!'
      }
  }
};
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>