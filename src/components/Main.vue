<template>
    <main>


    </main>
</template>

<script>
  export default {
    name: 'Main',
    components: {},
    props: {},
    mounted () {
      this.getAllChips()
      this.getAllWeapon()
    },
    data () {
      return {
        chips: null,
        weapon: null
      }
    },
    methods: {
      getAllChips () {
        fetch('https://leekwars.com/api/chip/get-all')
          .then(function (response) {
            response.json()
              .then(function (data) {
                this.chips = JSON.stringify(data.chips)
              }.bind(this))
          }.bind(this))
      },
      getAllWeapon () {
        fetch('https://leekwars.com/api/weapon/get-all')
          .then(function (response) {
            response.json()
              .then(function (data) {
                this.weapon = data.weapons
              }.bind(this))
          }.bind(this))
      }
    }
  }
</script>

<style scoped>

</style>
