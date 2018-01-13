<template>
  <div class="profile__wrapper">
    <h2> Let us know a little about you. </h2>
    <!--conditional: if this is being redirected from register i.e. new user, render profile form-->
    <profile-form></profile-form>
    <!-- otherwise, render a version with only the editable content -->
  </div>
</template>
<script>
import profileForm from './ProfileForm'
export default {
  name: 'ProfileWrapper',
  components: {
    profileForm
  }
}
</script>
<style lang="sass-loader" scoped>
/* @import '../assets/styles/variables.scss'; */

</style>
