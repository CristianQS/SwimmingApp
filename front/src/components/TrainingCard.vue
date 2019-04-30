<template>
  <v-card class="card">
    <v-layout>
      <v-card-text @click="goTo(url,params)">
        <p class="headline font-weight-bold">{{training.name}}</p>
      </v-card-text>
      <v-btn color="blue" dark @click="methods.clone">Clonar</v-btn>
      <form-dialog>
        <slot name="modify"></slot>
      </form-dialog>
      <v-btn color="red" dark @click="deletePlan()">Eliminar</v-btn>
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
    params: { type: Object, required: true},
    methods: { type: Object, required: true }
  },
  components: {
    FormDialog
  },
  methods: {
    goTo (route,params) {
      if (route !== undefined) {
        console.log(route,params)
        this.$router.push({name: route, params: params})
      }
    },
    deletePlan () {
      return this.methods.delete(this.params.id)
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
