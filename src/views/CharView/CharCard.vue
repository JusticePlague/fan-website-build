<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'CharacterCard',
  props: {
    character: Object
  },
  components: { RouterLink }
}
</script>

<template>
  <RouterLink :to="{ name: 'CharPage', params: { id: character.id } }">
    <div class="char">
      <p>{{ character.name }}</p>
      <p>{{ character.fullname }}</p>
      <p>{{ character.alignment }}</p>
      <p>{{ character.description }}</p>
      <p>{{ character.shortbio }}</p>
      <p>{{ character.location }}</p>
      <p>{{ character.id }}</p>
      <p>{{ character.callname }}</p>
      <h3>Card</h3>
    </div>
  </RouterLink>
</template>

<style scoped>
.char {
  background: #0ff;
  border: 5px solid #fff;
}
.char h2 {
  color: #000;
}
</style>
