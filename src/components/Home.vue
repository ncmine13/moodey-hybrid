<template>
  <q-layout ref="layout" view="hHr LpR lFf">
    <!-- header on every page -->
    <q-toolbar slot="header">
      <div><img class="smile-logo pointer" src="../assets/smilez.png"/></div>
      <q-toolbar-title> {{ header }}</q-toolbar-title>
    </q-toolbar>
    <!-- appropriate view to be rendered -->
    <router-view />

    <!-- footer on every page -->
    <q-tabs color="tabs" position="bottom" slot="navigation">
      <q-route-tab name="check-in" to="/home/check" slot="title">check</q-route-tab>
      <q-route-tab name="preferences" to="/home/preferences" slot="title">pref</q-route-tab>
      <q-route-tab name="trends" to="/home/trends" slot="title">trends</q-route-tab>
    </q-tabs>
  </q-layout>
</template>

<script>
import { QLayout, QToolbar, QRouteTab, QTabs, QToolbarTitle } from 'quasar'
export default {
  name: 'Home',
  data () {
    return {
      header: 'Feeling Me.'
    }
  },
  components: {
    QLayout, QToolbar, QRouteTab, QTabs, QToolbarTitle
  }
}
</script>

<style lang="sass-loader">
@import '../assets/styles/variables.scss';
.logo-container {
  width: 255px;
  height: 242px;
  perspective: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.q-toolbar {
  font-weight: 500;
  background-color: $red;
  .q-toolbar-title {
    letter-spacing: 1.1px;
    text-align: right;
  }
}
.smile-logo {
  max-width: 30px;
  height: auto;
}
.q-tabs {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>