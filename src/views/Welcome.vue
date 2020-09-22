<template>
    <div class="welcome">
        <v-container >
            <Header/>
            <Bottom />
        </v-container>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Bottom from '@/components/Bottom'
export default {
    components : {
        Header , Bottom 
    }
}
</script>