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
        v-model="newtraining.name" label="*Name" required
        autofocus
        />
      </v-flex>
      <date-time-picker
        :title="'Fecha de Entreno'"
        :selectedDate="new Date(newtraining.timetraining).toISOString().substr(0, 10)"
        @datePicker="getEntryDate"
      />
      <v-flex xs12 sm2 md12>
        <h3>Description</h3>
        <v-textarea
        @focus="newTraining()"
        counter
        maxlength="150"
        :rules="[rules.counterDescription]"
        outline v-model="newtraining.description" label="*Description"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DateTimePicker from './DateTimePicker.vue'
export default {
  name: 'TrainingModifyForm',
  props: {
    training: { type: Object, required: true }
  },
  components: {
    DateTimePicker
  },
  data () {
    return {
      newtraining: Object.assign({}, this.training),
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        counterDescription: value => value.length <= 150 || 'Max 150 characters'
      }
    }
  },
  methods: {
    newTraining () {
      let response = {
        id: this.newtraining.id,
        training: this.newtraining
      }
      if (this.newtraining.name.length > 0) {
        this.$emit('updateInstance', response)
      } else {
        this.$emit('updateInstance', undefined)
      }
    },
    getEntryDate (value) {
      this.newtraining.timetraining = value
      this.newTraining()
    }
  }
}
</script>
