<template>
  <v-card class="card__notitle" hover>
    <v-card-text>
      <v-form>
        <v-text-field
              id="user_id"
              v-model="user.email"
              prepend-icon="person"
              label="Username"
              :error-messages="emailErrors"
              outline
        />
        <v-text-field
            id="user_passwd"
            v-model="user.password"
            :error-messages="emailErrors"
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
      <v-btn id="btn_login" color="primary" @click="makeLogin()">Login</v-btn>
  </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_LOGIN } from '../store/types/UserTypes'
export default {
  name: 'LoginCard',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      check: undefined,
      errors: []
    }
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    },
    makeLogin () {
      if(this.user.email === 'cris' && this.user.password === 'prueba') {
        this.goTo('/profile')
      } else {
        this.check = false
      }
    },
    ...mapActions({
      login: USER_LOGIN
    })
  },
  computed: {
    emailErrors () {
      const errors = []
      this.user.email === '' && errors.push('empty')
      this.check === false && errors.push('User does not exist')
      return errors
    }
  }
}
</script>

<style>
.card__notitle {
  padding: 30px 0 10px 0;
}
</style>
