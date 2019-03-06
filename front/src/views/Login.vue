<template>
  <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <login-card/>
      </v-flex>
  </v-layout>
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

</style>
