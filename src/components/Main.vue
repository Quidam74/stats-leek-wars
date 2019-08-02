<template>
    <main v-if="fetch!==null && fetch.weapons !=='' && fetch.chips !==''">
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
      this.$store.dispatch('addLeekWeapon', 40)
      this.$store.dispatch('addLeekChip', 1)
      this.$store.dispatch('addLeekChip', 2)
      this.$store.dispatch('addLeekChip', 3)
      this.$store.dispatch('addLeekChip', 4)
      this.$store.dispatch('addLeekChip', 5)
      this.$store.dispatch('addLeekChip', 6)
      this.$store.dispatch('addLeekChip', 7)
      this.$store.dispatch('addLeekChip', 8)
      this.$store.dispatch('addLeekChip', 9)
      this.$store.dispatch('addLeekChip', 10)

      this.$store.dispatch('setFrequency', 10)
      this.$store.dispatch('setLife', 10)
      this.$store.dispatch('setMagic', 10)
      this.$store.dispatch('setMp', 10)
      this.$store.dispatch('setResistance', 10)
      this.$store.dispatch('setScience', 10)
      this.$store.dispatch('setStrength', 10)
      this.$store.dispatch('setTp', 10)
      this.$store.dispatch('setwisdom', 10)
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
