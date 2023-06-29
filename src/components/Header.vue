<template>
  <div>
    <div
      style="margin-top: 15px; margin-bottom: 15px; align-items: center; width: 100%; height: 100%; background-color: #ffffff; max-height: 15px; color:#000000; font-size: 10px; display: flex;">
      <div @click="$router.push('/')" style="font-size: 20px; font-weight: 650; cursor: pointer; margin-left: 15vw;">
        사이버기록장
      </div>
      <div @click="$router.push('/')" style="font-size: 15px; font-weight: 0; cursor: pointer; margin-left: auto; margin-right: 20px;">
        Home
      </div>
      <div @click="$router.push('/sub')" style="font-size: 15px; font-weight: 0; cursor: pointer; margin-right: 20px;">
        Day
      </div>
      <div style="font-size: 15px; font-weight: 0; cursor: pointer; margin-right: 20px;">
        Night
      </div>
      <div style="font-size: 15px; font-weight: 0; cursor: pointer; margin-right: 10vw;">
        Wing
      </div>
      <div @click="$router.push('/login')" style="font-size: 12px; font-weight: 0; cursor: pointer; margin-right: 10vw;">
        Login
      </div>
    </div>
  </div>
  <hr />
</template>

<script>
import router from '../router';



</script>