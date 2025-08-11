<script setup>
import { vip,vip_bg,vip_3,vip_2} from '../assets/images';
</script>

<template>
    <div class="vanGrid">
        <van-row :style="{height:'100%'}">
            <van-col :style="{height:'100%',display:'flex',alignItem:'center',justifyContent:'center'}">
                <van-image height="100%" :src="vip"/>
            </van-col>
            <van-col class="rightBanner">
                <van-row :style="{display:'flex',justifyContent:'space-between'}">
                    <van-col><van-image height="1.3rem" :src="vip_2"/></van-col>
                    <van-col><van-image height="1.3rem" :src="vip_3"/></van-col>
                </van-row>
                <van-row>
                    <van-col>专享福利</van-col>
                    <van-col offset="2">积分兑换</van-col>
                </van-row>
            </van-col>
        </van-row>
    </div>

</template>

<style scoped>
.vanGrid{
    background-image: url("../assets/images/vip-bg.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    height:5rem;
    font-size:0.7rem;
}

.rightBanner{
    display:flex;
    flex:1;
    flex-direction: column;
    justify-content:space-between;
    padding:1rem 1rem 1rem 0;
    height:100%;
    color:lightgray;
}
</style>