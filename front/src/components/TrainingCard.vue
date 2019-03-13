<template>
  <v-card class="card">
    <v-layout>
      <v-card-text @click="goTo(url)">
        <p class="headline font-weight-bold">{{training.name}}</p>
      </v-card-text>
      <v-btn color="blue" dark @click="methods.clone">Clonar</v-btn>
      <form-dialog>
        <slot name="modify"></slot>
      </form-dialog>
      <v-btn color="red" dark @click="methods.delete">Eliminar</v-btn>
    </v-layout>
  </v-card>
</template>

<script>
import FormDialog from './FormDialog.vue'

export default {
  name: 'TrainingCard',
  props: {
    training: { type: Object, required: true },
    url: { type: String, required: false },
    methods: { type: Object, required: true }
  },
  components: {
    FormDialog
  },
  methods: {
    goTo (route) {
      if (route !== undefined) {
        this.$router.push(route)
      }
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
