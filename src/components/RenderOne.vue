<template>
    <div class="item">
        <img class="item-img" :src="require(`@/assets/img/${type}/${item.name}.png`)" :data-id="item.id">
        <span>degat min :{{item.effects[0].value2*stats}}</span>
        <span>degat max :{{item.effects[0].value1*stats}}</span>
    </div>
</template>

<script>
  export default {
    name: 'RenderOne',
    props: {
      itemCarac: {
        type: [Object],
        default: [{error: 'error'}]
      },
      typeItem: {
        type: [String],
        default: 'error'
      }
    },
    data () {
      return {
        item: this.itemCarac,
        type: this.typeItem,
        stats: 5
      }
    }
  }
</script>

<style scoped lang="scss">
    .item {
        display: flex;
        flex-direction: column;

        &-img {
width: 60px;
        }
    }
</style>