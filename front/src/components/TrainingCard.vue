<template>
  <v-card class="card">
  <v-layout>
    <v-card-text @click="goTo('/activities')">
      <p class="headline font-weight-bold">{{training.name}}</p>
    </v-card-text>
    <v-btn color="green">Clonar</v-btn>
    <form-dialog/>
    <v-btn color="red">Eliminar</v-btn>
  </v-layout>
</v-card>
</template>

<script>
import FormDialog from './FormDialog.vue'

export default {
  name: 'TrainingCard',
  props: {
    training: { type: Object, required: true }
  },
  components: {
    FormDialog
  },
  methods: {
    goTo (route) {
      this.$router.push(route)
    }
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
