<script lang="ts">
import Header from './components/Header.vue'
import { defineComponent } from 'vue'
export default defineComponent({ // 아래있는 내용들을 내보낸다 (객체들을)
  components:{
    Header
  },

  data(){ // 데이터 라는 함수
    return{ // 아래의 내용들을 반환한다
      age:0 //  응애!
    }
  },
  methods:{ // 함수를 저장하는 객체

  }
})

</script >

<template>
  <div class="main">
    <Header/>
    
    나는 {{ age }}살로 돌아가고 싶다
  </div>
</template>

<style scoped>
@font-face {
    font-family: 'LeeSeoyun';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
.main{
  font-family: 'LeeSeoyun';
}
</style>
