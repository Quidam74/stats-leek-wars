<template>
    <div class="calc">
        <h2>Weapons stats</h2>
        <div class="calc-weapon">
            <render-one class="weaponChild" v-for="id in listWeapon" :itemCarac="listStuff.weapons[id]"
                        :listEffect="allstuff.effect"
                        typeItem="weapon"></render-one>
        </div>
        <h2>chips stats</h2>
        <div class="calc-chip">

            <render-one class="chipChild" v-for="id in listChip" :itemCarac="listStuff.chips[id]"
                        :listEffect="allstuff.effect"
                        typeItem="chip"></render-one>
        </div>
    </div>
</template>

<script>
  import RenderOne from './RenderOne'

  export default {
    name: 'RenderCalc',
    components: {RenderOne},
    props: {
      listStuff: {
        type: [Object],
        default: [{error: 'error'}]
      }
    },
    data () {
      return {
        listWeapon: this.$store.getters.getLeekWeapon,
        listChip: this.$store.getters.getLeekChip,
        allstuff: this.listStuff
      }
    }
  }
</script>

<style scoped lang="scss">
    .calc {

        &-weapon {
            margin: 20px 0;
            display: flex;

            .weaponChild {
                min-width: 23%;
            }
        }

        &-chip {
            margin: 20px 0;
            display: flex;
            flex-wrap: wrap;

            .chipChild {
                min-width: 18%;
            }
        }
    }
</style>