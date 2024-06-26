<script>
import CharacterCard from './CharView/CharCard.vue'
import CharService from '@/services/CharService.js'
import ColorBar from '/src/components/TheColorBar.vue'
import { watchEffect } from 'vue'

let count = 10
if (matchMedia('(max-width: 1100)').matches) {
  count = 10
} else if (matchMedia('(min-width: 1101px) and (max-width: 1400px)').matches) {
  count = 20
} else if (matchMedia('(min-width: 1401px)').matches) {
  count = 30
}
console.log(count)

export default {
  name: 'CharacterList',
  props: ['page'],
  components: {
    CharacterCard,
    ColorBar
  },
  data() {
    return {
      title: 'Character List',
      characters: null,
      totalCharacters: 0 
    }
  },
  created() {
    watchEffect(() => {
      this.events = null
      CharService.getCharacters(count, this.page)
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
      let totalPages = Math.ceil(this.totalCharacters / count)
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

  <div class="cardGrid">
    <CharacterCard v-for="character in characters" :key="character.id" :character="character" />
  </div>

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
</template>

<style scoped>
.pagination {
  padding-bottom: 10px;
  color: var(--link);
  transition: 0.4s;
}

.pagination :hover {
  color: var(--link-hover);
}

.pagination :active {
  color: var(--link-active);
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}

.cardGrid {
  margin-right: auto;
  margin-left: auto;
  width: 70vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

/*   Page resizing and Item Placement    */

@media (min-width: 1920px) {
}

@media (min-width: 1440px) {
}

@media (max-width: 1366px) {
}

@media (min-width: 1280px) {
}

@media (min-width: 1024px) {
}

@media (max-width: 768px) {
}

@media (max-width: 601px) {
}

@media (max-width: 414px) {
}

@media (max-width: 412px) {
}

@media (max-width: 393px) {
}

@media (max-width: 390px) {
}

@media (max-width: 375px) {
}

@media (max-width: 360px) {
}
</style>
