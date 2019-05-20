<template>
  <div>
    <back-top-bar/>
    <pomodoro></pomodoro>
  </div>
</template>

<script>
import Pomodoro from '../components/Pomodoro.vue'
import BackTopBar from '../components/BackTopBar.vue'
import { mapActions, mapState } from 'vuex'
import { AUTHENTICATE, GET_USERS_BY_CLUB } from '../store/types/UserTypes'

export default {
  name: 'Chronometer',
  components: {
    Pomodoro,
    BackTopBar
  },
  methods: {
    ...mapActions({
      getUser: AUTHENTICATE,
      getUsersByClub: GET_USERS_BY_CLUB
    })
  },
  async created () {
    let user = await this.getUser()
    await this.getUsersByClub(user.club)
  }
}
</script>

<style>

</style>
