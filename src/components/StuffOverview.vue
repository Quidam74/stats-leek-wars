<template>
    <div>{{type}} equiped
    </div>
</template>

<script>
  export default {
    name: 'StuffOverview',
    props: {
      typeStuff: {
        type: [String],
        default: 'default'
      }
    },
    data () {
      return {
        id: '',
        type: this.typeStuff
      }
    }
  }
</script>

<style scoped>

</style>