<script setup></script>

<template>
  <header>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/todolist">To Do List</RouterLink>
        <RouterLink to="/characterlist">Character List</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

  </header>
</template>

<style scoped>
nav {
  min-width: 100px;
  max-width: 720px;
  max-height: 60px;
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

@media (min-width: 1920px) {
}

@media (min-width: 1440px) {
}

@media (min-width: 1366px) {
  nav{
    min-width: 1000px;
    max-width: 1350px;
  }
}

@media (min-width: 1280px) {
}

@media (min-width: 1024px) {
  nav {
    font-size: 24px;
    min-width: 730px;
  }
}

/*Hide Nav Bars from here down*/
@media (max-width: 768px) {
  nav {
    font-size: 16px;
    min-width: 400px;
    max-width: 540px;
  }
}

@media (max-width: 601px) {
  nav {
    font-size: 16px;
    min-width: 100px;
    max-width: 430px;
  }
}

@media (max-width: 414px) {
  nav {
    font-size: 13px;
    min-width: 100px;
    max-width: 295px;
  }
}

@media (max-width: 390px) {
  nav {
    font-size: 13px;
    min-width: 100px;
    max-width: 275px;
  }
}

@media (max-width: 375px) {
  nav {
    font-size: 13px;
    min-width: 100px;
    max-width: 265px;
  }
}

@media (max-width: 360px) {
  nav {
    font-size: 13px;
    min-width: 100px;
    max-width: 255px;
  }
}

</style>
