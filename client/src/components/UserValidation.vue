<template>
  <div class="user-validation__wrapper">
    <h1> {{ headerTxt }} </h1>
    <div><input class="input-styles" type="email" name="email" placeholder="email" v-model="email"/></div>
    <div><input class="input-styles" type="password" name="password" placeholder="password" v-model="password"/></div>
    <div>
      <button class="input-styles" v-on:click="logInOrRegister()">{{ btnTxt }}</button>
      <button class="input-styles" @click="swap()"> {{ swapTxt }} </button>
    </div>
    <div class="error" v-html="error"></div>
  </div>
</template>

<script>
export default {
  name: 'UserValidation',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  computed: {
    page () {
      //  careful of when hashchange listening occurs
      return window.location.hash.includes('register') ? 'Register' : 'Login'
    },
    btnTxt () {
      return this.page === 'Register' ? 'Register' : 'Log in'
    },
    headerTxt () {
      return this.page === 'Register' ? 'Sign up for your account.' : 'Log in to your account.'
    },
    swapTxt () {
      return this.page === 'Register' ? 'Have an account? Log in.' : 'Need an account? Register.'
    }
  },
  methods: {
    logInOrRegister () {
      console.log('lol')
    },
    swap () {
      // reroute depending on view
    }
  }
}
</script>

<style lang="sass-loader" scoped>
  @import '../assets/styles/variables.scss';
  .user-validation {
    &__wrapper {
      width: 80%;
      margin: 0 10%;
      color: $purple;
    }
  }
  h1 {
    font-size: 30px;
  }
  .input-styles {
    width: 100%;
    font-size: 14px;
    border-radius: 2px;
    font-weight: 500;
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
</style>
