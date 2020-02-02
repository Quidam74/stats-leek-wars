<template>
    <div class="currentStuff">
        <div class="currentStuff-header">
            <h2 class="currentStuff-title">{{type}} équipé</h2>
            <span class="currentStuff-changeButton" v-on:click="displayChangePannel">Changer</span>
        </div>
        <ul class="currentStuff-list">
            <li v-for="item in stuff" v-on:click="deleteItem(item)">
                <img :src="require(`@/assets/img/${type}/${item.name}.png`)">
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
    data () {
      return {
        id: '',
        type: this.typeStuff,
        lol: null,
        allStuff: this.listStuff
      }
    },
    computed: {
      stuff () {
        if (this.type === 'weapon') {
          return this.$store.getters.getLeekWeapon
        } else {
          return this.$store.getters.getLeekChip
        }
      }
    },
    methods: {
      displayChangePannel () {
        this.$emit('displayChangePannel')
      },
      deleteItem (item) {
        if (this.type === 'chip') {
          this.$store.dispatch('removeLeekChip', item)
          this.stuff = this.$store.getters.getLeekChip
        } else if (this.type === 'weapon') {
          this.$store.dispatch('removeLeekWeapon', item)
          this.stuff = this.$store.getters.getLeekWeapon
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .currentStuff {
        width: 100%;

        &-title {
            height: 0px;
            padding: 0 10px;
            margin: 0;
            line-height: 38px;
            border-bottom: 40px solid #606060;
            border-left: 0px solid transparent;
            border-right: 25px solid transparent;
            background-color: transparent;
            color: #ffffff;
        }

        &-header {
            display: flex;
            justify-content: space-between;
            background-color: #2A2A2A;
        }

        &-changeButton {
            background-color: #5fad1b;
            color: white;
            cursor: pointer;
            line-height: 30px;
            padding: 0 10px;
            height: 30px;
            border-radius: 5px;
            margin: 5px 10px;
        }

        &-list {
            background-color: #eeeeee;
            padding: 16px;
            margin: 0;
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