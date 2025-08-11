<script setup>
import NavBar from './components/NavBar.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <NavBar/>
  <RouterView/>
</template>

<style>
  .homeBody{
    max-width: 90%;
    margin: auto;
    display:flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-top: 1rem;
    padding-bottom: 4rem;
  }

 .moreTab{
    color: #999;
    font-size:0.9rem;
}

.title-container{
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size:0.9rem;
    font-weight: 700;
}
</style>