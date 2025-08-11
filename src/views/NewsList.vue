<script setup>
import MovieCards from '../components/MovieCards.vue';
import movieData from '../utils/movies.json';

const onClickLeft = () => history.back();
const movies=movieData
</script>

<template>
    <van-nav-bar
        title=" 资讯列表 "
        left-arrow
        @click-left="onClickLeft"
    />

    <div style="padding:20px">
      <MovieCard v-for="(movie,id) in movies" :key="id" :movie="movie" bg_color="#494e51" titleColor="white" :hideDesc='true'/>
    </div>
</template>