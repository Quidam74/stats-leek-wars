<template>
    <div>
        <render-one></render-one>
    </div>
</template>

<script>
  import RenderOne from './RenderOne'

  export default {
    name: 'RenderCalc',
    components: {RenderOne},
    props: {
      typeStuff: {
        type: [Object],
        default: 'default'
      }
    }
  }
</script>

<style scoped>

</style>