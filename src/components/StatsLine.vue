<template>
    <div v-if="stat !=='level' && stat !=='capital'" class="stat">
        <img class="stat-img" :src="require(`@/assets/img/stats/${stat}.png`)">
        <h3 class="stat-name">{{stat}}</h3>
        <input v-on:change="setStoreValue" class="stat-input" type="number" v-model="value">
        <div class="stat-rapideChange">
            <div class="stat-rapideChangeButton" v-on:click="addFixValue(1)">+1</div>
            <div class="stat-rapideChangeButton" v-on:click="addFixValue(10)">+10</div>
            <div class="stat-rapideChangeButton" v-on:click="addFixValue(100)">+100</div>
        </div>
    </div>
    <div class="stat" v-else-if="stat ==='level'">
        <div class="stat-img"></div>
        <h3 class="stat-name">{{stat}}</h3>
        <input v-on:change="setStoreValue" class="stat-input" type="number" v-model="value">
        <div class="stat-rapideChange"></div>
    </div>
    <div class="stat" v-else-if="stat ==='capital'">
        <div class="stat-img"></div>
        <h3 class="stat-name">{{stat}}</h3>
        <input disabled="disabled" class="stat-input" type="number" v-model="capital">
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
      },
      totalCapital: {
        type: [Number],
        default: -1
      }
    },
    data () {
      return {
        stat: this.typeStats,
        capital: this.totalCapital,
        value: null
      }
    },
    mounted () {
      if (this.stat !== 'capital') {
        this.getValue(this.stat)
      }
    },
    methods: {
      addFixValue (number) {
        this.setStoreValue(number)
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