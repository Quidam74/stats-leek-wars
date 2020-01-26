<template>
    <div class="item">
        <div class="item-mainData">
            <img class="item-img" :src="require(`@/assets/img/${type}/${item.name}.png`)" :data-id="item.id">
            <h3>{{item.name}}</h3>
        </div>
        <div class="item-secondaryData">
            <span>cost : {{item.cost}} TP</span>
            <span>range : {{item.min_range}} - {{item.max_range}}</span>
            <span v-if="item.cooldown">cooldown : {{item.cooldown }} Turn</span>
            <div class="item-effect" :class="getClassName(effect.id)" v-for="effect in item.effects">
                <span v-if="effect.turns">duration : {{effect.turns}}</span>
                <span>{{getStatName(effect.id)}} min : {{calcMin(effect) | round}}</span>
                <span>{{getStatName(effect.id)}} max : {{calcMax(effect) | round}}</span>
                <span>effect min per TP : {{calcPaRatioMin(effect) | round2}}</span>
                <span>effect max per TP : {{calcPaRatioMax(effect) | round2}}</span>
                <span>{{getStatName(effect.id)}} critique min : {{calcCritiqueMin(effect) | round}}</span>
                <span>{{getStatName(effect.id)}} critique max : {{calcCritiqueMax(effect) | round}}</span>
            </div>
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
      },
      round2: function (value) {
        if (!value) return 0
        value = value.toString()
        return Math.round(value * 100) / 100
      }
    },
    data () {
      return {
        item: this.itemCarac,
        type: this.typeItem,
        effects: this.listEffect
      }
    },
    methods: {
      calcMin (effect) {
        return effect.value1 + (effect.value1) * this.getStatValue(effect.id)
      },
      calcMax (effect) {
        return effect.value1 + effect.value2 + (effect.value1 + effect.value2) * this.getStatValue(effect.id)
      },
      calcCritiqueMin (effect) {
        return this.calcMin(effect) * 1.4
      },
      calcCritiqueMax (effect) {
        return this.calcMax(effect) * 1.4
      },
      findEffect (id) {
        return this.effects.find((elem) => {
          return parseInt(elem.value) === id
        })
      },
      getStatValue (id) {
        let effect = this.findEffect(id)
        if (effect.name === 'EFFECT_DAMAGE') {
          return this.$store.getters.getStrength / 100
        } else if (effect.name === 'EFFECT_HEAL' || effect.name === 'EFFECT_BOOST_MAX_LIFE') {
          return this.$store.getters.getwisdom / 100
        } else if (effect.name.indexOf('_BUFF') !== -1 || effect.name === 'EFFECT_AFTEREFFECT') {
          return this.$store.getters.getScience / 100
        } else if (effect.name.indexOf('_SHIELD') !== -1) {
          return this.$store.getters.getResistance / 100
        } else if (effect.name === ('EFFECT_DEBUFF') || effect.name === ('EFFECT_VULNERABILITY')) {
          return 0
        } else if (effect.name.indexOf('_DEBUFF') !== -1) {
          return this.$store.getters.getMagic / 100
        } else if (effect.name === 'EFFECT_POISON') {
          return this.$store.getters.getMagic / 100
        } else if (effect.name === 'EFFECT_DAMAGE_RETURN') {
          return this.$store.getters.getAgility / 100
        } else if (effect.name === 'EFFECT_RESURRECT') {
          return '∞'
        } else if (effect.name.indexOf('_SHACKLE') !== -1) {
          return this.$store.getters.getMagic / 100
        } else if (effect.name === ('EFFECT_VULNERABILITY')) {
          return this.$store.getters.getMagic / 100
        }
      },
      getClassName (id) {
        let effect = this.findEffect(id)
        if (effect.name === 'EFFECT_DAMAGE') {
          return 'damage'
        } else if (effect.name === 'EFFECT_HEAL' || effect.name === 'EFFECT_BOOST_MAX_LIFE' || effect.name === 'EFFECT_RESURRECT') {
          return 'heal'
        } else if (effect.name.indexOf('_BUFF') !== -1 || effect.name === 'EFFECT_AFTEREFFECT') {
          return 'buff'
        } else if (effect.name.indexOf('_SHIELD') !== -1) {
          return 'shield'
        } else if (effect.name === ('EFFECT_DEBUFF') || effect.name.indexOf('_SHACKLE') !== -1 || effect.name === 'EFFECT_POISON') {
          return 'debuff'
        } else if (effect.name.indexOf('_DEBUFF') !== -1 || effect.name === ('EFFECT_VULNERABILITY')) {
          return 'usefull'
        } else if (effect.name === 'EFFECT_DAMAGE_RETURN') {
          return 'reflect'
        }
      },
      getStatName (id) {
        let effect = this.findEffect(id).name
        if (effect === 'EFFECT_DAMAGE') {
          return 'damage'
        } else if (effect === 'EFFECT_HEAL') {
          return 'heal'
        } else if (effect.indexOf('_BUFF') !== -1) {
          return 'buff ' + effect.substr(effect.lastIndexOf('_') + 1).toLowerCase()
        } else if (effect.indexOf('_SHIELD') !== -1) {
          return 'buff ' + effect.substr(effect.indexOf('_') + 1).toLowerCase().replace('_', ' ')
        } else if (effect.indexOf('_DEBUFF') !== -1) {
          return 1
        } else if (effect === 'EFFECT_POISON') {
          return 'poison'
        } else if (effect === 'EFFECT_SUMMON') {
          return 'I\'m a puny !!!'
        } else if (effect === 'EFFECT_DAMAGE_RETURN') {

        } else if (effect.indexOf('_SHACKLE') !== -1) {
          return 'debuff ' + effect.substr(effect.lastIndexOf('_') + 1).toLowerCase()
        }
      },
      calcPaRatioMin (effect) {
        return this.calcMin(effect) / this.item.cost
      },
      calcPaRatioMax (effect) {
        return this.calcMax(effect) / this.item.cost
      }
    }
  }
</script>

<style scoped lang="scss">
    @mixin bgOpacityAfter($color) {
        &:after {
            content: '';
            width: calc(100% + 20px);
            height: 40px;
            background-color: $color;
            position: relative;
            top: calc(-100% + 40px);
            left: -10px;
            opacity: 0.3;
        }
    }

    .item {
        background-color: #eee;
        display: flex;
        flex-direction: column;
        width: 24%;
        margin: 10px auto;

        &:nth-child(4n) {
            margin-right: 0px;
        }

        &:nth-child(4n+1) {
            margin-left: 0px;
        }

        &-mainData {
            display: flex;
            padding: 10px;

            .item-img {
                width: 60px;
            }

            h3 {
                margin: 0;
                margin-left: 10px;
                text-transform: capitalize;
            }
        }

        &-secondaryData {
            margin-top: 10px;
            display: flex;
            flex-direction: column;

            padding: 0 10px;

            .item-effect {
                display: flex;
                flex-direction: column;
                margin-bottom: -40px;

                @include bgOpacityAfter(#eeeeee);

                &.damage {
                    @include bgOpacityAfter(#842D00);
                }

                &.heal {
                    @include bgOpacityAfter(#5EBE00);
                }

                &.buff {
                    @include bgOpacityAfter(#000093);
                }

                &.shield {
                    @include bgOpacityAfter(#FE7700);
                }

                &.debuff {
                    @include bgOpacityAfter(#890077);
                }

                &.usefull {
                    @include bgOpacityAfter(#C4C4C4);
                }

                &.reflect {
                    @include bgOpacityAfter(#1288F6);
                }
            }
        }
    }
</style>