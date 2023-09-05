<script>
import CharacterCard from '@/components/charcomp/CharCard.vue'
import axios from 'axios'

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
    axios.get('https://my-json-server.typicode.com/JusticePlague/fan-website-build/characters')
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
