<script setup>
import {hzpp_aqy,hzpp_gg,hzpp_jrtt,hzpp_zgyh } from '../assets/images';
import HomeCards from './HomeCards.vue';

</script>
<template>
    <div>
        <div class="title-container">
            <span>合作品牌</span>
            <span class="moreTab">更多 ></span>
        </div>
        <div class="app-section">
            <HomeCards :icons="[hzpp_aqy,hzpp_gg,hzpp_jrtt,hzpp_zgyh ]" bg="#f6f6f9"/>
        </div>
    </div>
</template>

<style scoped>

</style>