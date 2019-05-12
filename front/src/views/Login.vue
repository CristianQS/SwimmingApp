<template>
<div>
  <v-layout align-center justify-center class="space">
    <img class="Logo" src="../assets/logo.png" alt="" srcset="">
  </v-layout>
  <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <login-card/>
      </v-flex>
  </v-layout>
  </div>
</template>

<script>
import LoginCard from '../components/LoginCard.vue'

export default {
  name: 'Login',
  components: {
    LoginCard
  }
}
</script>

<style>
.Logo {
  height: 300px;
  width: 300px;
}

.space {
  margin: 30px 0;
}
</style>
