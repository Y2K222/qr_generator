<template>
  <v-app id="app">
    <v-main class="primary">
      <Navbar />
      <transition
      name="fade"
      mode="out-in"
      >
        <router-view>
        </router-view>
      </transition>
      <Footer/>
    </v-main>
  </v-app>
</template>
  
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
  
</style>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components:{
    Navbar , Footer
  },  
  data: () => ({
    //
  }),
};
</script>
