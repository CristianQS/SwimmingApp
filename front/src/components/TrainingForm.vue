<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md12>
        <h3>Name</h3>
        <v-text-field
        @focus="newTraining()"
        counter
        maxlength="20"
        :rules="[rules.required, rules.counter]"
        autofocus
        v-model="training.name" label="*Name" required/>
      </v-flex>
      <date-time-picker
        :title="'Fecha de Entreno'"
        @datePicker="getEntryDate"
      />
      <v-flex xs12 sm2 md12>
        <h3>Description</h3>
        <v-textarea
        @focus="newTraining()"
        counter
        maxlength="150"
        :rules="[rules.counterDescription]"
        outline v-model="training.description" label="*Description"/>
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
      },
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        counterDescription: value => value.length <= 150 || 'Max 150 characters'
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
