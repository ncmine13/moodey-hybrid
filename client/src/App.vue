<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <home-component></home-component>
  </div>
</template>

<script>
import homeComponent from './components/Home'
/*
 * Root component
 */
export default {
  components: {
    homeComponent
  }
}
</script>

<style lang="sass-loader">
@import './assets/styles/variables.scss';
body {
  font-family: 'Raleway', sans-serif;
}
.pointer {
  cursor: pointer;
}
.bg-tabs {
  background-color: $red;
}
.text-header {
  color: $beige;
  font-size: 20px;
  font-weight: 500;
  padding: $spacer * 0.5 0;
}
.site-width {
  padding: 0 $spacer * 0.75;
}

</style>
