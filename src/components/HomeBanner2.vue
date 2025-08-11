<script setup>
import { icon_5 } from '../assets/images';
</script>
<template>
    <div class="banner">
        <span><span style="font-weight: 600;">实时票房</span>/今日大盘</span>
        <span>382.99亿</span>
    </div>

</template>

<style scoped>
.banner{
    background-image: url("../assets/images/icon-5.png");
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    width:100%;
    height:5rem;
    font-size:1rem;
    padding:0 1rem;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 10px;
}
</style>