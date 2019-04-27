<template>
<div>
  <v-layout align-center justify-center class="space">
    <div class="Logo"></div>
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
  border: 2px solid black;
  border-radius: 50%;
  height: 200px;
  width: 200px;
}

.space {
  margin: 30px 0;
}
</style>
