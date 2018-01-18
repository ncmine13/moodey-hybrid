<template>
  <div class="login__wrapper site-width">
    <h1>Login to your account.</h1>
    <div><input class="input-styles" type="email" name="email" placeholder="email" v-model="email"/></div>
    <div><input class="input-styles" type="password" name="password" placeholder="password" v-model="password"/></div>
    <button class="input-styles" v-on:click="login()">Login.</button>
    <button class="input-styles" @click="swap()"> Need an account? Register. </button>
    <div class="error" v-html="error"></div>
  </div>
</template>



<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        // call action to set token in state, allowing for loading of individual user's settings
        this.$store.dispatch('setUserInfo', response.data)
        this.$router.push('/home/' + response.data.user.id + '/check')
      }
      catch (err) {
        this.error = err.response.data.error
      }
    },
    swap () {
      this.$router.push('register')
    }
  },
  components: {
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../assets/styles/variables.scss';
.login {
  &__wrapper {
    color: $purple;
    max-width: 600px;
    margin: 60px auto;
    h1 {
      margin-bottom: 0;
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
  }
}
</style>