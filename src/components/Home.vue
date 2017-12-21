<template>
  <div>
    <nav-component></nav-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import navComponent from './partials/Nav'
import footerComponent from './partials/Footer'

export default {
  data () {
    return {}
  },
  components: {
    navComponent,
    footerComponent
  }
}
</script>

<style lang="sass-loader">
@import '../assets/styles/variables.scss';
.logo-container {
  width: 255px;
  height: 242px;
  perspective: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>