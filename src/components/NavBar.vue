<script setup></script>

<template>
  
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/todolist">To Do List</RouterLink>
        <RouterLink to="/characterlist">Character List</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

</template>

<style scoped>
nav {
  min-width: 185px;
  width: 70vw;
  max-height: fit-content;
  font-size: 2.5vw;
  text-align: center;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--nav);
  border-radius: 50px;
  padding: 10px;
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

@media (max-width: 1024px) {

}

@media (min-width: 1280px) {

}

@media (min-width: 1366px) {

}

@media (min-width: 1440px) {

}

@media (min-width: 1800px) {

}

@media (min-width: 1920px) {
  nav{
    max-height: 90px;
    font-size: 50px;
  }
}

/*Hide Nav Bars from here down*/

@media (max-width: 328px) {

}

@media (max-width: 360px) {

}

@media (max-width: 393px) {

}

@media (max-width: 450px) {

}

@media (max-width: 601px) {

}

@media (max-width: 768px) {

}

</style>
