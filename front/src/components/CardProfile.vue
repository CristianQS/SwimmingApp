<template>
  <v-card class="card">
    <v-layout>
      <v-img :src="require('@/assets/user.png')"
          class="card__img"
      />
      <v-card-text>
        <p class="headline font-weight-bold">{{user.name}}</p>
        <p class="font-weight-light">{{user.nick}}</p>
      </v-card-text>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'CardProfile',
  props: {
    user: { type: Object, required: true }
  }
}
</script>

<style>

</style>
