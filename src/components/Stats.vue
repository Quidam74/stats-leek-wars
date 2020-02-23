<template>
    <div class="overview-stats">
        <div class="stats-header">
            <h2>Caractéristiques</h2>
            <span class="stats-resetButton" v-on:click="resetStats">Reset</span></div>
        <stats-line :key="watcher+item" v-on:capitalCalc="capitalCalc" v-for="item in stats"
                    :typeStats="item"></stats-line>
    </div>
</template>

<script>
  import StatsLine from './StatsLine'

  export default {
    name: 'Stats',
    components: {StatsLine},
    data () {
      return {
        stats: {
          1: 'level',
          2: 'life',
          3: 'strength',
          4: 'wisdom',
          5: 'agility',
          6: 'resistance',
          7: 'science',
          8: 'magic',
          9: 'frequency',
          10: 'mp',
          11: 'tp',
          12: 'capital'
        },
        watcher: false
      }
    },
    methods: {
      capitalCalc () {
        this.watcher = !this.watcher
      },
      resetStats () {
        this.$store.dispatch('setLevel', 1)
        this.$store.dispatch('setFrequency', 100)
        this.$store.dispatch('setLife', 100)
        this.$store.dispatch('setMagic', 0)
        this.$store.dispatch('setMp', 3)
        this.$store.dispatch('setResistance', 0)
        this.$store.dispatch('setScience', 0)
        this.$store.dispatch('setStrength', 0)
        this.$store.dispatch('setTp', 10)
        this.$store.dispatch('setWisdom', 0)
        this.$store.dispatch('setAgility', 0)
        this.watcher = !this.watcher
      }
    }
  }
</script>

<style scoped lang="scss">
    .stats {
        &-header {
            background-color: #2A2A2A;
            display: flex;
            justify-content: space-between;

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

        &-resetButton {
            background-color: #5fad1b;
            color: white;
            cursor: pointer;
            line-height: 30px;
            padding: 0 10px;
            height: 30px;
            border-radius: 5px;
            margin: 5px 10px;
        }
    }
</style>