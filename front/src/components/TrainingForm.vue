<template>
  <v-container grid-list-md>
    <!-- <h3>Templates</h3> -->
    <v-layout wrap>
      <!-- <v-flex xs12 sm4 md4>
        <v-btn block dark large @click="getSpeedTraining()" >Speed</v-btn>
      </v-flex>
      <v-flex xs12 sm4 md4>
        <v-btn block dark large @click="getTechniqueTraining()">Technique</v-btn>
      </v-flex>
      <v-flex xs12 sm4 md4>
        <v-btn block dark large @click="getEnduranceTraining()">Endurance</v-btn>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <h3>Contain</h3>
        <div v-for="activity in training.activitities" :key="activity.name">{{activity.name}}</div>
      </v-flex> -->

      <v-flex xs12 sm2 md12>
        <h3>Name</h3>
        <v-text-field
        @focus="newTraining()"
        autofocus
        v-model="training.name" label="Name" required/>
      </v-flex>
      <date-time-picker
        :title="'Fecha de Entreno'"
        @datePicker="getEntryDate"
      />
      <v-flex xs12 sm2 md12>
        <h3>Description</h3>
        <v-textarea
        @focus="newTraining()"
        outline v-model="training.description" label="Name" required/>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import DateTimePicker from './DateTimePicker.vue'

export default {
  name: 'TrainingForm',
  components: {
    DateTimePicker
  },
  data () {
    return {
      training: {
        name: 'Training',
        description: 'In this training will work the speed',
        timetraining: 0
      }
    }
  },
  methods: {
    getSpeedTraining () {
      this.training.activitities = [
        {
          name: 'speed'
        }
      ]
      this.$emit('training', this.training)
    },
    getTechniqueTraining () {
      this.training.activitities = [
        {
          name: 'technique'
        }
      ]
      this.$emit('training', this.training)
    },
    getEnduranceTraining () {
      this.training.activitities = [
        {
          name: 'endurance'
        }
      ]
      this.$emit('training', this.training)
    },
    newTraining () {
      this.$emit('training', this.training)
    },
    getEntryDate (value) {
      this.training.timetraining = value
    }
  }
}
</script>

<style>

</style>
