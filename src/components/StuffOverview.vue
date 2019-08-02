<template>
    <div class="currentStuff">
        <h3 class="currentStuff-title">{{type}} Equiped</h3>
        <ul class="currentStuff-list">
            <li v-for="item in stuff">
                <img :src="require(`@/assets/img/${type}/${listStuff[item].name}.png`)">
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'StuffOverview',
    props: {
      typeStuff: {
        type: [String],
        default: 'default'
      },
      listStuff: {
        type: [Object],
        default: {}
      }
    },
    mounted () {
      if (this.type === 'weapon') {
        this.stuff = this.$store.getters.getLeekWeapon
      } else {
        this.stuff = this.$store.getters.getLeekChip
      }
    },
    data () {
      return {
        id: '',
        type: this.typeStuff,
        stuff: null,
        allStuff: this.listStuff
      }
    },
    methods: {
      findStuff (id) {
        return 'require(`@/assets/img/' + this.type + '/' + this.listStuff[id].name + '.png`)'
      }
    }
  }
</script>

<style scoped lang="scss">
    .currentStuff {
        &-title {
        }

        &-list {
            padding: 0px;
            list-style: none;
            display: flex;
            flex-wrap: wrap;

            li {
                padding: 10px;

                img {
                    width: 60px;
                    height: auto;
                }
            }
        }

    }
</style>