<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'CharacterCard',
  props: {
    character: Object
  },
  components: { RouterLink },
  data() {
    return {
      charIcon: this.character.icon
    }
  }
}
</script>

<template>
  <div class="cardTainer">
    <RouterLink :to="{ name: 'CharPage', params: { id: character.id } }">
      <div class="card">
        <div class="iconTainer">
          <img :src="`${charIcon}`" class="icon" />
        </div>
        <div class="paraTainer">
          <p>{{ character.name }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>

.card{
  display: grid;
  grid-template-rows: 3fr 5vw;
  background: #fff;
  border-top: #fff 2px solid;
  margin: 5px;
  padding-bottom:10px;
}

.paraTainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.paraTainer p {
  color: var(--link);
  font-size: 16px;
  font-weight: bold;
  padding: none;
  max-width: 14vw;
  margin-left: auto;
  margin-right: auto;
}

.iconTainer {
  max-width: fit-content;
}

.icon {
  border-bottom: var(--border-2) solid 5px;
  margin-left: auto;
  margin-right: auto;
  width: 14vw;
}

a {
  max-width: fit-content;
}

.cardTainer :hover{
  background: var(--card-hover);
  color: var(--card-text-hover);
}

.paraTainer :hover{
  background: none;
}

.iconTainer :hover{
  background: none;
  border-bottom: var(--border-2) solid 5px;
}






/*
@media (min-width: 3000px) {
  .card p {
    max-width: 11.5vw;
    font-size: 1.2vw;
    margin-top: -35px;
  }

  .icon {
    width: 11.5vw;
  }
}

@media (max-width: 2500px) {
  .card p {
    margin-top: -50px;
  }
}

@media (max-width: 2000px) {
  .card p {
    max-width: 17.5vw;
    margin-top: -40px;
  }

  .icon {
    width: 17.5vw;
  }
}

@media (max-width: 1400px) {
  .card p {
    font-size: 1.5em;
    margin-top: -35px;
  }
}

@media (max-width: 1024px) {
  .card {
    grid-template-columns: 1fr 17.5vw;
    min-width: fit-content;
    max-height: 18.6vw;
  }

  .card p {
    font-size: 2.5vw;
    width: 35vw;
    margin-top: 20px;
  }

  .icon {
    width: 17.5vw;
  }
}

@media (max-width: 715px) {
  .card {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    width: fit-content;
    max-width: 35vw;
    max-height: 18.9vw;
  }

  .card p {
    font-size: 18px;
    margin-top: 30px;
    width: 17.5vw;
  }

  .icon {
    width: 17.5vw;
  }
}

@media (max-width: 500px) {
  .card {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    width: 70vw;
    max-height: 36.9vw;
  }

  .card p {
    font-size: 18px;
    margin-top: 50px;
    width: 35vw;
    max-width: 35vw;
  }
  .icon {
    width: 35vw;
    max-width: 35vw;
  }
}*/

</style>
