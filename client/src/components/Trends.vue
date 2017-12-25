<template>
  <div class="site-width">
    <div class="text-header">  {{ headerTxt }} </div>
    <div> {{ msg }} </div>
  </div>
</template>

<script>
export default {
  name: 'Trends',
  data () {
    return {
      headerTxt: 'Your trends.',
      msg: 'After a month of checking in 95% of the days, you can view your data.'
    }
  },
  components: {}
}
</script>

<style lang="sass" scoped>

</style>
