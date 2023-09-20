<script>
import CharacterCard from './CharView/CharCard.vue'
import CharService from '@/services/CharService.js'
import ColorBar from '/src/components/TheColorBar.vue'
import { watchEffect } from 'vue'


export default {
  name: 'CharacterList',
  props: ['page'],
  components: {
    CharacterCard,
    ColorBar
  },
  data() {
    return {
      title: "Character List",
      characters: null,
      totalCharacters: 0
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      CharService.getCharacters(5, this.page)
        .then((response) => {
          this.characters = response.data
          this.totalCharacters = response.headers['x-total-count']
        })
        .catch(() => {
          this.$router.push({ name: 'NetworkError' })
        })
    })
  },
  computed: {
    hasNextPage() {
      var totalPages = Math.ceil(this.totalCharacters / 5)
      return this.page < totalPages
    }
  }
}
</script>

<template>
  <ColorBar :title="title" />

  <div class="pagination">
    <RouterLink
      id="page-prev"
      :to="{ name: 'CharacterList', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
    >
      &#60; Previous
    </RouterLink>

    <span> {{ this.page }} </span>

    <RouterLink
      id="page-next"
      :to="{ name: 'CharacterList', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
    >
      Next &#62;
    </RouterLink>
  </div>

  <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
</template>

<style scoped>
.pagination {
  color: #fff;
}
a {
  color: #f0f;
}
#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
