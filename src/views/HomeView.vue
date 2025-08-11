<script setup>
import {HomeBanner,HomeBanner2,HomeBanner3,HomeCards,TrendingTabs,AppBanner,MovieCards} from '../components/index'

</script>
<template>
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