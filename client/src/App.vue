<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass-loader">
@import './assets/styles/variables.scss';
body {
  font-family: 'Raleway', sans-serif;
  textarea:focus, input:focus {
    outline: none;
  }
}
.pointer {
  cursor: pointer;
}
.bg-tabs {
  background-color: $blue;
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
