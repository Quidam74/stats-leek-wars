<template>
    <div class="calc">
        <div class="calc-weapon">
            <render-one class="weaponChild" v-for="id in listWeapon" :itemCarac="listStuff.weapons[id]"
                        typeItem="weapon"></render-one>
        </div>
        <div class="calc-chip">
            <render-one class="chipChild" v-for="id in listChip" :itemCarac="listStuff.chips[id]"
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
        margin: 30px;

        &-weapon {
            margin: 20px;
            display: flex;

            .weaponChild {
                width: 25%;
            }
        }

        &-chip {
            margin: 20px;
            display: flex;

            .chipChild {
                width: 10%;
            }
        }
    }
</style>