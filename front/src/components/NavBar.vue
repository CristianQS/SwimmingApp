<template>
  <v-toolbar app>
    <v-toolbar-title @click="goTo('/profile')" class="headline">
      <span class="cursor">SwimPlan</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <user-settings/>
    </v-toolbar>
</template>

<script>
import UserSettings from './UserSettings.vue'

export default {
  name: 'NavBar',
  components: {
    UserSettings
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
  .cursor {
    cursor: pointer;
  }
</style>
