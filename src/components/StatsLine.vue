<template>
    <div v-if="stat !=='level' && stat !=='capital'" class="stat">
        <img class="stat-img" :src="require(`@/assets/img/stats/${stat}.png`)">
        <h3 class="stat-name">{{stat}}</h3>
        <input v-on:change="setStoreValue" class="stat-input" type="number" v-model="value">
    </div>
    <div class="stat" v-else-if="stat ==='level'">
        <div class="stat-img"></div>
        <h3 class="stat-name">{{stat}}</h3>
        <input v-on:change="setStoreValue" class="stat-input" type="number" v-model="value">
    </div>
    <div class="stat" v-else-if="stat ==='capital'">
        <div class="stat-img"></div>
        <h3 class="stat-name">{{stat}}</h3>
        <input class="stat-input" type="number" v-model="value">
    </div>
</template>

<script>
  export default {
    name: 'statsLine',
    props: {
      typeStats: {
        type: [String],
        default: 'default'
      }
    },
    data () {
      return {
        stat: this.typeStats,
        value: null
      }
    },
    mounted () {
      this.getValue()
    },
    methods: {
      getValue () {
        switch (this.stat) {
          case 'level':
            this.value = this.$store.getters.getLevel
            break
          case 'frequency':
            this.value = this.$store.getters.getFrequency
            break
          case 'life':
            this.value = this.$store.getters.getLife
            break
          case 'magic':
            this.value = this.$store.getters.getMagic
            break
          case 'mp':
            this.value = this.$store.getters.getMp
            break
          case 'resistance':
            this.value = this.$store.getters.getResistance
            break
          case 'science':
            this.value = this.$store.getters.getScience
            break
          case 'strength':
            this.value = this.$store.getters.getStrength
            break
          case 'tp':
            this.value = this.$store.getters.getTp
            break
          case 'wisdom':
            this.value = this.$store.getters.getwisdom
            break
          case 'agility':
            this.value = this.$store.getters.getAgility
            break
          case 'capital':
            this.value = this.getCapital()
            break
        }
      },
      setStoreValue () {
        switch (this.stat) {
          case 'level':
            this.$store.dispatch('setLevel', this.value)
            break
          case 'frequency':
            this.$store.dispatch('setFrequency', this.value)
            break
          case 'life':
            this.$store.dispatch('setLife', this.value)
            break
          case 'magic':
            this.$store.dispatch('setMagic', this.value)
            break
          case 'mp':
            this.$store.dispatch('setMp', this.value)
            break
          case 'resistance':
            this.$store.dispatch('setResistance', this.value)
            break
          case 'science':
            this.$store.dispatch('setScience', this.value)
            break
          case 'strength':
            this.$store.dispatch('setStrength', this.value)
            break
          case 'tp':
            this.$store.dispatch('setTp', this.value)
            break
          case 'wisdom':
            this.$store.dispatch('setWisdom', this.value)
            break
          case 'agility':
            this.$store.dispatch('setAgility', this.value)
            break
        }
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
        while (Math.ceil(stat / palier) >= 0) {
          if (Math.ceil(Math.ceil(stat / palier) === 1)) {
            totalPoint += 0.5 * stat
            stat -= 2000
          } else {
            if ((stat % palier) !== 0) {
              totalPoint += (Math.ceil(stat / palier) - 1) * (stat - palier * (Math.ceil(stat / palier) - 1))
              stat -= stat % palier
            } else {
              totalPoint += (Math.ceil(stat / palier) - 1) * palier
              stat -= palier
            }
          }
        }
        return totalPoint
      },
      calcCostLife (stat) {
        let palier = 1000
        let totalPoint = 0
        if (stat < 1000) {
          totalPoint += stat / 4
        } else if (stat >= 1000 && stat < 2000) {
          totalPoint = palier / 4 + (stat - palier) / 3
        } else if (stat >= 2000) {
          totalPoint = palier / 4 + palier / 3 + (stat - palier * 2) / 2
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
      }
    }
  }
</script>

<style scoped lang="scss">
    .stat {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;

        &-img {
            height: 30px;
            width: 30px;
        }

        &-input {
            border: solid 1px black;
            padding: 0 10px;
        }
    }

</style>