<template>
    <div class="overview-stats">
        <div class="stats-header">
            <h2>Caractéristiques</h2>
            <span class="stats-resetButton" v-on:click="resetStats">Reset</span></div>
        <stats-line :key="watcher+item" v-on:capitalCalc="capitalCalc" v-for="item in stats"
                    :typeStats="item" :total-capital="getCapital()"></stats-line>
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
      getCapital () {
        let level = this.$store.getters.getLevel
        let totalCapital = 5 * level + 45 * (1 + parseInt(level / 100)) + (level === 301 ? 95 : 0)
        let freq = this.$store.getters.getFrequency
        let life = this.$store.getters.getLife
        let magic = this.$store.getters.getMagic
        let mp = this.$store.getters.getMp
        let res = this.$store.getters.getResistance
        let science = this.$store.getters.getScience
        let str = this.$store.getters.getStrength
        let tp = this.$store.getters.getTp
        let wisdom = this.$store.getters.getwisdom
        let agi = this.$store.getters.getAgility
        let capital = totalCapital - this.calcCostLife(life) - this.calcCostBasicStats(str) - this.calcCostBasicStats(wisdom) - this.calcCostBasicStats(agi) - this.calcCostBasicStats(res) - this.calcCostBasicStats(science) - this.calcCostBasicStats(magic) - (freq - 100) - this.calcCostMp(mp) - this.calcCostTp(tp)
        return capital
      },
      calcCostBasicStats (stat) {
        // stat<200 1 : 2 200<=stat<400 =1 : 1 400<=stat<600 2:1 600>=stat 3:1
        // force sagesse resi agi science magie
        if (stat === null) {
          return 0
        }
        let palier = 200
        let totalPoint = 0
        if (stat < palier) {
          totalPoint += parseInt(stat) * 0.5
        }
        if (stat >= palier && stat < palier * 2) {
          totalPoint += 100 + parseInt(stat) - palier
        }
        if (stat >= (palier * 2) && stat < palier * 3) {
          totalPoint += 100 + palier + (parseInt(stat) - palier * 2) / 2 + 3
        }
        if (stat >= 600) {
          totalPoint += 100 + palier + palier * 2 + (parseInt(stat) - palier * 3) / 2
        }
        return totalPoint
      },
      calcCostLife (effectiveLife) {
        let effectifUseInPoint = effectiveLife - ((this.$store.getters.getLevel - 1) * 3 + 100)
        let palier = 1000
        let totalPoint = 0
        if (effectifUseInPoint < 1000) {
          totalPoint += effectifUseInPoint / 4
        } else if (effectifUseInPoint >= 1000 && effectifUseInPoint < 2000) {
          totalPoint = palier / 4 + (effectifUseInPoint - palier) / 3
        } else if (effectifUseInPoint >= 2000) {
          totalPoint = palier / 4 + palier / 3 + (effectifUseInPoint - palier * 2) / 2
        }
        return totalPoint
      },
      calcCostTp (stat) {
        let totalPoint = 0
        let baseCost = 30
        let scale = 5
        for (let i = 0; i < stat - 10; i++) {
          totalPoint += baseCost + i * scale
        }
        return totalPoint
      },
      calcCostMp (stat) {
        let totalPoint = 0
        let baseCost = 20
        let scale = 10
        for (let i = 0; i < stat - 3; i++) {
          totalPoint += baseCost + i * scale
        }
        return totalPoint
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