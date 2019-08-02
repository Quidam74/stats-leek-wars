<template>
    <main class="overview">
        <div class="overview-stats"><h1>stats</h1></div>
        <div class="overview-leek">leek</div>
        <div class="overview-stats">
            <stuff-overview typeStuff="weapons"></stuff-overview>
            <stuff-overview typeStuff="chips"></stuff-overview>
            <stuff-change v-if="fetch!==null && fetch.weapons !==''" typeStuff="weapon" :data="fetch.weapons"></stuff-change>
            <stuff-change v-if="fetch!==null && fetch.chips !==''" typeStuff="chip" :data="fetch.chips"></stuff-change>
        </div>

    </main>
</template>

<script>
  import Fetch from '../services/Fetch'
  import StuffOverview from './StuffOverview'
  import WorkingLeek from './WorkingLeek'
  import StuffChange from './StuffChange'

  export default {
    name: 'Main',
    components: {StuffChange, StuffOverview},
    props: {},
    mounted () {
      this.fetch = new Fetch()
      this.currentLeek = WorkingLeek
    },
    data () {
      return {
        currentLeek: null,
        fetch: null
      }
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
    .overview {
        display: flex;
        width: 100%;

        &-stats {
            width: 20%;
        }

        &-leek {
            width: 50%;
        }

        &-stats {
            width: 30%;
        }
    }

</style>
