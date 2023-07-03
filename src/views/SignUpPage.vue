<template>
    <div style="text-align: center; margin-top: 15px;">
        <v-card elevation="10" style="padding: 20px; margin-left: 15vw; margin-right: 15vw; border-radius: 10px;">
            <div>
                <h2 style="margin-bottom: 15px;">Sign Up</h2>
                <!-- 아이디 입력칸 -->

                <v-text-field v-model="nickname" style="margin-left: 5vw; margin-right: 5vw;" label="ID"
                    variant="outlined" density="compact"></v-text-field>
                    
                <!-- 이메일 입력칸 -->
                <v-text-field v-model="email" style=" margin-left: 5vw; margin-right: 5vw; "
                    label="E-Mail" variant="outlined" density="compact"></v-text-field>

                <!-- 비밀번호 입력칸 -->
                <v-text-field :append-inner-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'" height
                    :type="isShowPassword ? 'text' : 'password'" @click:append="isShowPassword = !isShowPassword"
                    v-model="password" style=" margin-left: 5vw; margin-right: 5vw;" label="PW"
                    variant="outlined" density="compact"></v-text-field>
                
                <!-- 회원가입 -->
                <div style="margin-left: 5vw; margin-right: 5vw;">
                    <v-btn @click="SignUp" size="large" style=" width: 100%;" color="success" variant="tonal">
                        Sign Up
                    </v-btn>
                </div>
                <div @click="$router.push('/login')" style="cursor: pointer; margin-top: 5px; text-align: right; margin-right: 5vw;">
                    이미 계정이 있으신가요?
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { firebaseApp } from '../firebase'

export default {
    data() {
        return {
            nickname: "",
            password: "",
            email: "",
            isShowPassword: true
        }
    },
    methods: {
        SignUp: function () {
            createUserWithEmailAndPassword(getAuth(firebaseApp), this.email, this.password).then(user => {
                console.log(`계정 생성됨:${user.user.email}`)
                /**
              * @todo 회원가입완료 후 데이터 베이스에 등록
              */
            }).catch(error => {
                console.log(error)
            })
        }
    },
    beforeMount() {


    }

}
</script>

<style></style>