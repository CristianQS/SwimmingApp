<template>
  <v-card class="card__notitle" hover>
    <v-card-text>
      <v-form>
        <v-text-field
              prepend-icon="person"
              label="Username"
              outline
        />
        <v-text-field
            prepend-icon="lock"
              label="Password"
              type='password'
              outline
        />
      </v-form>
  </v-card-text>
  <v-card-actions>
    <v-spacer/>
      <v-btn color="success">SignUp</v-btn>
      <v-btn color="primary">Login</v-btn>
  </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
.card__notitle {
  padding: 30px 0 10px 0;
}
</style>
