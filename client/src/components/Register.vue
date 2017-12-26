<template>
  <div class="registration__wrapper site-width">
    <h1>Sign up for your account.</h1>
    <form name="user-registration" autocomplete="off">
      <div><input class="input-styles" type="email" name="email" placeholder="email" v-model="email"/></div>
      <div><input class="input-styles" autocomplete="new-password" type="password" name="password" placeholder="password" v-model="password"/></div>
      <button class="input-styles" v-on:click="register()">Register.</button>
    </form>
    <button class="input-styles" @click="swap()"> Have an account? Log in. </button>
    <div class="error" v-html="error"></div>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      }
      catch (err) {
        this.error = err.response.data.error
      }
    },
    swap () {
      this.$router.push('login')
    }
  },
  components: {
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../assets/styles/variables.scss';
.registration {
  &__wrapper {
    color: $purple;
    width: 80%;
    margin: 0 10%;
    margin-top: 60px;
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