<template>
    <div class="stuff" :data-type="type">
        <h3 class="stuff-title">{{type}} Change</h3>
        <ul class="stuff-list">
            <li v-for="item in dataList">
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
        dataList: this.data
      }
    },
    methods: {
      getImg (name) {
        return '../assets/img/' + this.type + '/destroyer.png'
      }

    }
  }
</script>

<style scoped lang="scss">
    .stuff {
        display: none;
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