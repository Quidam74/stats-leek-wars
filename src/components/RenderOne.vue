<template>
    <div>{{aaa}}{{bbb}}</div>
</template>

<script>
  export default {
    name: 'RenderOne',
    data () {
      return {
        aaa: this.$store.getters.getLeekWeapon,
        bbb: this.$store.getters.getLeekChip,
        stats: 5
      }
    }
  }
</script>

<style scoped>

</style>