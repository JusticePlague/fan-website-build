<script>
import ColorBar from '/src/components/TheColorBar.vue'

export default {
  name: 'TheHome',
  components: {
    ColorBar
  },
  data() {
    return {
      title: "Rao's Encyclopedia"
    }
  }
}
</script>

<template>
  <ColorBar :title="title" />
  <main>

    <div class="main flex col-12" id="flex">
      
      <div class="lefttop" id="one">
        <div class="box-header-top">
          <h1>One</h1>
        </div>

        <div class="box-text-top">
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
        </div>
      </div>

      <div class="righttop" id="two">
        <div class="box-header-top">
          <h1>Two</h1>
        </div>

        <div class="box-text-top">
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
        </div>
      </div>

      <div class="rightbottom" id="three">
        <div class="box-header-bottom">
          <h1>Three</h1>
        </div>

        <div class="box-text-bottom">
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
        </div>
      </div>

      <div class="leftbottom" id="four">
        <div class="box-header-bottom">
          <h1>Four</h1>
        </div>

        <div class="box-text-bottom">
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
          <h1>Testing Heading One</h1>
          <h2>Testing Heading Two</h2>
          <h3>Testing Heading Three</h3>
          <h4>Testing Heading Four</h4>
          <h5>Testing Heading Five</h5>
          <h6>Testing Heading Six</h6>
          <p>Testing Paragraph</p>
        </div>
      </div>

    </div>

  </main>
</template>

<style scoped>
/*  Divs  */

#flex {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  min-width: fit-content;
  width: 100%;
}

#one {
  order: 1;
}

#two {
  order: 2;
}

#three {
  order: 3;
}

#four {
  order: 4;
}

#one,
#two,
#three,
#four {
  width: 47%;
}

.lefttop,
.righttop {

}

.leftbottom,
.rightbottom {

}

.box-header-bottom h1,
.box-header-top h1 {
  color: var(--text-box-header-text);
  margin-top: 0.5vh;
  font-size: 1.5rem;
}


.box-header-top,
.box-header-bottom {
  background: var(--text-box-header);
  color: var(--text-box-header-text);
  padding-top: 15px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-top: var(--border) solid 5px;
}

.box-text-top,
.box-text-bottom {
  background-color: var(--text-box);
  height: 250px;
  min-height: 30vh;
  max-height: 50vh;
  margin: auto;
  text-align: center;
  padding-top: 10px;
  overflow: scroll;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-bottom: var(--border) solid 5px;
}

/*   Page resizing and Item Placement    */

@media (max-width: 840px) {
  .main {
    display: block;
    margin-top: 2vh;
    margin-right: auto;
    margin-left: auto;
    max-width: fit-content;
  }

  #flex {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    background-color: transparent;
    max-width: 80vw;
    height: 50vh;
    text-align: center;
    display: block;
  }

  #one,
  #two,
  #three,
  #four {
    width: 100%;
  }

  .box-text-top,
  .box-text-bottom {
    height: 250px;
    max-height: 50vh;
    margin: auto;
    text-align: center;
    padding: 10px 25px;
    overflow: scroll;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom: var(--border) solid 5px;
  }

  .box-header-top h1,
  .box-header-bottom h1 {
    color: var(--text-box-header-text);
    margin-top: 0.5vh;
    font-size: 1.5rem;
  }
  
  .box-header-bottom,
  .box-header-top {
    background: var(--text-box-header);
    color: var(--text-box-header-text);
    padding-top: 15px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-top: var(--border) solid 5px;
  }

}

/*@media (max-width: 680px) {
  .main {
    display: block;
    margin-top: 2vh;
    margin-right: auto;
    margin-left: auto;
    max-width: fit-content;
  }

  .right {
    margin-top: auto;
  }

  #flex {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    background-color: transparent;
    max-width: 80vw;
    height: 50vh;
    text-align: center;
    display: block;
  }

  #one {
    order: 1;
  }

  #two {
    order: 2;
  }

  #three {
    order: 3;
  }

  #four {
    order: 4;
  }

  #one,
  #two,
  #three,
  #four {
    width: 100%;
  }

  .lefttop,
  .righttop,
  .leftbottom,
  .rightbottom {
    border-radius: 50px;
  }

  .box-text-top,
  .box-text-bottom {
    height: 250px;
    max-height: 50vh;
    margin: auto;
    text-align: center;
    padding: 10px 25px;
    overflow: scroll;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    border-bottom: var(--border) solid 5px;
  }

  .box-header-bottom,
  .box-header-top {
    padding-top: 5px;
    border-top: var(--border) solid 5px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }

  .box-header-top h1,
  .box-header-bottom h1 {
    margin-top: 1vh;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }

  .box-header-bottom h1,
  .box-header-top h1 {
    margin-bottom: -2vh;
  }
}*/
</style>
