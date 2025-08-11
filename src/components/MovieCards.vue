<script setup>
import MovieCard from './MovieCard.vue';
import { moviePoster4 } from '../assets/images';
import movieData from '../utils/movies.json'

const movies=movieData

</script>
<template>
  <div>
    <div class="title-container">
      <span>热门资讯</span>
      <router-link to="/newsList">
        <span class="moreTab">更多></span>
      </router-link>
    </div>

    <div class="cards-container">
      <MovieCard v-for="(movie,id) in movies" :key="id" :movie="movie"/>
    </div>
  </div>
</template>

