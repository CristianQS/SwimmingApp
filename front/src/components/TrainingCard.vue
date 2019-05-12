<template>
  <v-card class="card">
    <v-layout align-center>
      <v-card-text @click="goTo(url,params)">
        <p class="headline font-weight-bold">{{training.name}}</p>
        <p class="font-weight-light">{{training.description}}</p>
        <p v-if="training.training_id"
        class="headline font-weight-bold">{{ `${training.series}x${training.meters}
       ${training.style} (${training.exercise})` }}</p>
      </v-card-text>
      <div>
        <v-btn color="black" v-if="training.training_id && user.userType === 2" 
          dark @click="goTo('CHRONOMETER',{})">
          <v-icon >alarm</v-icon>
        </v-btn>
        <v-btn v-if="user.userType === 2" color="blue" dark @click="clonePlan()">
          <v-icon >file_copy</v-icon>
        </v-btn>
        <form-dialog
          v-if="user.userType === 2"
          :methods="methods"
          :newUpdate="newUpdate"
        >
          <slot name="modify"></slot>
        </form-dialog>
        <v-btn v-if="user.userType === 2" color="red" dark @click="deletePlan()">
          <v-icon >delete</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-card>
</template>

<script>
import FormDialog from './FormDialog.vue'
import { mapState } from 'vuex'

export default {
  name: 'TrainingCard',
  props: {
    training: { type: Object, required: true },
    url: { type: String, required: false },
    params: { type: Object, required: false },
    methods: { type: Object, required: true },
    newUpdate: { type: Object, required: false }
  },
  components: {
    FormDialog
  },
  methods: {
    goTo (route, params) {
      if (route !== undefined) {
        this.$router.push({ name: route, params: params })
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
  },
  computed: {
    ...mapState({
      trainings: state => state.trainings,
      user: state => state.user
    })
  },
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
