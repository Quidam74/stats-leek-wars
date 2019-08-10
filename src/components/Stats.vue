<template>
    <div class="overview-stats">
        <h2>Caractéristiques</h2>
        <stats-line :key="watcher+item" v-on:capitalCalc="capitalCalc" v-for="item in stats" :typeStats="item"></stats-line>
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
      }
    }
  }
</script>

<style scoped lang="scss">

</style>