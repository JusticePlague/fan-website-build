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
.banners{
  white-space: pre-wrap;
}
</style>
