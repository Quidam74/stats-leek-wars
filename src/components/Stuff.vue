<template>
    <div>
        <stuff-overview v-on:displayChangePannel="displayChangePannel" :listStuff="data"
                        :typeStuff="type"></stuff-overview>
        <stuff-change v-bind:isVisible="showChange" :typeStuff="type" :data="data"></stuff-change>
    </div>
</template>

<script>
  import StuffOverview from './StuffOverview'
  import StuffChange from './StuffChange'

  export default {
    components: {StuffChange, StuffOverview},
    name: 'Stuff',
    props: {
      typeData: {
        type: [String],
        default: 'default'
      },
      listData: {
        type: [Object],
        default: {error: 'error'}
      }
    },
    data () {
      return {
        type: this.typeData,
        data: this.listData,
        showChange: false
      }
    },
    methods: {
      displayChangePannel () {
        this.showChange = !this.showChange
      }
    }
  }
</script>

<style scoped>

</style>