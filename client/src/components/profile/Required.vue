<template>
  <div class="form__required">
    <p class="section-header">Please fill out these fields so we can get a better understanding of you.</p>
    <div class="form__required--input flex-centered">
      <label for="first-name">First Name:</label>
      <input type="text" placeholder="Enter your name" v-model="sync_firstName"/>
    </div>
    <div class="form__required--input flex-centered">
      <label for="dob">Date of Birth:</label>
      <input type="text" placeholder="mm/dd/yyyy" v-model="sync_dob">
    </div>
    <div class="form__required--select">
      <q-select v-model="sync_gender" float-label="Gender Identity" radio :options="genderOptions"/>
    </div>
    <div class="form__required--select">
      <q-select v-model="sync_employment" float-label="Employment Status" radio :options="employmentOptions"/>
    </div>
  </div>
</template>

<script>
import { QSelect } from 'quasar'
import profileFields from '../../data/profile-fields.json'

export default {
  name: 'Required',
  data () {
    return {
      selectGender: '',
      selectEmployment: '',
      profileFields: profileFields
    }
  },
  computed: {
    sync_firstName: {
      get () {
        return this.firstName
      },
      set (val) {
        this.$emit('update:firstName', val)
      }
    },
    sync_dob: {
      get () {
        return this.dob
      },
      set (val) {
        this.$emit('update:dob', val)
      }
    },
    sync_gender: {
      get () {
        return this.gender
      },
      set (val) {
        this.$emit('update:gender', val)
      }
    },
    sync_employment: {
      get () {
        return this.employment
      },
      set (val) {
        this.$emit('update:employment', val)
      }
    },
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
  props: ['firstName', 'dob'],
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
