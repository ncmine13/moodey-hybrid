<template>
  <div class="progress-wrapper">
    <div>{{ msg }}</div>
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
      width: 100%;
      height: 200px;
      background-color: $gray;
      color: white;
    }
  }
</style>
