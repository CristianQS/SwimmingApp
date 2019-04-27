<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md1>
        <v-text-field v-model="activity.series" label="Series" type="Number" value="1" 
          @focus="newActivity()"  required/>
      </v-flex>
      <v-flex xs12 sm2 md1>
        <v-text-field value="X" disabled/>
      </v-flex>
      <v-flex xs12 sm2 md2>
        <v-text-field v-model="activity.meters" label="Meters" type="Number" 
          @focus="newActivity()" required/>
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="newActivity()"
          v-model="activity.exercise"
          :items="['Legs', 'Deadpoint', 'Technique', 'Normal','Paddle','Pullbuoy','Fins']"
          label="Exercise"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="newActivity()"
          v-model="activity.style"
          :items="['Crawl', 'Backstroke', 'Breakstroke', 'Butterfly','Medley']"
          label="Style"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="newActivity()"
          v-model="activity.type"
          :items="['Warm up', 'Train','Calm']"
          label="Type"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="newActivity()"
          v-model="activity.rhythm"
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
  data () {
    return {
      activity : {
        series: 1,
        meters: 100,
        exercise: '',
        style: '',
        type: '',
        rhythm: '',
      }
    }
  },
  methods: {
    newActivity () {
      this.activity.name= `${this.activity.series}x${this.activity.meters}
       ${this.activity.style} (${this.activity.exercise})`
      this.$emit('activity',this.activity)
    }
  }
}
</script>

<style>

</style>
