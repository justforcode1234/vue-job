<script setup>
    import { moviePoster1, moviePoster2, moviePoster3 } from '../assets/images';
    const images=[moviePoster1,moviePoster2,moviePoster3]
</script>

<template>
    <van-swipe height="350" :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
            <van-image width="100%" height="100%" :src="image"/>
        </van-swipe-item>
    </van-swipe>
</template>

<style scoped>


</style>