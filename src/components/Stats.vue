<template>
    <div class="overview-stats">
        <stats-line v-for="item in stats" :typeStats="item"></stats-line>
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
          1: 'life',
          2: 'strength',
          3: 'wisdom',
          4: 'agility',
          5: 'resistance',
          6: 'science',
          7: 'magic',
          8: 'frequency',
          9: 'mp',
          10: 'tp'
        }
      }
    }
  }
</script>

<style scoped>

</style>