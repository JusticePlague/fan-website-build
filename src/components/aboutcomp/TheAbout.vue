<script>
import ColorBar from '/src/components/TheColorBar.vue'

export default {
  name: 'TheAbout',
  components: {
    ColorBar
  },
  data() {
    return {
      title: "Hey, I'm Sam! \nWelcome to my fan site."
    }
  }
}
</script>

<template>
  <ColorBar :title="title" />
  <main>
    <div class="grid">
      <div class="top">
        <h1>Hey,</h1>
        <p>
          Just been playing around.<br />
          Scroll <br />
          Scroll <br />
          Scroll <br />
          Scroll <br />
          Scroll <br />
        </p>
      </div>

      <div class="bottomleft">
        <h1>Testing Heading One</h1>
        <h2>Testing Heading Two</h2>
        <h3>Testing Heading Three</h3>
        <h4>Testing Heading Four</h4>
        <h5>Testing Heading Five</h5>
        <h6>Testing Heading Six</h6>
        <p>Testing Paragraph</p>
        <p>
          just a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
          textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
          textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
          textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
          textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
          textjust a buncha textjust a buncha textjust a buncha text
        </p>
      </div>

      <div class="bottomright">
        <div class="grid-img"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/*Divs*/

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 25vh;
  grid-auto-columns: 25vw;
}

.top {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  border-bottom: var(--border) solid 5px;
  border-radius: 50px;
  overflow: scroll;
}

.bottomleft {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
  min-width: 50%;
  overflow: scroll;
}

.bottomright {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 3;
  grid-column-end: 3;
  overflow: hidden;
  max-width: 300px;
  margin-left: auto;
  margin-right: none;
}

.bottomleft,
.bottomright {
  border-top: var(--border) solid 5px;
  border-radius: 50px;
  margin-top: -5px;
}

.top,
.bottomleft {
  background-color: var(--bg-2);
  text-align: center;
  padding: 10px 25px;
}
.bottomright {
  background-color: transparent;
  text-align: center;
  padding: 10px 25px;
}

.grid-img {
  width: 135%;
  height: auto;
  position: relative;
  left: 0%;
  top: 0%;
  margin: -15% -15%;
  border-radius: 50px;
  content: var(--grid-img);
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

/*
@media (max-width: 780px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(1fr, 1fr);
    grid-auto-rows: 35vh;
  }

  .top {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 3;
    border-bottom: var(--border) solid 5px;
    border-radius: 50px;
    overflow: scroll;
    max-width: 80vw;
  }

  .bottomleft {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 3;
    min-width: 50%;
    overflow: scroll;
    max-width: 80vw;
  }

  .bottomright {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
    overflow: hidden;
    max-width: 80vw;
    max-height: 80vw;
    background-color: transparent;
    border-radius: 50%;
    margin-bottom: 0vh;
    border-top: var(--border) solid 5px;
    border-bottom: var(--border) solid 5px;
  }

  .top,
  .bottomleft {
    background-color: var(--bg-2);
    text-align: center;
    padding: 10px 25px;
    border-radius: 50px;
    border-bottom: var(--border) solid 5px;
    border-top: var(--border) solid 5px;
  }

  .grid-img {
    width: 135%;
    height: auto;
    position: relative;
    left: 0%;
    top: 0%;
    margin: -15% -15%;
    border-radius: 50%;
    content: var(--avy);
  }
}

@media (min-width: 1200px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 25vh;
    grid-auto-columns: 15vw;
  }
}
*/
</style>
