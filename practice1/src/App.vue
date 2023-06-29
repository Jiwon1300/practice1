<script >
import Header from './components/Header.vue'
import { defineComponent } from 'vue'
export default defineComponent({ // 아래있는 내용들을 내보낸다 (객체들을)
  components:{
    Header
  },

  data(){ // 데이터 라는 함수
    return{ // 아래의 내용들을 반환한다
    }
  },
  methods:{ // 함수를 저장하는 객체

  }
})

</script >

<template>
  <v-app>

  <div class="main">
    <Header/>
    <div style="margin-left: 15vw; margin-right: 15vw;">
      <router-view></router-view>
    </div>

  </div>
</v-app>
</template>

<style scoped>
@font-face {
    font-family: 'default';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
.main{
  font-family: 'default';
}
</style>
