<script>
    export default {
      name: 'CharacterCard',
       props: {
        character: Object
       },
    }
    </script>

<template>
      <div class="char">
            <p>{{ character.name }}</p>
            <p>{{ character.fullname }}</p>
            <p>{{ character.alignment }}</p>
            <p>{{ character.description }}</p>
            <p>{{ character.shortbio }}</p>
            <p>{{ character.location }}</p>
            <p>{{ character.id }}</p>
            <br>
      </div>
  </template>

<style scoped>

  .char{
    background: #0ff;
    border: 5px solid #fff;
  }
  .char h2{
    color:#000;
  }
</style>