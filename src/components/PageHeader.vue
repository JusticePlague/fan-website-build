<script setup>

</script>

<template>
  <div class="page-header">
    <div class="img-wrap">
      <div class="header-img">

      </div>
    </div>
    <div class="header-title">
      <h1 class="header">Heresy</h1>
      <h3>
        Here we go go go, on an adventure
      </h3>
    </div>
  </div>
</template>

<style scoped>

.page-header{
  margin-top: -5vh;
  margin-left: -3vw;
  margin-right: -3vw;
  width: auto;
  background: rgb(90, 90, 0);
}

.img-wrap{
  padding-top: 3vh;
  padding-bottom: 1.5vh;
}

.header-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 10vw;
  content: var(--avy);
  border-radius: 50%;
}

.header-title{
  background-color: rgb(2, 2, 105);
  font-size: 1.5rem;
}

/*@media (min-width: 1024px) {
  .page-header{
    display: block;
    margin-left: -1vw;
    margin-right: 10vw;
  }
  
  .img-wrap{
    background: rgb(72, 0, 131);
  }
}*/
</style>
