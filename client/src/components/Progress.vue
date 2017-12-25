<template>
  <div class="progress-wrapper">
    <div><img src="../assets/progress.jpg"/></div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  data () {
    return {
      msg: 'progress meter/calendar'
    }
  }
}
</script>

<style lang="sass-loader">
  @import '../assets/styles/variables.scss';
  .progress-wrapper {
    & > div {
      img {
        width: 100%;
      }
    }
  }
</style>
