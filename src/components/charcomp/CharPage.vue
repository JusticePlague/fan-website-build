<script>
import CharService from '@/services/CharService.js'

export default {
  data() {
    return {
      character: null,
      id: 'Zod'
    }
  },
  created() {
    CharService.getCharacter(this.id)
    .then( response => {
      this.character = response.data
    })
    .catch(error =>{
      console.log(error)
    })
  }
}
</script>

<template>
    <h1>HI</h1>
    <p>{{ character.name }}</p>
    <p>{{ character.fullname }}</p>
    <p>{{ character.alignment }} but is he really tho</p>
    <p>{{ character.description }}</p>
    <p>{{ character.shortbio }}</p>
    <p>{{ character.location }}</p>
    <p>{{ character.id }}</p>
</template>

<style scoped>
</style>