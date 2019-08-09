<template>
    <main v-if="fetch!==null && fetch.weapons !=='' && fetch.chips !==''&& fetch.effect !== Array()">
        <div class="overview">
            <stats></stats>
            <div class="overview-leek"><img src="@/assets/img/big_leek_2_white.png"></div>
            <div class="overview-stuff">
                <stuff :listData="fetch.weapons"
                       typeData="weapon">>
                </stuff>
                <stuff :listData="fetch.chips"
                       typeData="chip"></stuff>
            </div>
        </div>
        <render-calc :listStuff="fetch"></render-calc>

    </main>
</template>

<script>
  import Fetch from '../services/Fetch'
  import Stuff from './Stuff'
  import Stats from './Stats'
  import RenderCalc from './RenderCalc'

  export default {
    name: 'Main',
    components: {RenderCalc, Stats, Stuff},
    props: {},
    mounted () {
      this.fetch = new Fetch()
      // weapon
      this.$store.dispatch('addLeekWeapon', 37)
      this.$store.dispatch('addLeekWeapon', 38)
      this.$store.dispatch('addLeekWeapon', 39)
      // chip 67 84 89 90 15 16 17 25 26 34 59 68 110 73 76 77 75 74 79 78
      this.$store.dispatch('addLeekChip', 84)
      this.$store.dispatch('addLeekChip', 59)
      this.$store.dispatch('addLeekChip', 68)
      this.$store.dispatch('addLeekChip', 110)
      this.$store.dispatch('addLeekChip', 73)
      this.$store.dispatch('addLeekChip', 76)
      this.$store.dispatch('addLeekChip', 77)
      this.$store.dispatch('addLeekChip', 75)
      this.$store.dispatch('addLeekChip', 74)
      this.$store.dispatch('addLeekChip', 79)
      this.$store.dispatch('addLeekChip', 78)
      // stats
      this.$store.dispatch('setLevel', 159)
      this.$store.dispatch('setFrequency', 105)
      this.$store.dispatch('setLife', 800)
      this.$store.dispatch('setMagic', 0)
      this.$store.dispatch('setMp', 5)
      this.$store.dispatch('setResistance', 230)
      this.$store.dispatch('setScience', 300)
      this.$store.dispatch('setStrength', 200)
      this.$store.dispatch('setTp', 12)
      this.$store.dispatch('setWisdom', 200)
      this.$store.dispatch('setAgility', 0)
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
    main {
        padding: 30px;
    }

    .overview {
        display: flex;
        width: 100%;

        &-stats {
            width: 30%;
        }

        &-leek {
            width: 45%;
            display: flex;
            height: 400px;

            img {
                height: 400px;
                margin: auto;
            }
        }

        &-stuff {
            width: 25%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    }

</style>
