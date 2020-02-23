<template>
    <div v-if="stat !=='level' && stat !=='capital'" class="stat">
        <img class="stat-img" :src="require(`@/assets/img/stats/${stat}.png`)">
        <h3 class="stat-name">{{stat}}</h3>
        <input v-on:change="setStoreValue" class="stat-input" type="number" v-model="value">
        <div v-if="stat !=='life'" class="stat-rapideChange">
            <div class="stat-rapideChangeButton" v-bind:class="{ 'stat-rapideChangeButton-disable': isAbleButton(1) }"
                 v-on:click="addFixValue(1,isAbleButton(1))">+1
            </div>
            <div class="stat-rapideChangeButton" v-bind:class="{ 'stat-rapideChangeButton-disable': isAbleButton(10) }"
                 v-on:click="addFixValue(10,isAbleButton(10))">+10
            </div>
            <div class="stat-rapideChangeButton" v-bind:class="{ 'stat-rapideChangeButton-disable': isAbleButton(100) }"
                 v-on:click="addFixValue(100,isAbleButton(100))">
                +100
            </div>
        </div>
        <div v-else-if="stat ==='life'" class="stat-rapideChange">
            <div class="stat-rapideChangeButton" v-bind:class="{ 'stat-rapideChangeButton-disable': isAbleButton(4) }"
                 v-on:click="addFixValue(4,isAbleButton(4))">+4
            </div>
            <div class="stat-rapideChangeButton" v-bind:class="{ 'stat-rapideChangeButton-disable': isAbleButton(40) }"
                 v-on:click="addFixValue(40,isAbleButton(40))">+40
            </div>
            <div class="stat-rapideChangeButton" v-bind:class="{ 'stat-rapideChangeButton-disable': isAbleButton(400) }"
                 v-on:click="addFixValue(400,isAbleButton(400))">
                +400
            </div>
        </div>
    </div>
    <div class="stat" v-else-if="stat ==='capital'">
        <div class="stat-img"></div>
        <h3 class="stat-name">{{stat}}</h3>
        <input disabled="disabled" class="stat-input" type="number" v-model="value">
        <div class="stat-rapideChange"></div>
    </div>
    <div class="stat" v-else-if="stat ==='level'">
        <div class="stat-img"></div>
        <h3 class="stat-name">{{stat}}</h3>
        <input v-on:change="setStoreValue" class="stat-input" type="number" v-model="value">
        <div class="stat-rapideChange"></div>
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
      this.getValue(this.stat)
    },
    methods: {
      addFixValue (number, buttonIsDisable) {
        if (!buttonIsDisable) {
          this.setStoreValue(number)
        }
      },
      getValue (stat) {
        switch (stat) {
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
          default:
            console.log('error')
            break
        }
      },
      setStoreValue (addedNumber = 0) {
        if (typeof addedNumber !== 'number') {
          addedNumber = null
        } else {
          this.value = parseInt(parseInt(this.value) + parseInt(addedNumber))
        }
        if (isNaN(this.value)) {
          this.value = 0
        }

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
        this.$emit('capitalCalc')
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
      isAbleButton (addedValue) {
        let cost = 0
        switch (this.stat) {
          case 'mp':
            cost = this.calcCostMp(this.value + addedValue) - this.calcCostMp(this.value)
            break
          case 'tp':
            cost = this.calcCostTp(this.value + addedValue) - this.calcCostTp(this.value)
            break
          case 'life':
            cost = this.calcCostLife(this.value + addedValue) - this.calcCostLife(this.value)
            break
          default:
            cost = this.calcCostBasicStats(this.value + addedValue) - this.calcCostBasicStats(this.value)
            break
        }
        return this.getCapital() <= cost
      }
    }
  }
</script>

<style scoped lang="scss">
    .stat {
        background-color: #eeeeee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 15px;

        &:nth-of-type(1) {
            padding-top: 30px;
        }

        &-rapideChange {
            display: flex;
            width: 131px;

            &Button {
                margin: 0 5px;
                padding: 5px;
                cursor: pointer;
                background-color: #5fad1b;
                color: #ffffff;
                border-radius: 5px;

                &-disable {
                    opacity: 0.3;
                }
            }
        }

        &-name {
            width: 74px;
            margin: 0;
            text-align: center;
        }

        &-img {
            height: 30px;
            width: 30px;
        }

        &-input {
            border: solid 1px black;
            padding: 10px;
            width: 100px;

            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
    }

</style>