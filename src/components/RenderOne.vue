<template>
    <div class="item">
        <div class="item-mainData">
            <img class="item-img" :src="require(`@/assets/img/${type}/${item.name}.png`)" :data-id="item.id">
            <div>
                <span>{{item.name}}</span>
                <span>cost : {{item.cost}} TP</span>
            </div>
        </div>
        <div class="item-secondaryData">
            <span v-if="item.cooldown">cooldown : {{item.cooldown }} Turn</span>
            <span>range : {{item.min_range}} - {{item.max_range}}</span>
            <span v-if="item.effects[0].turns !== 0">duration :  {{item.effects[0].turns}}</span>
            <span>min {{effectName}} : {{item.effects[0].value2*stats | round}}</span>
            <span>max {{effectName}} : {{item.effects[0].value1*stats | round}}</span>
        </div>
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
        appliedEffect: null,
        stats: null,
        effectName: null
      }
    },
    computed: {
      getStoreValue () {
        this.appliedEffect = this.effects.find(function (elem) {
          return parseInt(elem.value) === this.item.effects[0].id
        }.bind(this)).name
        if (this.appliedEffect === 'EFFECT_DAMAGE') {
          return this.$store.getters.getStrength
        } else if (this.appliedEffect === 'EFFECT_HEAL') {
          return this.$store.getters.getwisdom
        } else if (this.appliedEffect.indexOf('_BUFF') !== -1) {
          return this.$store.getters.getScience
        } else if (this.appliedEffect.indexOf('_SHIELD') !== -1) {
          return this.$store.getters.getResistance
        } else if (this.appliedEffect.indexOf('_DEBUFF') !== -1) {
          return this.$store.getters.getMagic
        } else if (this.appliedEffect === 'EFFECT_POISON') {
          return this.$store.getters.getMagic
        } else if (this.appliedEffect === 'EFFECT_DAMAGE_RETURN') {
          return 'a faire'
        } else if (this.appliedEffect.indexOf('_SHACKLE') !== -1) {
          return this.$store.getters.getMagic
        }
      }
    },
    watch: {
      getStoreValue () {
        this.getStat()
      }
    },
    mounted () {
      this.getStat()
    },
    methods: {
      getStat () {
        if (this.appliedEffect === 'EFFECT_DAMAGE') {
          this.stats = this.$store.getters.getStrength / 100
          this.effectName = 'damage'
        } else if (this.appliedEffect === 'EFFECT_HEAL') {
          this.stats = this.$store.getters.getwisdom / 100
          this.effectName = 'heal'
        } else if (this.appliedEffect.indexOf('_BUFF') !== -1) {
          this.stats = this.$store.getters.getScience / 100
          this.effectName = 'buff ' + this.appliedEffect.substr(this.appliedEffect.lastIndexOf('_') + 1).toLowerCase()
        } else if (this.appliedEffect.indexOf('_SHIELD') !== -1) {
          this.stats = this.$store.getters.getResistance / 100
          this.effectName = 'buff ' + this.appliedEffect.substr(this.appliedEffect.indexOf('_') + 1).toLowerCase().replace('_', ' ')
        } else if (this.appliedEffect.indexOf('_DEBUFF') !== -1) {
          this.stats = 1
        } else if (this.appliedEffect === 'EFFECT_POISON') {
          this.stats = this.$store.getters.getMagic / 100
          this.effectName = 'poison'
        } else if (this.appliedEffect === 'EFFECT_SUMMON') {
          this.stats = ''
          this.effectName = 'I\'m a puny !!!'
        } else if (this.appliedEffect === 'EFFECT_DAMAGE_RETURN') {
          this.stats = 'a faire'
        } else if (this.appliedEffect.indexOf('_SHACKLE') !== -1) {
          this.stats = this.$store.getters.getMagic / 100
          this.effectName = 'debuff ' + this.appliedEffect.substr(this.appliedEffect.lastIndexOf('_') + 1).toLowerCase()
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .item {
        background-color: #eee;
        margin: 10px;
        padding: 10px;
        display: flex;
        flex-direction: column;

        &-mainData {
            display: flex;

            .item-img {
                width: 60px;
            }

            div {
                margin-left: 10px;
                display: flex;
                flex-direction: column;
            }
        }

        &-secondaryData {margin-top: 10px;
            display: flex;
            flex-direction: column;
        }
    }
</style>