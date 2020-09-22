<template>
    <div class="bottom">
        <v-layout row warp class="ma-5 mt-15">
            <v-flex xs6>
                <v-layout row>
                    <v-flex xs12><v-icon class="blue--text mr-3 my-3">circle</v-icon><span class="snow--text">ဖောင်ကိုတစ်ခါ ဖြည့်ပါ</span></v-flex>
                    <v-flex xs12><v-icon class="green--text mr-3 my-3">circle</v-icon><span class="snow--text">QR code ထုတ်ပြီး</span></v-flex>
                    <v-flex xs12><v-icon class="blue--text mr-3 my-3">circle</v-icon><span class="snow--text">လွယ်ကူစွာ ပြန်အသုံးပြုပါ</span></v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs6>
                <v-layout row>
                    <v-spacer></v-spacer>
                    <v-flex xs8>
                        <v-btn link to="/setup" outlined large color="blue" class="mt-15">စတင်ရန် <v-icon>launch</v-icon> </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<style>

.bottom{
    margin-top: 100px;
}

</style>