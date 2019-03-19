<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md12>
        <v-text-field label="Name" required/>
      </v-flex>
      <v-flex xs12 sm2 md12>
        <h3>Templates</h3>
        <v-text-field label="Name" required/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'TrainingForm'
}
</script>

<style>

</style>
