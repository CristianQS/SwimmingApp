<template>
  <v-card class="card">
    <v-layout>
      <v-card-text @click="goTo(url,params)">
        <p class="headline font-weight-bold">{{training.name}}</p>
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

export default {
  name: 'TrainingCard',
  props: {
    training: { type: Object, required: true },
    url: { type: String, required: false },
    params: { type: Object, required: true},
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
      return await this.methods.delete(this.params.id)
    },
    async clonePlan () {
      let plantraining = {
        user: [1],
        name: this.params.name,
        description: this.params.description,
      }
      return await this.methods.clone(plantraining)
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
