<template>
  <q-layout view="hHr LpR lFf">
    <!-- header on every page -->
    <q-toolbar slot="header">
      <div><img class="smile-logo pointer" src="../assets/smilez.png"/></div>
      <q-toolbar-title> {{ header }}</q-toolbar-title>
    </q-toolbar>
    <!-- appropriate view to be rendered -->
    <router-view />
    <!-- footer on every page -->
    <q-tabs color="tabs" slot="footer">
      <q-route-tab name="check-in" to="/home/check" slot="title"><q-icon name="check_circle"/></q-route-tab>
      <q-route-tab name="preferences" to="/home/preferences" slot="title"><q-icon name="star_border"/></q-route-tab>
      <q-route-tab name="trends" to="/home/trends" slot="title"><q-icon name="trending_up"/></q-route-tab>
    </q-tabs>
  </q-layout>
</template>

<script>
import { QLayout, QToolbar, QRouteTab, QTabs, QToolbarTitle, dom, QIcon } from 'quasar'
export default {
  name: 'Home',
  data () {
    return {
      header: 'Feeling Me.'
    }
  },
  components: {
    QLayout, QToolbar, QRouteTab, QTabs, QToolbarTitle, dom, QIcon
  }
}
</script>

<style lang="sass-loader">
@import '../assets/styles/variables.scss';
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
  .q-tab {
    font-weight: 800;
    .q-icon {
      font-size: 20px;
    }
  }
}
.router-link-exact-active {
  background-color: $blue;
  color: $purple;
}
</style>