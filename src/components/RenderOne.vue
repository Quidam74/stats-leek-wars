<template>
    <div class="item">
        <img class="item-img" :src="require(`@/assets/img/${type}/${item.name}.png`)" :data-id="item.id">
        <!--        {{item}}-->
        <span>degat min :{{item.effects[0].value2*stats | round}}</span>
        <span>degat max :{{item.effects[0].value1*stats | round}}</span>
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
      },
      listEffect: {
        type: [Array],
        default: [{error: 'error'}]
      }
    },
    filters: {
      round: function (value) {
        if (!value) return 0
        value = value.toString()
        return Math.round(value)
      }
    },
    data () {
      return {
        item: this.itemCarac,
        type: this.typeItem,
        effects: this.listEffect,
        stats: null
      }
    },
    mounted () {
      let appliedEffect = this.effects.find(function (elem) {
        return parseInt(elem.value) === this.item.effects[0].id
      }.bind(this)).name
      if (appliedEffect === 'EFFECT_DAMAGE') {
        this.stats = this.$store.getters.getStrength / 100
      } else if (appliedEffect === 'EFFECT_HEAL') {
        this.stats = this.$store.getters.getwisdom / 100
      } else if (appliedEffect.indexOf('_BUFF') !== -1) {
        this.stats = this.$store.getters.getScience / 100
      } else if (appliedEffect.indexOf('_SHIELD') !== -1) {
        this.stats = this.$store.getters.getResistance / 100
      } else if (appliedEffect.indexOf('_DEBUFF') !== -1) {
        this.stats = 1
      } else if (appliedEffect === 'EFFECT_POISON') {
        this.stats = this.$store.getters.getMagic / 100
      } else if (appliedEffect === 'EFFECT_SUMMON') {
        this.stats = 0
      } else if (appliedEffect === 'EFFECT_DAMAGE_RETURN') {
        this.stats = 'a faire'
      } else if (appliedEffect.indexOf('_SHACKLE') !== -1) {
        this.stats = this.$store.getters.getMagic / 100
      }
    },
    methods: {}
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