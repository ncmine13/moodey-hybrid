<template>
  <div class="form__wrapper">
    <form>
      <div class="profile__required">
        <p>Please fill out these fields so we can get a better idea of you.</p>
        <label for="first-name"></label>
        <input id="first-name" type="text" v-model="firstName"/>
        <q-select v-model="selectGender" float-label="Gender Identity" radio :options="genderOptions" />
        <label for="dob"></label>
        <input id="dob" type="date" v-model="dob">
        <q-select v-model="selectEmployment" float-label="Employment Status" radio :options="employmentOptions"/>
      </div>
      <div class="profile__optional">
        <p>These fields are optional, but we'd love if you filled them out so we can get a better understanding of you.</p>
      </div>
    </form>
  </div>
</template>
<script>
import { QSelect } from 'quasar'
import profileFields from '../../data/profile-fields.json'

export default {
  name: 'ProfileForm',
  data () {
    return {
      firstName: '',
      selectGender: '',
      selectEmployment: '',
      fields: profileFields,
      dob: 0
    }
  },
  computed: {
    required () {
      return this.fields.find(element => element.required)['required']
    },
    optional () {

    },
    genderOptions () {
      return this.required.find(element => element.title === 'gender')['values']
    },
    employmentOptions () {
      return this.required.find(element => element.title === 'employment')['values']
    }
  },
  components: {
    QSelect
  }
}
</script>
<style lang="sass-loader" scoped>

</style>
