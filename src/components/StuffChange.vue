<template>
    <div v-show="true" class="stufff" :data-type="type">
        <div class="stufff-title"><h2>{{type}} Changer</h2></div>
        <div class="filter" v-if="type==='chip'">
            <span class="filter-item" v-for="typePuce in listTypePuce"
                  :data-idtype="JSON.stringify(typePuce.id)" v-on:click="changeFilter($event)">{{typePuce.name}}</span>
        </div>
        <ul class="stufff-list">
            <li v-for="item in dataList" v-on:click="addItem(item.id)"
                v-if="(type==='weapon' || selectedType.includes(item.effects[0].id))&&item.level<=$store.getters.getLevel">
                <img :src="require(`@/assets/img/${type}/${item.name}.png`)" :data-id="item.id">
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'StuffChange',
    props: {
      typeStuff: {
        type: [String],
        default: 'default'
      },
      data: {
        type: [Object],
        default: [{error: 'error'}]
      },
      isVisible: {
        type: [Boolean],
        default: false
      }
    },
    data () {
      return {
        type: this.typeStuff,
        dataList: this.data,
        visible: this.isVisible,
        listTypePuce: [{
          name: 'Attacks',
          id: [1]
        }, {
          name: 'Heals',
          id: [2, 12, 15]
        }, {
          name: 'Boosts',
          id: [3, 4, 7, 8, 21, 22]
        }, {
          name: 'Shields',
          id: [5, 6]
        }, {
          name: 'Tactics',
          id: [9, 10, 11, 23]
        }, {
          name: 'Returns',
          id: [20]
        }, {
          name: 'Poisons',
          id: [13]
        }, {
          name: 'Bulbs',
          id: [14]
        }, {
          name: 'Shackles',
          id: [17, 18, 19]
        }],
        selectedType: [1]
      }
    },
    watch: {
      isVisible: function (newVal) { // watch it
        this.visible = newVal
      }
    },
    mounted () {
      document.querySelector('.filter-item:first-of-type').classList.add('selected')
    },
    methods: {
      changeFilter (event) {
        this.selectedType = JSON.parse(event.currentTarget.dataset.idtype)
        document.querySelector('.selected').classList.remove('selected')
        event.currentTarget.classList.add('selected')
      },
      addItem (id) {
        if (this.type === 'weapon') {
          this.$store.dispatch('addLeekWeapon', id)
        } else if (this.type === 'chip') {
          this.$store.dispatch('addLeekChip', id)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .stufff {
        &-title {
            background-color: #2A2A2A;

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

        &-list {
            padding: 16px;
            margin: 0;
            background-color: #eeeeee;
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

        .filter {
            display: flex;
            flex-wrap: wrap;
            padding: 16px;
            margin: 0;
            background-color: #eeeeee;

            &-item {
                cursor: pointer;
                background-color: #606060;
                color: #eeeeee;
                padding: 2px 5px;
                margin: 3px 5px;
                border-radius: 5px;
                transition: background-color .3s;

                &.selected {
                    background-color: #5fad1b;
                }
            }
        }
    }
</style>