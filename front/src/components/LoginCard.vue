<template>
  <v-card class="card__notitle" hover>
    <v-card-text>
      <v-form>
        <v-text-field
              id="user_id"
              prepend-icon="person"
              label="Username"
              outline
        />
        <v-text-field
            id="user_passwd"
            prepend-icon="lock"
              label="Password"
              type='password'
              outline
        />
      </v-form>
  </v-card-text>
  <v-card-actions>
    <v-spacer/>
      <v-btn id="btn_signup" color="success" @click="goTo('/signup')">SignUp</v-btn>
      <v-btn id="btn_login" color="primary" @click="goTo('/profile')">Login</v-btn>
  </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginCard',
  methods: {
    goTo (route) {
      this.$router.push(route)
    },
    ...mapActions({

    })
  }
}
</script>

<style>
.card__notitle {
  padding: 30px 0 10px 0;
}
</style>
