<script setup></script>

<template>
  <div class="banners">
    <h1 class="colorBar">SO LONG AND GOODNIGHTTTTT</h1>
  </div>

  <main>
    <div class="main flex col-12" id="main">
      <div class="leftcontainer col-6">
        <div class="left" id="left">
          <div class="lefttop">
            <div class="box-header-top">
              <h1>Title Here</h1>
            </div>

            <div class="box-text-top">
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
          </div>

          <div class="leftbottom">
            <div class="box-header-bottom">
              <h1>Title Here</h1>
            </div>

            <div class="box-text-bottom">
              TESTTTTTTTT

              <h1>Heading One</h1>
              <h2>Heading Two</h2>
              <h3>Heading Three</h3>
              <h4>Heading Four</h4>
              <h5>Heading Five</h5>
              <h6>Heading Six</h6>
              <p>Paragraph</p>
              <br />
              <p>
                just a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha
                textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a
                buncha textjust a buncha textjust a buncha textjust a buncha text
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="rightcontainer col-3">
        <div class="right">
          <div class="righttop">
            <div class="box-header-top">
              <h1>Title Here</h1>
            </div>

            <div class="box-text-top">
              <h1>Bro</h1>
              <h2>Testing</h2>
              <h3>Testing</h3>
              <h4>Testing</h4>
              <h5>Testing</h5>
              <h6>Testing</h6>
              <p>Testing</p>
            </div>
          </div>

          <div class="rightbottom">
            <div class="box-header-bottom">
              <h1>Title Here</h1>
            </div>

            <div class="box-text-bottom">TESTTTTTTTT</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/*Divs*/

.flex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: -3vh;
  max-width: fit-content;
}

.col-3 {
  width: 47%;
}

.col-6 {
  width: 47%;
}

.col-12 {
  width: 100%;
  margin-top: 1vh;
}

.leftcontainer {
  order: 0;
}

.rightcontainer {
  order: 2;
}

.left,
.right {
  background-color: transparent;
  height: 50vh;
  text-align: center;
  margin: auto;
}

.lefttop,
.righttop {
  border-radius: 50px;
  margin-top: -1vh;
}

.leftbottom,
.rightbottom {
  margin-top: 0;
}

.box-header-top,
.box-header-top h1 {
  margin: 1vh 0 0 0;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.box-header-top,
.box-header-bottom {
  padding-top: 5px;
}

.box-header-bottom {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.box-header-top h1 {
  margin-top: 1vh;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
.box-header-bottom h1 {
  margin-top: 0.5vh;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.box-header-bottom h1,
.box-header-top h1 {
  margin-bottom: 0vh;
}

.box-header-top,
.box-header-bottom {
  background: var(--text-box-header);
}

.box-text-top,
.box-text-bottom {
  height: 250px;
  min-height: 30vh;
  max-height: 50vh;
  margin: auto;
  text-align: center;
  padding: 10px 25px;
  overflow: scroll;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

@media (min-width: 681px) {
  .lefttop,
  .righttop {
    border-bottom: var(--border) solid 5px;
  }

  .box-header-bottom h1 {
    border-top: var(--border) solid 5px;
  }
}

@media (max-width: 680px) {
  .main {
    display: block;
    margin-top: 2vh;
    margin-right: auto;
    margin-left: auto;
    max-width: fit-content;
  }

  .leftcontainer,
  .rightcontainer {
    margin-right: auto;
    margin-left: auto;
    background-color: transparent;
    max-width: 80vw;
    height: 50vh;
    text-align: center;
    display: block;
  }

  .right {
    margin-top: auto;
  }

  .col-6,
  .col-3 {
    display: inline-block;
  }

  .col-6,
  .col-3 {
    width: 100%;
  }

  .lefttop,
  .righttop,
  .leftbottom,
  .rightbottom {
    border-radius: 50px;
  }

  .box-header-bottom,
  .box-header-bottom h1 {
    margin-top: 1vh;
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

  .leftbottom,
  .rightbottom {
    margin-top: 0;
  }

  .box-header-bottom,
  .box-header-top {
    padding-top: 5px;
    border-top: var(--border) solid 5px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    margin-top: -0.5vh;
  }

  .right {
    margin-top: -1.5vh;
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
}
</style>
