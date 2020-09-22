<template>
    <nav>
        <v-app-bar flat app dark class="primary pt-3">
            <v-spacer></v-spacer>
            <v-app-bar-title class="font-weight-light">
                <v-btn
                   small  class= "text-md-button text-xs-caption white--text" text v-for="link in links" :key="link.text" link :to="link.route"
                >
                    {{link.text}}
                    <v-icon>{{link.icon}}</v-icon>
                </v-btn>
            </v-app-bar-title>
        </v-app-bar>
    </nav>
</template>
<script>
export default{
    data(){
        return{
            drawer : false,
            links : [
            {
                route : '/' , text : 'ပင်မ' , icon : ''
            },
            {
                route : '/learn-more' , text : 'ပိုမိုသိရှိရန်' , icon : '' 
            },
            {
                route : '/help' , text : 'အကူအညီ' , icon : ''
            },
            ] 
        }
    }
}

</script>