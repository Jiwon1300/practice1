<template>
    <div style="text-align: center; margin-top: 15px;">
        <v-card elevation="10" style="padding: 20px; margin-left: 15vw; margin-right: 15vw; border-radius: 10px;">
            <div>
                <h2 style="margin-bottom: 15px;">Login</h2>
                <v-text-field style="margin-left: 5vw; margin-right: 5vw; height: 10px;" label="ID" variant="solo-filled"
                    density="compact"></v-text-field>
                <v-text-field style="margin-top: 60px; margin-left: 5vw; margin-right: 5vw; height: 10px;" label="PW"
                    variant="solo-filled" density="compact"></v-text-field>
                <div style="margin-top: 55px;">
                    <v-btn style="margin-right: 10px;" color="success" variant="tonal">
                        LogIn
                    </v-btn>
                    <v-btn @click="$router.push('/SignUp')" style="margin-left: 10px;" color="#9C27B0" variant="tonal">
                        Sign Up
                    </v-btn>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 현 페이지에서 사용해야할 데이터
        }
    },
    methods:{
        // 현 페이지에서 사용할 함수들
    },

}
</script>

<style>

</style>