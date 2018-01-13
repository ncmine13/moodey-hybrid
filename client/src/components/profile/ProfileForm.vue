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
        <p>These fields are optional, but we'd love if you filled them out so we can get a fuller picture of who you are.</p>
      </div>
    </form>
  </div>
</template>
<script>
import { QSelect } from 'quasar'
export default {
  name: 'ProfileForm',
  data () {
    return {
      firstName: '',
      dob: Number,
      selectGender: '',
      selectEmployment: '',
      genderOptions: [
        {
          label: 'Cisgender Female',
          value: 'cisFem'
        },
        {
          label: 'Cisgender Male',
          value: 'cisMan'
        },
        {
          label: 'Gender Nonconforming',
          value: 'genNonConf'
        },
        {
          label: 'Gender Questioning',
          value: 'genQuest'
        },
        {
          label: 'Trans Man',
          value: 'femToMal'
        },
        {
          label: 'Trans Woman',
          value: 'malToFem'
        },
        {
          label: 'Other',
          value: 'other'
        }
      ],
      employmentOptions: [
        {
          label: 'Working full-time',
          value: 'fullTime'
        },
        {
          label: 'Working part-time',
          value: 'partTime'
        },
        {
          label: 'Caregiver',
          value: 'careGiver'
        },
        {
          label: 'Full-time student',
          value: 'fullTimeStudent'
        },
        {
          label: 'Part-time student',
          value: 'partTimeStudent'
        },
        {
          label: 'Working and in school',
          value: 'workingAndStudent'
        },
        {
          label: 'Not currently working or in school',
          value: 'unemployed'
        }
      ]
    }
  },
  components: {
    QSelect
  }
}
</script>
<<style lang="sass-loader" scoped>

</style>
