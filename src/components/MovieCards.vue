<script setup>
import MovieCard from './MovieCard.vue';
import { moviePoster4 } from '../assets/images';

const movies=[
    {
    id:'1',
    title:'达科塔·约翰逊加盟《不存在的罪人》 合作海瑟薇',
    description:'惊悚片《伊甸园》曝预告 孤岛频发荒诞故事',
    date:'2025-04-07 14:32:08',
    image:'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
    },
    {
    id:'2',
    title:'达科塔·约翰逊加盟《不存在的罪人》 合作海瑟薇',
    date:'2025-04-07 14:32:08',
    image:'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
    }, 
    {
    id:'3',
    title:'达科塔·约翰逊加盟《不存在的罪人》 合作海瑟薇',
    description:'惊悚片《伊甸园》曝预告 孤岛频发荒诞故事',
    date:'2025-04-07 14:32:08',
    image:'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
    }, 
    {
    id:'4',
    title:'达科塔·约翰逊加盟《不存在的罪人》 合作海瑟薇',
    date:'2025-04-07 14:32:08',
    image:'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
    }, 
    {
    id:'5',
    title:'达科塔·约翰逊加盟《不存在的罪人》 合作海瑟薇',
    description:'惊悚片《伊甸园》曝预告 孤岛频发荒诞故事',
    date:'2025-04-07 14:32:08',
    image:'https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
    }, 
]

</script>
<template>
  <div>
    <div class="title-container">
      <span>热门资讯</span>
      <span class="moreTab">更多></span>
    </div>

    <div class="cards-container">
      <MovieCard v-for="(movie,id) in movies" :key="id" :movie="movie"/>
    </div>
  </div>
</template>

