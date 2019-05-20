<template>
  <v-card class="card">
    <v-layout align-center>
      <v-flex xs6 sm6 md8 lg9>
      <v-card-text @click="goTo(url,params)">
        <p class="headline font-weight-bold">{{training.name}}</p>
        <p class="font-weight-light">{{training.description}}</p>
        <p v-if="training.training_id"
        class="headline font-weight-bold">{{ `${training.series}x${training.meters}
       ${training.style} (${training.exercise})` }}</p>
      </v-card-text>
      </v-flex>
      <v-flex xs6 sm6 md4 lg3 class="wrapper wrapper--row">
        <form-dialog
          v-if="user.userType === 2"
          :message="message"
          :methods="methods"
          :newUpdate="newUpdate"
        >
          <slot name="modify"></slot>
        </form-dialog>
        <div class="wrapper wrapper--row">
          <div class="grid wrapper wrapper__center">
            <v-btn class="v-btn" color="black" v-if="training.training_id"
              dark @click="goTo('CHRONOMETER', params)">
              <v-icon >alarm</v-icon>
            </v-btn>
            <v-btn class="v-btn" v-if="user.userType === 2" color="blue" dark @click="clonePlan()">
              <v-icon >file_copy</v-icon>
            </v-btn>
            <v-btn class="v-btn" v-if="training.training_id"
              color="blue darken-4" dark  @click="goTo('CHRONOSEETIMES', params)">
              <v-icon>visibility</v-icon>
            </v-btn>
            <v-btn class="v-btn" v-if="user.userType === 2" color="red" dark @click="deletePlan()">
              <v-icon >delete</v-icon>
            </v-btn>
          </div>
        </div>
      </v-flex>
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
    newUpdate: { type: Object, required: false },
    message: { type: String, required: true }
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
      if (!this.training.training_id) {
        var result = confirm(`You are going to delete ${this.training.name}.
        Are you sure about that?`)
      } else {
        var result = confirm(`You are going to delete ${this.training.series}x${this.training.meters}${this.training.style} (${this.training.exercise}). 
        Are you sure about that?`)
      }
      if (result) {
        return await this.methods.delete(this.training)
      }
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
  }
}
</script>

<style scoped>
.card {
  margin: 10px 0;
}
.card__img {
  margin: 20px 0 0 10px;
}
.v-btn {
  min-width: 15px;
  width:60px;
}
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.wrapper--row {
  flex-direction: row;
}
.wrapper__center {
  align-items: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2,minmax(0,80px));
  grid-template-rows: auto;
}
</style>
