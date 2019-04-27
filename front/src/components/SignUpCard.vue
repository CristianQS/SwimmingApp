<template>
 <v-card class="card__notitle" hover>
    <v-card-text>
      <v-form>
        <v-text-field
            prepend-icon="email"
              label="Email"
              type='email'
              outline
        />
        <v-text-field
            prepend-icon="lock"
              label="Password"
              type='password'
              outline
        />
        <v-text-field
            prepend-icon="lock"
              label="Repeat Password"
              type='password'
              outline
        />
        <v-text-field
            prepend-icon="flag"
              label="Rol"
              outline
        />
      </v-form>
  </v-card-text>
  <v-card-actions>
    <v-spacer/>
      <v-btn color="error" @click="goTo('/auth/login')">Cancel</v-btn>
      <v-btn color="primary" @click="goTo('/profile')">Login</v-btn>
  </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'SignUpCard',
  methods: {
    goTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>

</style>
