<template>
    <main class="overview">
        <div class="overview-stats"><h1>stats</h1></div>
        <div class="overview-leek">leek</div>
        <div class="overview-stats">
            <stuff-overview></stuff-overview>
            <stuff-overview></stuff-overview>
            <h1 v-if="staticData">{{staticData[1].name}}</h1>
        </div>

    </main>
</template>

<script>
  import Fetch from '../services/Fetch'
  import StuffOverview from './StuffOverview'
  import WorkingLeek from './WorkingLeek'

  export default {
    name: 'Main',
    components: {StuffOverview},
    props: {},
    mounted () {
      this.fetch = new Fetch()
      this.currentLeek = WorkingLeek
      setTimeout(() => {
        this.staticData = this.fetch.chips
      }, 500)
    },
    data () {
      return {
        currentLeek: null,
        staticData: null,
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
