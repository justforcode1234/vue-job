<script setup>
    import { icon_1,icon_2,icon_3,icon_6 } from '../assets/images';
    defineProps({
        icons:{
            type:Array,
            default:[icon_1,icon_2,icon_3,icon_6]
        },
        bg:{
            default:'white'
        }
    })
</script>
<template>
    <van-row justify="space-between" :style="{backgroundColor:bg,padding:'0.7rem',borderRadius:'1rem'}">
        <van-col v-for="(icon,index) in icons" :keys="index">
            <van-image height="5rem" :src="icon"/>
        </van-col>
    </van-row>
</template>