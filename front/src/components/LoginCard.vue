<template>
  <v-card class="card__notitle" hover>
    <v-card-text>
      <v-form>
        <v-text-field
          id="user_id"
          v-model="user.email"
          prepend-icon="person"
          label="Email"
          outline
          @keydown.enter="makeLogin"
          :rules="[rules.required, rules.email]"
          :error-messages="emailErrors"
        />
        <v-text-field
          id="user_passwd"
          v-model="user.password"
          :error-messages="emailErrors"
          :rules="[rules.required]"
          prepend-icon="lock"
          label="Password"
          type='password'
          outline
          @keydown.enter="makeLogin"
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
import { mapActions, mapState } from 'vuex'
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
      errors: [],
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    },
    async makeLogin () {
      await this.login(Object.assign({}, this.user))
      if (sessionStorage.getItem('token')) {
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
