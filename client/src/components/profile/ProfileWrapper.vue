<template>
  <div class="profile__wrapper">
    <div class="profile__img flex-centered"> <img src="../../assets/smile2.png"/> </div>
    <h1> Let us know a little about you. </h1>
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
<style lang="sass-loader">
  @import '../../assets/styles/main.scss';
  .profile {
    &__wrapper {
      padding: $spacer;
      margin: $spacer * 0.5 0;
      color: $gray;
      p {
        padding: $spacer * 0.75 0;
      }
    }
    &__img {
      margin: $spacer 0 $spacer * 2 0;
      img {
        width: 50px;
      }
    }
    h1 {
      margin: $spacer 0;
    }
  }
</style>
