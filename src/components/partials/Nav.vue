<template>
  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header" class="rounded">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <div><img class="smile-logo pointer" src="../../assets/smilez.png"/></div>
      </q-btn>
      <q-toolbar-title> {{header}}</q-toolbar-title>
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
    return {
      header: 'Feeling Me.'
    }
  },
  components: { QLayout, dom, QToolbar, QToolbarTitle, QBtn }
}
</script>

<style lang="sass-loader" scoped>
  @import '../../assets/styles/variables.scss';
  .q-toolbar {
    font-weight: 500;
    background-color: $red;
    color: $yellow;
    .q-toolbar-title {
      letter-spacing: 1.1px;
      text-align: right;
    }
  }
  .smile-logo {
    max-width: 30px;
    height: auto;
  }
</style>
