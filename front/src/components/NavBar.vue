<template>
  <v-toolbar app>
    <v-toolbar-title @click="goTo('/profile')" class="headline">
      <span class="cursor">SwimPlan</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-btn @click="goTo('/search')" flat icon>
      <v-icon color="blue">search</v-icon>
    </v-btn> -->
    <v-btn @click="goTo('/profile')" flat icon>
      <v-icon color="blue">person</v-icon>
    </v-btn>
    </v-toolbar>
</template>

<script>

export default {
  name: 'NavBar',
  components: {

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
