<template>
   <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <sign-up-card></sign-up-card>
      </v-flex>
   </v-layout>
</template>

<script>
import SignUpCard from '../components/SignUpCard.vue'

export default {
  name: 'SignUp',
  components: {
    SignUpCard
  }
}
</script>

<style>

</style>
