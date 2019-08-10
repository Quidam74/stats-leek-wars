<template>
    <div class="calc">
        <div class="calc-header">
            <h2>Weapons stats</h2></div>
        <div class="calc-weapon">
            <render-one class="weaponChild" v-for="id in listWeapon" :itemCarac="listStuff.weapons[id]"
                        :listEffect="allstuff.effect"
                        :key="id"
                        typeItem="weapon"></render-one>
        </div>
        <div class="calc-header">
            <h2>chips stats</h2></div>
        <div class="calc-chip">

            <render-one class="chipChild" v-for="id in listChip" :itemCarac="listStuff.chips[id]"
                        :listEffect="allstuff.effect"
                        :key="id"
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
        &-header {
            background-color: #2A2A2A;
            margin-top: 30px;

            h2 {
                height: 0px;
                padding: 0 10px;
                margin: 0;
                width: 185px;
                line-height: 38px;
                border-bottom: 40px solid #606060;
                border-left: 0px solid transparent;
                border-right: 25px solid transparent;
                background-color: transparent;
                color: #ffffff;
            }
        }

        &-weapon {
            margin: 20px 0;
            display: flex;
            flex-wrap: wrap;

            .weaponChild {
                /*min-width: 25%;*/
            }
        }

        &-chip {
            margin: 20px 0;
            display: flex;
            flex-wrap: wrap;

            .chipChild {
                /*min-width: 18%;*/
            }
        }
    }
</style>