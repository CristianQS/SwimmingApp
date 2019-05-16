<template>
  <v-container grid-list-md>
    <v-layout wrap>
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
