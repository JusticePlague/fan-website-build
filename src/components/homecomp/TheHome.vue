<script setup>
  
</script>


<template>
  <div class="banners">
    <h1 class="miniHome">WEEEEEEE</h1>
    <h3>
      badoop doo
    </h3>
  </div>

  <main>
    <div class="main flex col-12" id="main">
      
        <div class="leftcontainer col-6">
  
          <div class="left" id="left">
            
            <div class="box-header">
              <h1>Title Here</h1>
            </div>

            <div class="lefttop">
  
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
            
            <div class="box-header">
              <h1>Title Here</h1>
            </div>
            <div class="leftbottom">
              <h1>Heading One</h1>
              <h2>Heading Two</h2>
              <h3>Heading Three</h3>
              <h4>Heading Four</h4>
              <h5>Heading Five</h5>
              <h6>Heading Six</h6>
              <p>Paragraph</p><br>
              <p>
                just a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha textjust a buncha text
              </p>
            </div>
          </div>
  
        </div>
  
      <div class="rightcontainer col-3">
        <div class="right">

          <div class="box-header">
            <h1>Title Here</h1>
          </div>

          <div class="righttop">
            <h1>Bro</h1>
            <h2>Testing</h2>
            <h3>Testing</h3>
            <h4>Testing</h4>
            <h5>Testing</h5>
            <h6>Testing</h6>
            <p>Testing</p>
          </div>
          
          <div class="box-header">
            <h1>Title Here</h1>
          </div>

          <div class="rightbottom">
            <div class="grid-img">

            </div>
          </div>
        </div>
      </div>
  
    </div>
  </main>
</template>

<style scoped>

main {
  height: 50vh;
}

/*Divs*/
.main {
  height: 100%;
}

.flex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
}

.col-3 {
  width: 50%;
}

.col-6 {
  width: 50%;
}

.col-12 {
  width: 100%;
}

.leftcontainer {
  order: 0;
}

.rightcontainer {
  order: 1;
}

.left,
.right {
  background-color: transparent;
  max-width: 50vw;
  height: 60vh;
  text-align: center;
  border: var(--dark2) solid 5px;
  overflow: scroll;
  border-radius: 50px;
}

.lefttop, 
.leftbottom,
.righttop{
  background-color: var(--bg-2);
  height: 25vh;
  text-align: center;
  padding: 10px 25px;
  overflow: scroll;
  max-width: 50vw;
}

.rightbottom{
  background-color: var(--bg-2);
  text-align: center;
  overflow: hidden;
  max-width: 50vw;
  height: 25vh;
  align-content: center;
}

.lefttop,
.righttop {
  border-bottom: var(--border) solid 5px;
  border-radius: 50px;
}

.leftbottom,
.rightbottom {
  margin-top: -5px;
  border-top: var(--border) solid 5px;
  border-radius: 50px;
}

.grid-img {
  width: auto;
  max-width: 100%;
  height: auto;
  position: relative;
  align-items: center;
  content: var(--grid-img);
  margin: -10px, -10px, -10px, -10px;
}
</style>
