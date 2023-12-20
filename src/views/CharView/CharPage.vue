<script>
import CharService from '@/services/CharService.js'

export default {
  props: ['id'],
  data() {
    return {
      character: null
    }
  },
  created() {
    CharService.getCharacter(this.id)
      .then((response) => {
        this.character = response.data
      })
      .catch((error) => {
        console.log(error)

        if (error.response && error.response.status == 404) {
          this.$router.push({
            name: '404Resource',
            params: { resource: 'character' }
          })
        } else {
          this.$router.push({ name: 'NetworkError' })
        }
      })
  }
}
</script>

<template>
  <div v-if="character">
    <h1>HI, this is a character page</h1>
    <p>{{ character.name }}</p>
    <p>{{ character.fullname }}</p>
    <p>{{ character.alignment }}</p>
    <p>{{ character.description }}</p>
    <p>{{ character.shortbio }}</p>
    <p>{{ character.location }}</p>
    <p>{{ character.id }}</p>
    <p>{{ character.num }}</p>
  </div>
</template>

<style scoped></style>
