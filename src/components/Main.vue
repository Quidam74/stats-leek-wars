<template>
    <main v-if="fetch!==null && fetch.weapons !=='' && fetch.chips !==''&& fetch.effect !== Array()">
        <div class="overview">
            <stats></stats>
            <div class="overview-leek">leek</div>
            <div class="overview-stats">
                <stuff-overview :listStuff="fetch.weapons"
                                typeStuff="weapon"></stuff-overview>
                <stuff-change typeStuff="weapon" :data="fetch.weapons"></stuff-change>
                <stuff-overview :listStuff="fetch.chips"
                                typeStuff="chip"></stuff-overview>
                <stuff-change typeStuff="chip" :data="fetch.chips"></stuff-change>
            </div>
        </div>
        <render-calc :listStuff="fetch"></render-calc>

    </main>
</template>

<script>
  import Fetch from '../services/Fetch'
  import StuffOverview from './StuffOverview'
  import StuffChange from './StuffChange'
  import Stats from './Stats'
  import RenderCalc from './RenderCalc'

  export default {
    name: 'Main',
    components: {RenderCalc, Stats, StuffChange, StuffOverview},
    props: {},
    mounted () {
      this.fetch = new Fetch()
      this.$store.dispatch('addLeekWeapon', 37)
      this.$store.dispatch('addLeekWeapon', 38)
      this.$store.dispatch('addLeekWeapon', 39)
      this.$store.dispatch('addLeekChip', 8)
      this.$store.dispatch('addLeekChip', 10)
      this.$store.dispatch('addLeekChip', 19)
      this.$store.dispatch('addLeekChip', 20)
      this.$store.dispatch('addLeekChip', 34)
      this.$store.dispatch('addLeekChip', 97)
      this.$store.dispatch('addLeekChip', 73)
      this.$store.dispatch('addLeekChip', 100)
      this.$store.dispatch('addLeekChip', 94)

      this.$store.dispatch('setFrequency', 500)
      this.$store.dispatch('setLife', 500)
      this.$store.dispatch('setMagic', 500)
      this.$store.dispatch('setMp', 500)
      this.$store.dispatch('setResistance', 500)
      this.$store.dispatch('setScience', 500)
      this.$store.dispatch('setStrength', 500)
      this.$store.dispatch('setTp', 500)
      this.$store.dispatch('setWisdom', 500)
    },
    data () {
      return {
        fetch: null
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
    .overview {
        display: flex;
        width: 100%;

        &-stats {
            width: 20%;
        }

        &-leek {
            width: 50%;
        }

        &-stats {
            width: 30%;
        }
    }

</style>
