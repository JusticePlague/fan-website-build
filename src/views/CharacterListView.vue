<script>
import CharacterCard from '@/components/charcomp/CharCard.vue'
import CharService from '@/services/CharService.js'

export default{
    name: 'CharacterList',
    components: {
        CharacterCard
    },
    data() {
    return {
      characters: null
    }
  },
  created() {
    CharService.getCharacters()
    .then( response => {
      this.characters = response.data
    })
    .catch(error =>{
      console.log(error)
    })
  }
}
</script>

<template>

        <CharacterCard v-for="character in characters" :key="character.name" :character="character"/>

</template>

<style scoped>
    
</style>
