<script>
export default {
  name: 'ColorBar',
  props: ['title']
}
</script>

<template>
  <div class="banners">
    <h1 class="colorBar">
      {{ title }}
    </h1>
  </div>
</template>

<style>
.banners {
  white-space: pre-wrap;
}

.colorBar {
  background: linear-gradient(
    to right,
    var(--color-bar-1),
    var(--color-bar-2),
    var(--color-bar-3),
    var(--color-bar-2),
    var(--color-bar-1)
  );
  color: var(--color-bar-text);
  padding: 1vh;
  min-height: fit-content;
  max-height: 145px;
  border: 5px solid transparent;
  border-radius: 50px;
  text-align: center;
  line-height: 5vh;
  margin-bottom: 1vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  width: 75vw;
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
