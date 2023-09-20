<script setup></script>

<template>
  <div class="page-header">
    <div class="img-wrap">
      <div class="header-img"></div>
    </div>
    <div class="header-title">
      <h1 class="header">Heresy</h1>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  background: var(--color-3);
  margin-left: auto;
  margin-right: auto;
  width: 70vw;
  margin-top: -5vh;
  margin-bottom: 2vh;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
}

.header {
  color: var(--text-5);
}

.img-wrap {
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

.header-title {
  font-size: 1.5rem;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
