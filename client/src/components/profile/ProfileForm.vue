<template>
  <div class="form__wrapper">
    <form>
      <required-component v-bind:profileFields="profileFields"></required-component>
      <preferences-component v-bind:profileFields="profileFields"></preferences-component>
      <optional-component v-bind:profileFields="profileFields"></optional-component>
      <div class="flex-centered"><input type="submit" placeholder="submit" class="submit-btn"/></div>
    </form>
  </div>
</template>
<script>
import { QSelect } from 'quasar'
import profileFields from '../../data/profile-fields.json'
import preferencesComponent from './Preferences'
import requiredComponent from './Required'
import optionalComponent from './Optional'

export default {
  name: 'ProfileForm',
  data () {
    return {
      firstName: '',
      selectGender: '',
      selectEmployment: '',
      profileFields: profileFields,
      dob: 0
    }
  },
  computed: {
    required () {
      return this.profileFields.find(element => element.required)['required']
    },
    genderOptions () {
      return this.required.find(element => element.title === 'gender')['values']
    },
    employmentOptions () {
      return this.required.find(element => element.title === 'employment')['values']
    }
  },
  components: {
    QSelect,
    preferencesComponent,
    requiredComponent,
    optionalComponent
  }
}
</script>
<style lang="sass-loader" scoped>

</style>
