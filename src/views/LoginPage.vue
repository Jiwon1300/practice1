<template>
    <div style="text-align: center; margin-top: 15px;">
        <v-card elevation="10" style="padding: 20px; margin-left: 15vw; margin-right: 15vw; border-radius: 10px;">
            <div>
                <h2 style="margin-bottom: 15px;">Login</h2>
                <v-text-field style="margin-left: 5vw; margin-right: 5vw; " label="ID" variant="outlined"
                    density="compact"></v-text-field>
                <v-text-field style=" margin-left: 5vw; margin-right: 5vw; " label="PW" variant="outlined"
                    density="compact"></v-text-field>
                <div style="margin-right: 5vw; margin-left: 5vw;">
                    <v-btn style="width: 100%;" size="large" color="success" variant="tonal">
                        LogIn
                    </v-btn>
                </div>
                <div style="text-align: right; margin-top: 5px; margin-right: 5vw; cursor: pointer;" @click="$router.push('/signup')">
                    계정이 없으신가요?
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 현 페이지에서 사용해야할 데이터
        }
    },
    methods: {
        // 현 페이지에서 사용할 함수들
    },

}
</script>

<style></style>