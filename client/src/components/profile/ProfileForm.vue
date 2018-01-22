<template>
  <div class="form__wrapper">
    <required-component :firstName.sync="required.firstName" :dob.sync="required.dob" :gender.sync="required.genderSelection" :employment.sync="required.employmentSelection"></required-component>
    <!-- <preferences-component v-bind:profileFields="profileFields"></preferences-component> -->
    <!-- <optional-component v-bind:profileFields="profileFields"></optional-component> -->
    <div class="flex-centered"><input type="submit" placeholder="submit" class="submit-btn" @click="submitUserPrefs()" /></div>
  </div>
</template>

<script>
import { QSelect } from 'quasar'
// import PreferencesService from '../../services/PreferencesService'
// import preferencesComponent from './Preferences'
import requiredComponent from './Required'
// import optionalComponent from './Optional'

export default {
  name: 'ProfileForm',
  data () {
    return {
      required: {
        firstName: '',
        dob: '',
        genderSelection: [],
        employmentSelection: []
      }
    }
  },
  methods: {
    async submitUserPrefs () {
      try {
        // await PreferencesService.submitUserPrefs({

        // })
        this.$router.push('/home/' + this.$store.state.kebab + '/check')
      }
      catch (err) {

      }
    }
  },
  components: {
    QSelect,
    // preferencesComponent,
    requiredComponent
    // optionalComponent
  }
}
</script>
<style lang="sass-loader" scoped>
  .submit-btn {
    margin-top: 40px;
  }

</style>
