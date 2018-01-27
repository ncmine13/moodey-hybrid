<template>
  <div class="form__optional">
    <p class="section-header">The following fields are optional, but we'd love it if you filled them out so we can get a better understanding of you.</p>
    <div class="optional-wrapper">
      <div>
        <label>What is your current occupation?</label>
        <input type="text" v-model="sync_occupation" />
      </div>
      <q-select ></q-select>
      <!-- while I'm figuring out dynamic adding of v-model, I will unfortunately hardcode :( -->
      <!-- <div>
        <div>What is the highest level of education you've received?</div>
        <q-select v-model="sync_education" separator radio :options="educationOptions" />
      </div>
      <div>
        <div>Have you been diagnosed with any medical conditions?</div>
        <q-select v-model="sync_conditions" separator radio :options="conditionsOptions" />
      </div>
      <div>
        <div>Do you take any medications?</div>
        <q-select v-model="sync_meds" separator radio :options="medsOptions" />
      </div>
      <div>
        <div>Do you have any pets?</div>
        <q-select v-model="sync_pets" separator radio :options="petsOptions" />
      </div> -->
    </div>
  </div>
</template>

<script>
import { QSelect } from 'quasar'
export default {
  name: 'Optional',
  watch: {
    sync_education: {
      get () {
        return this.education
      },
      set (val) {
        this.$emit('update:education', val)
      }
    },
    sync_occupation: {
      get () {
        return this.occupation
      },
      set (val) {
        this.$emit('update:occupation', val)
      }
    },
    sync_meds: {
      get () {
        return this.meds
      },
      set (val) {
        this.$emit('update:meds', val)
      }
    },
    sync_conditions: {
      get () {
        return this.conditions
      },
      set (val) {
        this.$emit('update:conditions', val)
      }
    },
    sync_pets: {
      get () {
        return this.pets
      },
      set (val) {
        this.$emit('update:pets', val)
      }
    }
  },
  computed: {
    conditionsOptions () {
      return this.optional.find(element => element.name === 'sync_conditions')['options']
    },
    petsOptions () {
      return this.optional.find(element => element.name === 'sync_pets')['options']
    },
    medsOptions () {
      return this.optional.find(element => element.name === 'sync_meds')['options']
    },
    educationOptions () {
      return this.optional.find(element => element.name === 'sync_education')['options']
    },
    optional () {
      return this.profileFields.find(element => element.optional)['optional']
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
