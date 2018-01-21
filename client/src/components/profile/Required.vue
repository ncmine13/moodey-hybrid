<template>
  <div class="form__required">
    <p class="section-header">Please fill out these fields so we can get a better understanding of you.</p>
    <div class="form__required--input flex-centered"><label for="first-name">First Name:</label><input id="first-name" type="text" placeholder="Enter your name" v-model="firstName"/></div>
    <div class="form__required--input flex-centered"><label for="dob">Date of Birth:</label><input id="dob" type="text" placeholder="mm/dd/yyyy" v-model="dob"></div>
    <div class="form__required--select"><q-select v-model="selectGender" float-label="Gender Identity" radio :options="genderOptions"/></div>
    <div class="form__required--select"><q-select v-model="selectEmployment" float-label="Employment Status" radio :options="employmentOptions"/></div>
  </div>
</template>

<script>
import { QSelect } from 'quasar'
export default {
  name: 'Required',
  data () {
    return {
      firstName: '',
      selectGender: '',
      selectEmployment: '',
      dob: ''
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
  props: ['profileFields'],
  components: {
    QSelect
  }
}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';
  .form {
    &__required {
      &--input {
        justify-content: space-between;
        padding: $spacer 0;
      }
      &--select {
        display: flex;
      }
      span {
        color: $green;
        padding-right: 10px;
        font-size: 10px;
      }
      input {
        border: none;
        border-bottom: 1px solid $gray;
        line-height: 1.5;
      }
      .q-select {
        width: 100vw;
      }
    }
  }

</style>
