<template>
  <v-card class="card">
    <v-layout>
      <v-card-text @click="goTo(url,params)">
        <p class="headline font-weight-bold">{{training.name}}</p>
        <p v-if="training.training_id" 
        class="headline font-weight-bold">{{ `${training.series}x${training.meters}
       ${training.style} (${training.exercise})` }}</p>
      </v-card-text>
      <v-btn color="blue" dark @click="clonePlan()">Clonar</v-btn>
      <form-dialog
        :methods="methods"
        :newUpdate="newUpdate"
      >
        <slot name="modify"></slot>
      </form-dialog>
      <v-btn color="red" dark @click="deletePlan()">Eliminar</v-btn>
    </v-layout>
  </v-card>
</template>

<script>
import FormDialog from './FormDialog.vue'
import { constants } from 'fs';

export default {
  name: 'TrainingCard',
  props: {
    training: { type: Object, required: true },
    url: { type: String, required: false },
    params: { type: Object, required: false},
    methods: { type: Object, required: true },
    newUpdate: { type: Object, required: false },
  },
  components: {
    FormDialog
  },
  methods: {
    goTo (route,params) {
      if (route !== undefined) {
        this.$router.push({name: route, params: params})
      }
    },
    async deletePlan () {
      return await this.methods.delete(this.training)
    },
    async clonePlan () {
      return await this.methods.clone(this.training)
    }
  },
  filters: {
    activity (training) {
      return `${training.series}x${training.meters}
       ${training.style} (${training.exercise})`
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
