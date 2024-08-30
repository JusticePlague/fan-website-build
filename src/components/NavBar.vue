<script setup>

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 

</script>

<template>
  
      <nav id="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/todolist">To Do List</RouterLink>
        <RouterLink to="/characterlist">Character List</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

</template>

<style scoped>
nav {
  position: sticky;
  min-width: 185px;
  width: 70vw;
  max-height: fit-content;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--nav);
  border-radius: 50px;
  padding: 10px;
  transition: top 0.3s; /* Transition effect when sliding down (and up) */
  font-size: clamp(14px, 2vw, 50px);
}

nav a {
  color: var(--nav-link);
  display: inline-block;
  padding: 0 1rem;
  border-left: 4px solid var(--nav-border);
}

nav a:hover {
  background-color: var(--nav-hover);
  color: var(--nav-link-hover);
  border-left: 4px solid var(--nav-border-hover);
}

nav a.router-link-exact-active {
  color: var(--nav-link-active);
}

nav a.router-link-exact-active:hover {
  border-left: 4px solid var(--nav-border);
  background-color: transparent;
  color: var(--nav-link-active-hover);
}

/*   Page resizing and Item Placement    */

@media (min-width: 1920px) {
  nav{
    max-height: 4vw;
    font-size: clamp(35px, 2vw, 85px);
  }
}

/*Hide Nav Bars*/

@media (max-width:840px) {

}

</style>
