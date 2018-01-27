<template>
  <div class="form__optional">
    <p class="section-header">The following fields are optional, but we'd love it if you filled them out so we can get a better understanding of you.</p>
    <div class="optional-wrapper">
      <div>
        <label> {{ occupationQuestion }} </label>
        <input type="text" :value="occupation" @input="updateValue($event.target.value, 'occupation')" />
      </div>
      <div v-for="item in optional" :key="item.id">
        <div>{{ item.title }}</div>
        <q-select :value="correspondingProp(item.propName)" @input="updateValue($event, item.propName)" :options="item.options"></q-select>
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
      occupationQuestion: 'What is your current occupation?'
    }
  },
  computed: {
    optional () {
      return this.profileFields.find(element => element.optional)['optional']
    }
  },
  methods: {
    updateValue (event, prop) {
      let update = 'update:' + prop
      this.$emit(update, event)
    },
    correspondingProp (name) {
      return this.$props[name]
    }
  },
  props: ['profileFields', 'occupation', 'education', 'pets', 'meds', 'conditions'],
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
