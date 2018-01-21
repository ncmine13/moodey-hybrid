<template>
  <div class="form__preferences">
    <p class="section-header">Which, if any, of these items would you like to see in relation to your mood?</p>
    <div class="form__preferences--wrapper">
      <div class="preference flex-centered" v-on:click="toggleSelected(preference)" v-bind:class="{ selected: preference.selected }" v-for="preference in correlationPreferences" :key="preference.id"> {{ preference.name }} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preferences',
  computed: {
    correlationPreferences () {
      return this.profileFields.find(element => element.preferences)['preferences']
    }
  },
  methods: {
    toggleSelected (preference) {
      preference.selected = !preference.selected
    }
  },
  props: ['profileFields']

}
</script>

<style lang="sass-loader" scoped>
@import '../../assets/styles/main.scss';

.form {
  &__preferences {
    margin-top: $spacer;
    &--wrapper {
      text-transform: uppercase;
      display: flex;
      flex-wrap: wrap;
      border-radius: 2px;
      font-size: 10px;
      font-weight: 600;
      .preference {
        background-color: $red;
        color: white;
        width: calc(100% / 3 - 1px);
        margin: 0 1px 1px 0;
        text-align: center;
        min-height: 50px;
        padding: 5px;
        &.selected {
          background-color: $green;
        }
      }
    }
  }
}

</style>
