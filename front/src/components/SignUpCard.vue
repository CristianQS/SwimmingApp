<template>
 <v-card class="card__notitle" hover>
    <v-card-text>
      <v-form>
        <v-text-field
          prepend-icon="person"
          label="Username"
          v-model="newUser.username"
          outline
          counter
          maxlength="20"
          :rules="[rules.required, rules.counter]"
        />
        <v-text-field
          prepend-icon="email"
          label="Email"
          type='email'
          v-model="newUser.email"
          :rules="[rules.required, rules.email]"
          outline
        />
        <v-text-field
          prepend-icon="lock"
          label="Password"
          type='password'
          v-model="password"
          :rules="[rules.required]"
          outline
        />
        <v-text-field
          prepend-icon="lock"
          label="Repeat Password"
          type='password'
          v-model="confirmPassword"
          :rules="[rules.required]"
          outline
        />
        <v-select
          prepend-icon="flag"
          label="Rol"
          :items="roles"
          v-model="newUser.userType"
          outline
        />
        <v-select
          prepend-icon="group"
          label="Club"
          :items="club"
          v-model="newUser.club"
          outline
        />
      </v-form>
  </v-card-text>
  <v-card-actions>
    <v-spacer/>
      <v-btn color="error" @click="goTo('/auth/login')">Cancel</v-btn>
      <v-btn color="primary" @click="createUser()">Login</v-btn>
  </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_SIGNUP } from '../store/types/UserTypes'
export default {
  name: 'SignUpCard',
  data () {
    return {
      newUser: {
        username: '',
        email: '',
        userType: 1,
        club: 1,
        password: ''
      },
      confirmPassword: '',
      password: '',
      roles: [{ value: 1, text: 'swimmer' }, { value: 2, text: 'trainer' }],
      club: [{ value: 1, text: 'CN Las Palmas' }, { value: 2, text: 'CN Fainagua C. Telde' },
        { value: 3, text: 'CN Salinas Sta.Lucia' }, { value: 4, text: 'CN Metropole' }],
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
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
    ...mapActions({
      signUp: USER_SIGNUP
    }),
    async createUser () {
      try {
        this.newUser.password = this.password
        let response = await this.signUp(this.newUser)
        this.goTo('/profile')
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>

<style>

</style>
