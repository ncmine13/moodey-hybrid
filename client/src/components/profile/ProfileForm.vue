<template>
  <div class="form__wrapper">
    <div class="warning" v-if="displayWarning"> {{ warning }} </div>
    <required-component :firstName.sync="required.firstName" :dob.sync="required.dob" :gender.sync="required.genderSelection" :employment.sync="required.employmentSelection" :profileFields="profileFields"></required-component>
    <preferences-component :profileFields="profileFields"></preferences-component>
    <optional-component :profileFields="profileFields" :education.sync="optional.education" :pets.sync="optional.pets" :meds.sync="optional.meds" :conditions.sync="optional.conditions" :occupation.sync="optional.occupation"></optional-component>
    <div class="flex-centered"><input type="submit" placeholder="submit" class="submit-btn" @click="submitUserInfo()" /></div>
  </div>
</template>

<script>
import { QSelect } from 'quasar'
import profileFields from '../../data/profile-fields'
import profileService from '../../services/UserProfileService'
import preferencesComponent from './Preferences'
import requiredComponent from './Required'
import optionalComponent from './Optional'

export default {
  name: 'ProfileForm',
  data () {
    return {
      required: {
        firstName: '',
        dob: '',
        genderSelection: '',
        employmentSelection: ''
      },
      optional: {
        education: '',
        pets: '',
        meds: '',
        conditions: '',
        occupation: ''
      },
      displayWarning: false,
      warning: 'Please fill out all required fields.',
      profileFields: profileFields,
      error: null
    }
  },
  computed: {
    selectedPreferences () {
      let prefs = this.profileFields.find(element => element.preferences)['preferences']
      return JSON.stringify(prefs.filter(pref => pref.selected).map(pref => pref.id))
    }
  },
  methods: {
    async submitUserInfo () {
      if (this.validateRequiredFields()) {
        let userInfo = {
          userId: this.$store.state.user.id,
          name: this.required.firstName,
          dob: this.required.dob,
          genderId: this.required.genderSelection,
          employment: this.required.employmentSelection,
          prefs: this.selectedPreferences,
          occupation: this.optional.occupation,
          education: this.optional.education,
          conditions: this.optional.conditions,
          meds: this.optional.meds,
          pets: this.optional.pets
        }
        try {
          const response = await profileService.submitUserPrefs(userInfo)
          console.log('response!!', response.data)
          // this.$store.dispatch('logUserPreferences', response)
          // this.$router.push('/home/' + this.$store.state.kebab + '/check')
        }
        catch (err) {
          console.log('BIg OL ErRrorororoR', err)
          // this.error = err.response.data.error
        }
      }
    },
    validateRequiredFields () {
      // can replace with vuelidate npm package
      for (var field in this.required) {
        let value = this.required[field]
        if (value === 0 || value === '') {
          window.scrollTo(0, 0)
          this.displayWarning = true
          return false
        }
      }
      return true
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
@import '../../assets/styles/main.scss';

  .submit-btn {
    margin-top: 40px;
  }
  .warning {
    color: $red;
    font-weight: 600;
    padding-top: $spacer;
  }

</style>
