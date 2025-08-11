<script setup>
import { icon_5 } from '../assets/images';
</script>
<template>
    <div class="banner">
        <div class="text-container">
            <span style="color:gray;"><span style="font-weight: 600;color:black">实时票房</span>/今日大盘</span>
            <span style="font-weight:500;margin-top: 5px;">382.99亿</span>
        </div>

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
    border-radius: 10px;
    display:flex;
}

.text-container{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding:0 10px;
    font-size:1rem;
}
</style>