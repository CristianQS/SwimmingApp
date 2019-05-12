<template>
    <v-menu offset-y>
        <v-icon
            color="grey lighten-1"
            slot="activator"
            >
            settings
        </v-icon>
        <v-list>
          <v-list-tile v-for="option in options" :key="option.name" @click="option.action">
            <v-list-tile-title>{{ option.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-menu>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_LOGOUT } from '../store/types/UserTypes'

export default {
  name: 'UserSettings',
  data () {
    return {
      options: [
        { name: 'Cerrar sesión', action: this.UserLogOut }
      ]
    }
  },
  methods: {
    goTo () {
      this.$router.push('/auth/login')
    },
    UserLogOut () {
      this.logout()
      this.goTo()
    },
    ...mapActions({
      logout: USER_LOGOUT
    })
  }
}
</script>
