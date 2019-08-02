<template>
    <div class="stat">
        <img class="stat-img" :src="require(`@/assets/img/stats/${stat}.png`)">
        <h3 class="stat-name">{{stat}}</h3>
        <input class="stat-input" type="number" value="5">
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
        stat: this.typeStats
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
        &-input{
            border: solid 1px black;
            padding: 0 10px;
        }
    }

</style>