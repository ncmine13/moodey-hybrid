<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style lang="sass-loader">
@import './assets/styles/variables.scss';
body {
  font-family: 'Raleway', sans-serif;
}
.rounded {
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.01) 46%, rgba(0,0,0,0.2) 92%, rgba(0,0,0,0.02));
}
.pointer {
  cursor: pointer;
}
</style>
