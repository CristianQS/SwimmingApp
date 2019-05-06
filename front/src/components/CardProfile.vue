<template>
  <v-card class="card">
    <v-layout> 
      <v-card-text>
        <v-layout align-center wrap>
          <v-flex xs2 sm4 md1>
            <v-img :src="require('@/assets/user.png')"
            width="100"
            height="100"
            class="card__img"
            />
          </v-flex>
          <v-flex xs2 offset-xs3 sm4 offset-sm2 md1>
              <p class="headline font-weight-bold">{{user.username}}</p>
          </v-flex>
          <v-flex xs2 offset-xs3 sm4 offset-sm2 md1>
            <v-layout>
            <v-btn depressed color="grey">Edit Profile</v-btn>
            <user-settings/>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-flex xs12 sm12 md12>
          <h3>Description</h3>
          {{user.description}}
        </v-flex>
      </v-card-text>
    </v-layout>
  </v-card>
</template>

<script>
import UserSettings from './UserSettings.vue'
import { mapState } from 'vuex'

export default {
  name: 'CardProfile',
  components: {
    UserSettings
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>

<style scoped>
.card {
  padding: 10px 5px;
}

</style>
