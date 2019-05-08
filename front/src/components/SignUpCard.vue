<template>
 <v-card class="card__notitle" hover>
    <v-card-text>
      <v-form>
        <v-text-field
            prepend-icon="person"
              label="Username"
              v-model="newUser.username"
              outline
        />
        <v-text-field
            prepend-icon="email"
              label="Email"
              type='email'
              v-model="newUser.email"
              outline
        />
        <v-text-field
            prepend-icon="lock"
              label="Password"
              type='password'
              v-model="password"
              outline
        />
        <v-text-field
            prepend-icon="lock"
              label="Repeat Password"
              type='password'
              v-model="confirmPassword"
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
      newUser : {
        username: '',
        email: '',
        userType: '',
        club: '',
        password: ''
      },
      confirmPassword: '',
      password: '',
      roles: [{value:1, text:'swimmer'}, {value:2, text:'trainer'}],
      club: [{ value: 1, text:'CN Las Palmas'}, {value: 2, text:'CN Fainagua C. Telde'},
      {value: 3, text: 'CN Salinas Sta.Lucia'},{value: 4, text: 'CN Metropole'}]
    }
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    },
    ...mapActions({
      signUp : USER_SIGNUP
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
