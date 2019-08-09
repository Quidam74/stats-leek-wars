<template>
    <div class="currentStuff">
        <div class="currentStuff-header">
            <h3 class="currentStuff-title">{{type}} Equiped</h3>
            <span class="currentStuff-changeButton" v-on:click="displayChangePannel">Change</span>
        </div>
        <ul class="currentStuff-list">
            <li v-for="item in stuff" v-on:click="deleteItem(item)" :key="item">
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
      displayChangePannel () {
        this.$emit('displayChangePannel')
      },
      deleteItem (id) {
        if (this.type === 'chip') {
          this.$store.dispatch('removeLeekChip', id)
          this.stuff = this.$store.getters.getLeekChip
        } else if (this.type === 'weapon') {
          this.$store.dispatch('removeLeekWeapon', id)
          this.stuff = this.$store.getters.getLeekWeapon
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .currentStuff {

        background-color: white;
        width: 100%;

        &-title {
        }

        &-header {
            display: flex;
            justify-content: space-between;
        }

        &-changeButton {
            background-color: #5fad1b;
            color: white;
            padding: 2px 5px;
            margin: 3px 5px;
            cursor: pointer;
        }

        &-list {
            padding: 0px;
            list-style: none;
            display: flex;
            flex-wrap: wrap;

            li {
                padding: 10px;

                img {
                    width: 50px;
                    height: auto;
                }
            }
        }

    }
</style>