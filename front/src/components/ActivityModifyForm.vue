<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12 sm2 md1>
        <v-text-field v-model="updatedActivity.series" label="Series" type="Number" value="1"
          @focus="passActivity()"
          :rules="[rules.required]"  
          required/>
      </v-flex>
      <v-flex xs12 sm2 md1>
        <v-text-field value="X" disabled/>
      </v-flex>
      <v-flex xs12 sm2 md2>
        <v-text-field v-model="updatedActivity.meters" label="Meters" type="Number"
          @focus="passActivity()"
          :rules="[rules.required]"
          required/>
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="passActivity()"
          v-model="updatedActivity.exercise"
          :items="['Legs', 'Deadpoint', 'Technique', 'Normal','Paddle','Pullbuoy','Fins']"
          label="Exercise"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="passActivity()"
          v-model="updatedActivity.style"
          :items="['Crawl', 'Backstroke', 'Breakstroke', 'Butterfly','Medley']"
          label="Style"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="passActivity()"
          v-model="updatedActivity.type"
          :items="['Warm up', 'Train','Calm']"
          label="Type"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="passActivity()"
          v-model="updatedActivity.rhythm"
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
  name: 'ActivityModifyForm',
  props: {
    activity: { type: Object, required: true }
  },
  data () {
    return {
      updatedActivity: Object.assign({}, this.activity),
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    passActivity () {
      if (this.updatedActivity.series.length > 0 && this.updatedActivity.meters > 0) {
        this.$emit('updatedActivity', this.updatedActivity)
      } else {
        this.$emit('updatedActivity', undefined)
      }
    }
  }
}
</script>

<style>

</style>
