<template>
  <div class="footer-wrapper glossy">
    <div v-html="message"></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      message: '&#169 product of naomi'
    }
  }
}
</script>

<style lang="sass-loader">
@import '../../assets/styles/variables.scss';
  .footer-wrapper {
    position: fixed;
    bottom: 0px;
    left: 0;
    width: 100%;
    font-size: 10px;
    padding: 10px 0;
    text-align: center;
    background-color: $red;
    color: $yellow;
  }
</style>