import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}
function loadSub (dir, component) {
  return () => import(`@/${dir}/${component}.vue`)
}

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/register', component: load('Register') },
    { path: '/login', component: load('Login') },
    { path: '/profile/:id',
      component: loadSub('profile', 'ProfileWrapper')
    },
    {
      path: '/home/:id',
      component: load('Home'),
      children: [
        {
          path: 'check',
          component: load('Check')
        },
        {
          path: 'preferences',
          component: load('Preferences')
        },
        {
          path: 'trends',
          component: load('Trends')
        }
      ]
    },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
/*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
