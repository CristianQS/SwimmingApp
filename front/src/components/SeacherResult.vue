<template>
  <v-card class="card">
    <v-layout>
      <v-img :src="user.img"
          width="75"
          height="75"
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
  name: 'SeacherResult',
  props: {
    user: { type: Object, required: true }
  }
}
</script>

<style>
.card {
  margin: 10px 0;
}
.card__img {
  margin: 20px 0 0 10px;
}
</style>
