<template>
  <div class="checkin-wrapper site-width">
    <div class="text-header">{{headerTxt}}</div>
    <progress-component></progress-component>
    <div class="check-in">
      <div class="subhead"> {{ ready }} </div>
      <div class="button">  {{ btnTxt }} </div>
    </div>
  </div>
</template>

<script>
import progressComponent from './Progress'
import {QBtn} from 'quasar'
export default {
  name: 'Check',
  data () {
    return {
      headerTxt: 'Keep up the good work.',
      ready: 'Ready to check in?',
      btnTxt: 'Let\'s go.'
    }
  },
  components: {
    progressComponent,
    QBtn
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../assets/styles/variables.scss';
.check-in {
  margin: $spacer*2 0;
  .subhead {
    font-weight: 500;
    color: $purple;
  }
}
.button {
  background-color: $blue;
  padding: $spacer * 0.5 $spacer;
  text-align: center;
  border-radius: 2px;
  margin: 20px 40px;
  box-shadow: 1px 1px 4px #b4abab;
  font-weight: 800;
}

</style>
