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
  min-width: 185px;
  width: 70vw;
}

/*   Page resizing and Item Placement    */

@media (max-width: 720px) {
  .colorBar{
    max-height:115px;
    line-height: 5vw;
    font-size: 4vw;
  }
}

@media (max-width:560px) {
  .colorBar {
    font-size: clamp(16px, calc(2vw + 2vh), 100px);
  }
}
</style>
