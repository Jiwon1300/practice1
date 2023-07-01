<template>
    <div style="text-align: center; margin-top: 15px;">
        <v-card elevation="10" style="padding: 20px; margin-left: 15vw; margin-right: 15vw; border-radius: 10px;">
            <div>
                <h2 style="margin-bottom: 15px;">Sign Up</h2>
                <v-text-field v-model="nickname" style="margin-left: 5vw; margin-right: 5vw; height: 10px;" label="ID"
                    variant="solo-filled" density="compact"></v-text-field>
                <v-text-field v-model="email" style="margin-top: 60px; margin-left: 5vw; margin-right: 5vw; height: 10px;"
                    label="E-Mail" variant="solo-filled" density="compact"></v-text-field>
                <v-text-field :append-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="isShowPassword ? 'text' : 'password'" @click:append="isShowPassword = !isShowPassword"
                    v-model="password" style="margin-top: 60px; margin-left: 5vw; margin-right: 5vw; height: 10px;"
                    label="PW" variant="solo-filled" density="compact"></v-text-field>
                <div style="margin-top: 55px;">
                    <v-btn @click="SignUp" style="margin-right: 10px;" color="success" variant="tonal">
                        Sign Up
                    </v-btn>
                    <v-btn style="margin-left: 10px;" color="#9C27B0" variant="tonal">
                        Login
                    </v-btn>
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