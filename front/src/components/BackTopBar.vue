<template>
    <v-toolbar app>
        <v-btn icon @click="closeDialog" >
            <v-icon>arrow_back</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
export default {
  name: 'BackTopBar',
  methods: {
    closeDialog () {
      this.$router.go(-1)
    }
  }
}
</script>