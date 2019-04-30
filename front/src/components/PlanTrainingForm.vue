<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md12>
        <h3>Name</h3>
        <v-text-field 
          @focus="newPlanTraining()" 
          v-model="plantraining.name" 
          label="Name" 
          required/>
      </v-flex>
      <v-flex xs12 sm2 md12>
        <h3>Description</h3>
        <v-textarea 
          @focus="newPlanTraining()"
          outline 
          v-model="plantraining.description" 
          label="Description" 
          required/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'PlanTrainingForm',
  data () {
    return {
      plantraining: {
        user: [1,2],
        name: '',
        description: '',
      },
    }
  },
  methods: {
    newPlanTraining () {
      this.$emit('plantraining',this.plantraining)
    }
  },
}
</script>

<style>

</style>
