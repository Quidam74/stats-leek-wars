<template>
    <div class="overview-stats">
        <stats-line v-for="item in stats" :typeStats="item"></stats-line>
        <div>use Le storage pour faire remonter des info</div>
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
          1: 'frequency',
          2: 'life',
          3: 'magic',
          4: 'mp',
          5: 'resistance',
          6: 'science',
          7: 'strength',
          8: 'tp',
          9: 'wisdom'
        }
      }
    }
  }
</script>

<style scoped>

</style>