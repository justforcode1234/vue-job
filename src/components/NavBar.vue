<script setup>
  import { showToast } from 'vant';
  import {ref} from 'vue'
  import {homeActiveIcon,homeIcon,mainIcon,movieActiveIcon,movieIcon,msgActiveIcon,msgIcon,userActiveIcon,userIcon} from '../assets/images/index'
  
  const tabActive=ref(0)
  const HomeIcon={
    active:homeActiveIcon,
    inactive:homeIcon
  }

  const MovieIcon={
    active:movieActiveIcon,
    inactive:movieIcon
  }

  const MessageIcon={
    active:msgActiveIcon,
    inactive:msgIcon
  }

  const UserIcon={
    active:userActiveIcon,
    inactive:userIcon
  }

</script>

<template>
  <van-tabbar v-model="tabActive" active-color="#000000" class="tabBar" route>
    <van-tabbar-item to="/">
      <span>Home</span>
      <template #icon="props">
        <img :src="props.active? HomeIcon.active : HomeIcon.inactive" alt=""/>
      </template>
    </van-tabbar-item>

    <van-tabbar-item to="/movies">
      <span>Movies</span>
      <template #icon="props">
        <img :src="props.active? MovieIcon.active: MovieIcon.inactive" alt=""/>
      </template>
    </van-tabbar-item>

    <van-tabbar-item>
      <template #icon="props">
        <img style="height: 3.5rem; z-index: 2; position: relative;":src="props.active? mainIcon: mainIcon" alt=""/>
      </template>
    </van-tabbar-item>

    <van-tabbar-item>
      <span>Messages</span>
      <template #icon="props">
        <img :src="props.active? MessageIcon.active: MessageIcon.inactive" alt=""/>
      </template>
    </van-tabbar-item>

    <van-tabbar-item>
      <span>User</span>
      <template #icon="props">
        <img :src="props.active? UserIcon.active: UserIcon.inactive" alt=""/>
      </template>
    </van-tabbar-item>

  </van-tabbar>
</template>

<style scoped>
img{
  height:1.5rem;
}

span{
  font-size:0.6rem;
}

.tabBar{
  border:1px solid lightgray;
  height:3.2rem;
}
</style>