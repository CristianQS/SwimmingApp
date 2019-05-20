<template>
  <v-card class="card">
    <v-layout>
      <v-card-text>
        <v-layout>
          <v-flex xs4 sm2 md2>
            <v-img :src="require('@/assets/user.png')"
            width="100"
            height="100"
            class="card__img"
            />
          </v-flex>
          <v-flex xs6 offset-xs1 sm2 md1 offset-md1 lg1 offset-lg0 class="wrapper wrapper__center">
              <p class="headline font-weight-bold">{{userState.username}}</p>
              <p class="font-weight-light">{{userState.email}}</p>
              <user-edit-dialog @modifyUser="modifyUser"/>
          </v-flex>
        </v-layout>
        <v-flex xs12 sm12 md12 class="wrapper">
          <h3>Description</h3>
          {{userState.description}}
        </v-flex>
      </v-card-text>
    </v-layout>
  </v-card>
</template>

<script>
import UserSettings from './UserSettings.vue'
import UserEditDialog from './UserEditDialog.vue'
import { mapActions, mapState } from 'vuex'
import { AUTHENTICATE } from '../store/types/UserTypes'

export default {
  name: 'CardProfile',
  components: {
    UserSettings,
    UserEditDialog
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    },
    modifyUser (value) {
      this.$emit('modifyUser', value)
    },
    ...mapActions({
      getUser: AUTHENTICATE
    })
  },
  computed: {
    ...mapState({
      userState: state => state.user
    })
  }
}
</script>

<style scoped>
.card {
  padding: 10px 5px;
}
.card__img {
  margin: 10px 0;
}
.wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap
}
.wrapper__center{
  align-items: center
}
</style>
