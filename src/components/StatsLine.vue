<template>
    <div class="stat">
        <img class="stat-img" :src="require(`@/assets/img/stats/${stat}.png`)">
        <h3 class="stat-name">{{stat}}</h3>
        <input v-on:change="setStoreValue" class="stat-input" type="number" v-model="value">
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
        }
      },
      setStoreValue () {
        switch (this.stat) {
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
        }
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
        }

        &-input {
            border: solid 1px black;
            padding: 0 10px;
        }
    }

</style>