<template>
  <v-container grid-list-md>
    <h3>Templates</h3>
    <v-layout wrap>
      <v-flex xs12 sm12 md12>
        <h3>Contain</h3>
        <div v-for="activity in training.activitities" :key="activity.name">{{activity.name}}</div>
      </v-flex>
      <v-flex xs12 sm2 md12>
        <h3>Name</h3>
        <v-text-field 
        @focus="newTraining()" 
        v-model="newtraining.name" label="Name" required/>
      </v-flex>
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
export default {
  name: 'TrainingForm',
  props: {
    training: { type:Object, required: true }
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
    }
  },
}
</script>
