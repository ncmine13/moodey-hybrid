<template>
  <div class="registration__wrapper">
    <h1>Register</h1>
    <input class="input-styles" type="email" name="email" placeholder="email" v-model="email"/>
    <input class="input-styles" type="password" name="password" placeholder="password" v-model="password"/>
    <!-- <button class="input-styles" v-on:click="register()">Register</button> -->
    <div class="error" v-html="error"></div>
  </div>
</template>

<script>
// import AuthenticationService from "../services/AuthenticationService";
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../assets/styles/variables.scss';
.registration {
  &__wrapper {
    background-color: white;
    color: $purple;
    padding: 20px;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .input-styles {
      width: 85%;
      font-size: 14px;
      border-radius: 2px;
      font-weight: 500;
    }
    h1 {
      margin-bottom: 0;
    }
    input {
      border: none;
      border-bottom: 1px solid $purple;
      margin: 20px 5px;
      text-align: center;
      color: $gray;
    }
    button {
      border: none;
      padding: 10px 5px;
      background-color: $red;
      margin: 10px 0;
      color: white;
      box-shadow: 1px 1px 5px $shadow;
    }
    .error {
      color: $red;
      font-size: 12px;
    }
  }
}
</style>