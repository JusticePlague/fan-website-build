<script setup>
import { RouterLink } from 'vue-router'

</script>

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
    background-color: var(--color-5);
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

  @media (min-width: 1024px) {
  
    nav {
      font-size: 1.15rem;
      text-align: left;
      display: block;
      font-family: 'Cinzel';
      font-size: 16px;
      width: 15vw;
      height: 50vh;
      position: fixed;
      top: -5vh;
      left: 0;
      background-color: var(--color-5);
      overflow: auto;
      overflow-x: hidden;
      padding-top: 20px;
      border-bottom-right-radius: 50px;
    }
  
    nav a {
      color: var(--nav-link);
      padding: 0 1vw;
      border: 1px solid var(--nav-border);
      border-left: 4px solid var(--nav-border);
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      margin-top: 1vh;
      margin-left: 1vh;
      max-width: 13vw;
      display: block;
      text-decoration: none;
      text-align: center;
    }
  
    nav a:hover {
      background-color: var(--nav-hover);
      color: var(--nav-link-hover);
      border: 1px solid var(--nav-border-hover);
      border-left: 4px solid var(--nav-border-hover);
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  
    nav a.router-link-exact-active {
      color: var(--nav-link-active);
      border: 1px solid var(--nav-border-hover);
      border-left: 4px solid var(--nav-border-hover);
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
  
    nav a.router-link-exact-active:hover {
      background-color: transparent;
      border: 1px solid var(--nav-border-hover);
      border-left: 4px solid var(--nav-border-hover);
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      color: var(--nav-link-active-hover);
    }
  }
</style>