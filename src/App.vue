<script setup>
import NavBar from './components/NavBar.vue'
import MovieCarousel from './components/MovieCarousel.vue';
import HomeCards from './components/HomeCards.vue';
import HomeBanner from './components/HomeBanner.vue';
import HomeBanner2 from './components/HomeBanner2.vue';
import TrendingTabs from './components/TrendingTabs.vue'
import HomeBanner3 from './components/HomeBanner3.vue';
import AppBanner from './components/AppBanner.vue';
import MovieCards from './components/MovieCards.vue';
</script>
<template>
  <NavBar/>
  <MovieCarousel/>
  <div class="homeBody"> 
      <HomeBanner/>
      <HomeCards/>
      <HomeBanner2/>
      <TrendingTabs/>
      <HomeBanner3/>
      <AppBanner/>
      <MovieCards/>
  </div>

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