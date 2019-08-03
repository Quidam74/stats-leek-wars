<template>
    <div class="stuff">
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
        showChange: false,
        stayLeft: true
      }
    },
    methods: {
      displayChangePannel () {
        this.showChange = !this.showChange
        if (this.showChange) {
          this.$el.classList.add('displayLeft')
        } else {
          this.$el.classList.remove('displayLeft')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .stuff {
        display: -webkit-inline-box;
        width: 100%;
        transition: transform .5s;
    }

    .displayLeft {
        transform: translateX(-100%);
    }

</style>