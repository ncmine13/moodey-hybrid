<template>
  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header" class="glossy">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <div><img class="smile-logo" src="../../assets/smilez.png"/></div>
      </q-btn>
      <q-toolbar-title> Feeling Me <div slot="subtitle">Check in to yourself.</div>
      </q-toolbar-title>
    </q-toolbar>
    <div slot="left">
      <div>blahahahha</div>
    </div>
  </q-layout>
</template>

<script>
import { QLayout, dom, QToolbar, QToolbarTitle, QBtn } from 'quasar'

export default {
  name: 'Nav',
  data () {
    return {}
  },
  components: { QLayout, dom, QToolbar, QToolbarTitle, QBtn }
}
</script>

<style lang="sass-loader" scoped>
  @import '../../assets/styles/variables.scss';
  .q-toolbar {
    background-color: $red;
    color: $blue;
  }
</style>
