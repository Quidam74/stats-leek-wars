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
      this.currentLeek = {}
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
      this.currentLeek.equipedWeapon = {1: 37, 2: 38}
      this.currentLeek.equipedChips = {1: 1, 2: 2, 3: 3, 4: 4}
    },
    data () {
      return {
        currentLeek: null,
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
