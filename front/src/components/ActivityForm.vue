<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md1>
        <v-text-field label="Series" type="Number" value="1" required/>
      </v-flex>
      <v-flex xs12 sm2 md1>
        <v-text-field value="X" disabled/>
      </v-flex>
      <v-flex xs12 sm2 md2>
        <v-text-field label="Meters" type="Number" value="100" required/>
      </v-flex>
      <v-flex xs12 sm3>
        <v-select
          :items="['Legs', 'Deadpoint', 'Technique', 'Normal','Paddle','Pullbuoy','Fins']"
          label="Type"
          required
        ></v-select>
      </v-flex>
      <v-flex xs12 sm3>
        <v-select
          :items="['Crawl', 'Backstroke', 'Breakstroke', 'Butterfly']"
          label="Style"
          required
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ModifyForm'
}
</script>

<style>

</style>
