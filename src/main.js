import { createApp } from 'vue' // vue.js를 시작할 수 있도록 createApp이라는 함수를 가져와준다, createApp 함수는 vue 애배을 실행할 수 있도록 도와준다
import App from './App.vue' // App.vue 파일을 가져와서 메인 화면을 표시해주는 역할을 해주기 위해서 파일을 import 해준다
import router from './router' // router 모듈을 사용하기 위해서 router 설정값을 저장하여 내보낸 파일을 import 해준다
import 'vuetify/styles' // vuetify를 사용하기 위해 미리 정의된 스타일 파일을 가져온다
import { createVuetify } from 'vuetify' // vuetify를 사용하기 위해서 createVuetify 함수가 필요하기 때문에 함수가 존재하는 파일을 import 해준다
import * as components from 'vuetify/components' // vuetify에서 제공하는 버튼, 필드 등등을 사용하기 위해서 각각의 컴포넌츠를 따로 가져오는 것이 아니라 전체를 가져와주기 위해서 컴포넌츠가 있는 폴더를 import 해준다
import * as directives from 'vuetify/directives' // vuetify를 사용하기 위해 부가적으로 필요한것들
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({ // vuetify 객체를 만들어서 vue app에서 사용할 수 있도록 만들어주기 위해서 함수를 통해 필요한 값들을 전달해준다
  components, // vuetify에서 모든 컴포넌츠들을 사용하겠다고 설정값을 넣어줌
  directives, // 필요한것들..
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

const app = createApp(App) // vue 앱을 만들어주기 위해서 객체를 생성해줌
app.use(router) // 앱에서 router를 사용한다고 말해주는것
app.use(vuetify) // 앱에서 vuetify 디자인을 사용하겠다고 말해주는 것
app.mount("#app") // index.html 파일에서 app이라고 적힌 아이디 div 태그 안에 넣어준다는 뜻