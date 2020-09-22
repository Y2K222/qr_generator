<template>
  <v-footer class="primary" absolute :fixed="false">
    <v-spacer></v-spacer>
    <div class="footer-text snow--text">Techmation Myanmar &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>
<style>
.footer-text{
    font-size: 10px;
}
</style>