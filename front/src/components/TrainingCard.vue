<template>
  <v-card class="card">
  <v-layout>
    <v-card-text>
      <p class="headline font-weight-bold">{{training.name}}</p>
    </v-card-text>
    <v-btn color="green">Clonar</v-btn>
    <v-btn color="yellow">Modificar</v-btn>
    <v-btn color="red">Eliminar</v-btn>
  </v-layout>
</v-card>
</template>

<script>
export default {
  name: 'TrainingCard',
  props: {
    training: { type: Object, required: true }
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
