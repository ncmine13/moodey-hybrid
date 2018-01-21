<template>
  <div class="form__optional">
    <p class="section-header">The following fields are optional, but we'd love it if you filled them out so we can get a better understanding of you.</p>
    <div class="optional-wrapper">
      <div><label>What is your current occupation?</label> <input type="text" v-model="occupation" /> </div>
      <div v-for="item in optional" :key="item.id">
        <div>{{ item.title }}</div>
        <q-select v-model='item.model' :options="item['options']" />
      </div>
    </div>
  </div>
</template>

<script>
import { QSelect } from 'quasar'
export default {
  name: 'Optional',
  data () {
    return {
      education: '',
      pets: '',
      meds: '',
      conditions: '',
      occupation: ''
    }
  },
  computed: {
    optional () {
      return this.profileFields.find(element => element.optional)['optional']
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
  &__optional {
    margin-top: $spacer * 2;
    .optional-wrapper {
      font-size: 14px;
      label {
        display: block;
        padding-bottom: $spacer * 0.5;
      }
      input {
        border: none;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid $gray;
        border-radius: 0;
      }
      & > div {
        padding: $spacer 0;
      }
    }
  }
}
</style>
