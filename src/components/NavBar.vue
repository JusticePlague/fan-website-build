<script setup></script>

<template>
  <header>
    <div class="nav-container">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/todolist">To Do List</RouterLink>
        <RouterLink to="/characterlist">Character List</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 2.5vw;
  text-align: center;
  margin-top: 2rem;
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

@media (min-width: 1388px) {
}

@media (max-width: 480px) {
}
</style>
