<script>
import CharacterCard from './CharView/CharCard.vue'
import CharService from '@/services/CharService.js'
import ColorBar from '/src/components/TheColorBar.vue'
import { watchEffect } from 'vue'

let count = 6
if (matchMedia('(max-width: 1100)').matches) {
  count = 6
} else if (matchMedia('(min-width: 1101px) and (max-width: 1400px)').matches) {
  count = 12
} else if (matchMedia('(min-width: 1401px)').matches) {
  count = 24
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
  border-bottom: #fff 2px solid;
}

a {
  color: var(--link);
}

a :hover {
  color: var(--link-hover);
}

a :active {
  color: var(--link-active);
}

@media (min-width: 3000px) {
  .cardGrid {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}

@media (max-width: 2000px) {
  .cardGrid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media (max-width: 1024px) {
  .cardGrid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 715px) {
  .cardGrid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 500px) {
  .cardGrid {
    width: fit-content;
    grid-template-columns: 1fr;
  }
}
</style>
