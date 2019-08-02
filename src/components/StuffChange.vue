<template>
    <div>
        <div>{{type}} Change</div>
        <ul>
            <li v-for="item in dataList">
                {{ item.name}}
                <img :src="
                require(`@/assets/img/${type}/${item.name}.png`)">
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

<style scoped>

</style>