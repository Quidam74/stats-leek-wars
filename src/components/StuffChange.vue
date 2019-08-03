<template>
    <div class="stuff" :data-type="type">
        <h3 class="stuff-title">{{type}} Change</h3>
        <div class="filter" v-if="type==='chip'">
            <span class="filter-item" v-for="typePuce in listTypePuce"
                  :data-idtype="JSON.stringify(typePuce.id)" v-on:click="changeFilter($event)">{{typePuce.name}}</span>
        </div>
        <ul class="stuff-list">
            <li v-for="item in dataList" v-if="type==='weapon' || selectedType.includes(item.effects[0].id)">
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
      }
    },
    data () {
      return {
        type: this.typeStuff,
        dataList: this.data,
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
    mounted () {
      document.querySelector('.filter-item:first-of-type').classList.add('selected')
    },
    methods: {
      changeFilter (event) {
        this.selectedType = JSON.parse(event.currentTarget.dataset.idtype)
        document.querySelector('.selected').classList.remove('selected')
        event.currentTarget.classList.add('selected')
      }
    }
  }
</script>

<style scoped lang="scss">
    .stuff {
        /*display: none;*/
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

        .filter {
            display: flex;
            flex-wrap: wrap;

            &-item {
                cursor: pointer;
                background-color: #eeeeee;
                padding: 2px 5px;
                margin: 3px 5px;
                transition: color .3s, background-color .3s;

                &.selected {
                    background-color: #5fad1b;
                    color: white;
                }
            }
        }
    }
</style>