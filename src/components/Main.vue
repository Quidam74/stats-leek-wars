<template>
    <main v-if="fetch!==null && fetch.weapons !=='' && fetch.chips !==''&& fetch.effect !== Array()">
        <h1 class="mainTitle">RestatMe !</h1>
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
      this.$store.dispatch('addLeekWeapon', 46)
      // chip 67 84 89 90 15 16 17 25 26 34 59 68 110 73 76 77 75 74 79 78
      this.$store.dispatch('addLeekChip', 3)
      this.$store.dispatch('addLeekChip', 4)
      this.$store.dispatch('addLeekChip', 11)
      this.$store.dispatch('addLeekChip', 20)
      this.$store.dispatch('addLeekChip', 21)
      this.$store.dispatch('addLeekChip', 97)
      this.$store.dispatch('addLeekChip', 98)
      // stats
      this.$store.dispatch('setLevel', 148)
      this.$store.dispatch('setFrequency', 101)
      this.$store.dispatch('setLife', 700)
      this.$store.dispatch('setMagic', 402)
      this.$store.dispatch('setMp', 5)
      this.$store.dispatch('setResistance', 100)
      this.$store.dispatch('setScience', 0)
      this.$store.dispatch('setStrength', 0)
      this.$store.dispatch('setTp', 14)
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
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

    * {
        font-family: 'Roboto', sans-serif;
    }

    body {
        margin: 0
    }

    main {
        padding: 30px;
        background-color: #333333;
    }

    .mainTitle {
        text-align: center;
        color: #eeeeee;
        margin-top: 0px;
    }

    .overview {
        display: flex;
        width: 100%;

        &-stats {
            width: 35%;
            background-color: #2A2A2A;

            h2 {
                height: 0px;
                padding: 0 10px;
                margin: 0;
                width: 180px;
                line-height: 38px;
                border-bottom: 40px solid #606060;
                border-left: 0px solid transparent;
                border-right: 25px solid transparent;
                background-color: transparent;
                color: #ffffff;
            }

        }

        &-leek {
            width: 40%;
            display: flex;

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
            position: absolute;
            right: 0;
        }
    }

</style>
