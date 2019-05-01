<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md1>
        <v-text-field v-model="cloneActivity.series" label="Series" type="Number" value="1" 
          @focus="newActivity()"  required/>
      </v-flex>
      <v-flex xs12 sm2 md1>
        <v-text-field value="X" disabled/>
      </v-flex>
      <v-flex xs12 sm2 md2>
        <v-text-field v-model="cloneActivity.meters" label="Meters" type="Number" 
          @focus="newActivity()" required/>
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="newActivity()"
          v-model="cloneActivity.exercise"
          :items="['Legs', 'Deadpoint', 'Technique', 'Normal','Paddle','Pullbuoy','Fins']"
          label="Exercise"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="newActivity()"
          v-model="cloneActivity.style"
          :items="['Crawl', 'Backstroke', 'Breakstroke', 'Butterfly','Medley']"
          label="Style"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="newActivity()"
          v-model="cloneActivity.type"
          :items="['Warm up', 'Train','Calm']"
          label="Type"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="newActivity()"
          v-model="cloneActivity.rhythm"
          :items="['Max','Normal','Soft']"
          label="Rhythm"
          required
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ActivityForm',
  props: {
    activity: { type: Object, required: false, default: {}}
  },
  data () {
    return {
      cloneActivity : Object.assign({},this.activity)
    }
  },
  methods: {
    newActivity () {
      this.$emit('activity',this.cloneActivity)
    }
  }
}
</script>

<style>

</style>
