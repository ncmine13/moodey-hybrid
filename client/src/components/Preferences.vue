<template>
  <div class="site-width">
    <div class="text-header">  {{ headerTxt }} </div>
    <div :key="option.id" v-for="option in trackingOptions">
      <div class="toggle-wrapper"><q-toggle @click="toggleSelected(option.value)" v-model="selected" :val="option.value" left-label:true :label="option.label"></q-toggle></div>
    </div>
  </div>
</template>

<script>
import { QToggle } from 'quasar'
export default {
  name: 'Preferences',
  data () {
    return {
      headerTxt: 'Your account preferences.',
      selected: [],
      trackingOptions: [
        {value: 'weather', label: 'Weather'},
        {value: 'news', label: 'News headlines'},
        {value: 'menstruation', label: 'Period tracker'},
        {value: 'sex', label: 'Sexual activity'}
      ]
    }
  },
  methods: {
    toggleSelected (value) {
      // store in vuex, at end of session check if patch to user preferences needs to be made
    }
  },
  components: {
    QToggle
  }
}
</script>

<style lang="sass-loader" scoped>
  @import '../assets/styles/variables.scss';
  .toggle-wrapper {
    padding: $spacer 0;
  }
</style>
