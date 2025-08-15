<script setup>
import {moviePoster4} from '../assets/images'
import movieData from '../utils/movies.json'
</script>
<template>
    <div class="card-container">   
        <div v-for="(movie,id) in movieData" :key="id"><img :src=moviePoster4 alt=""></div>
    </div>
</template>

<style scoped>
.card-container{
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(160px,1fr));
}
</style>