<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md12>
        <h3>Name</h3>
        <v-text-field 
        @focus="newTraining()" 
        v-model="newtraining.name" label="Name" required/>
      </v-flex>
      <date-time-picker
        :title="'Fecha de Entreno'"
        @datePicker="getEntryDate"
      />
      <v-flex xs12 sm2 md12>
        <h3>Description</h3>
        <v-textarea 
        @focus="newTraining()" 
        outline v-model="newtraining.description" label="Name" required/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DateTimePicker from './DateTimePicker.vue'
export default {
  name: 'TrainingForm',
  props: {
    training: { type:Object, required: true }
  },
  components: {
    DateTimePicker
  },
  data () {
    return {
      newtraining: Object.assign({},this.training)
    }
  },
  methods: {
    newTraining () {
      let response = {
        id: this.newtraining.id,
        training: this.newtraining
      }
      this.$emit('updateInstance',response)
    },
    getEntryDate (value) {
      this.newtraining.timetraining = value
    }
  },
}
</script>
