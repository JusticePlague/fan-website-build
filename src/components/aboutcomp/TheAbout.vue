<script setup>
  import '/src/assets/base.css'
</script>

<template>

    <div class="banners">
      <h1 class="colorBar">SO LONG AND GOODNIGHTTTTT</h1>
    </div>
  <main>
    <div class="grid">

      <div class="top">
        <h1>
          Hey, 
        </h1>
        <p>
          Just been playing around.<br/>
          Scroll <br/>
          Scroll <br/>
          Scroll <br/>
          Scroll <br/>
          Scroll <br/>
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
          just a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha text
        </p>

      </div>

      <div class="bottomright">

        <div class="grid-img">
        </div>

      </div>
    </div>
  </main>
  
  
</template>

<style scoped>

/*Divs*/

@media (min-width: 781px){
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
    min-width:50%;
    
    overflow: scroll;
  }

  .bottomright {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 3;
    grid-column-end: 4;
    overflow: hidden;
    max-width: 300px;
    align-self: grid-column-end;
  }

  .bottomleft, .bottomright {
    border-top: var(--border) solid 5px;
    border-radius: 50px;
    margin-top: -5px;
  }

  .top, .bottomleft {
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
}

@media (max-width:780px){
  .grid {
    display: grid;
    grid-template-columns: repeat(1fr, 1fr);
    grid-auto-rows: 35vh;
  }

  .top {
    grid-row-start: 1;
    grid-row-end: 2;
    border-bottom: var(--border) solid 5px;
    border-radius: 50px;
    overflow: scroll;
    max-width: 80vw;
  }

  .bottomleft {
    grid-row-start: 3;
    grid-row-end: 4;
    min-width:50%;
    overflow: scroll;
    max-width: 80vw;
  }

  .bottomright {
    grid-row-start: 2;
    grid-row-end: 3;
    overflow: hidden;
    max-width: 80vw;
    max-height: 80vw;
    background-color: transparent;
    border-radius: 50%;
  }

  .top, .bottomleft{
    background-color: var(--bg-2);
    text-align: center;
    padding: 10px 25px;
    border-radius: 50px;
    border-bottom: var(--border) solid;
    border-top: var(--border) solid;
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

</style>