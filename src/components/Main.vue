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
      this.getAllVar()
    },
    data () {
      return {
        chips: null,
        weapon: null,
        constant: null,
        chipsDamage: null,
        chipsHeal: null,
        chipsBoost: null,
        chipsShield: null,
        chipsTactic: null,
        chipsReflect: null,
        chipsPoison: null,
        chipsPuny: null,
        chipsDebuf: null,
        typeDamage: null,
        typeHeal: null,
        typeBoost: null,
        typeAbsolutShield: null,
        typeRelativeShield: null,
        typeTactic: null,
        typeReflect: null,
        typePoison: null,
        typePuny: null,
        typeDebuf: null

      }
    },
    methods: {
      getAllChips () {
        fetch('https://leekwars.com/api/chip/get-all')
          .then(function (response) {
            response.json()
              .then(function (data) {
                this.chips = data.chips

                console.log(this.chips)
                this.chips.forEach((elem, index) => {
                  console.log(elem)
                })
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
      },
      getAllVar () {
        fetch('https://leekwars.com/api/constant/get-all')
          .then(function (response) {
            response.json()
              .then(function (data) {
                this.constant = data.constants
                this.constant.forEach((elem, index) => {
                  switch (elem.name) {
                    case 'EFFECT_DAMAGE':
                      this.typeDamage = elem
                      break
                    case 'EFFECT_HEAL':
                      this.typeHeal = elem
                      break
                    case 'BUFF':
                      // plus compliqué, todo
                      this.typeBoost = elem
                      break
                    case 'EFFECT_ABSOLUTE_SHIELD':
                      this.typeAbsolutShield = elem
                      break
                    case 'EFFECT_RELATIVE_SHIELD':
                      this.typeRelativeShield = elem
                      break
                    case 'Tactic':
                      // plus compliqué, todo pour le relative
                      this.typeTactic = elem
                      break
                    case 'EFFECT_DAMAGE_RETURN':
                      this.typeReflect = elem
                      break
                    case 'EFFECT_POISON':
                      this.typePoison = elem
                      break
                    case 'EFFECT_SUMMON':
                      this.typePuny = elem
                      break
                    case 'EFFECT_DEBUFF':
                      this.typeDebuf = elem
                      break
                  }
                })
                this.getAllWeapon()
                this.getAllChips()
              }.bind(this))
          }.bind(this))
      }
    }
  }
</script>

<style scoped>

</style>
