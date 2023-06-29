import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire,VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase' // 이전에 저장한 firebase 파일에서 firebaseApp 객체를 가져와 사용한다고 선언
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(VueFire,{
  firebaseApp, // firebase를 이용하기 위해서 firebase 앱을 초기화한 객체를 전달
  modules:[
    VueFireAuth(), // firebase에서 인증 서비스를 사용하기 위해서 함수호출
  ]
})
app.mount("#app")