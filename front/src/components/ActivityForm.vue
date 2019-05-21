<template>
  <v-container grid-list-md>
    <v-layout wrap class="rowForm">
      <h2>Frencuently Used</h2>
      <v-flex xs12 sm12 md12 class="wrapper wrapper__center">
        <h3>Warn Up</h3>
        <div class="wrapper">
          <v-btn class="btn" @click="mapActivity(1, 400,'Normal', 'Crawl', 'Warm up','Normal')"
            dark small>400 Normal Crawl</v-btn>
          <v-btn class="btn" @click="mapActivity(1, 200,'Normal', 'Medley', 'Warm up','Normal')"
            dark small>200 Normal Medley</v-btn>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md12 class="wrapper wrapper__center">
        <h3>Train</h3>
        <div class="wrapper">
          <v-btn class="btn" @click="mapActivity(12, 50,'Normal', 'Crawl', 'Train','Max')"
            dark small>12x50 Normal Crawl Max</v-btn>
          <v-btn class="btn" @click="mapActivity(10, 100,'Fins', 'Crawl', 'Train','Normal')"
            dark small>10x100 Fins Crawl Normal</v-btn>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md12 class="wrapper wrapper__center">
        <h3>Calm</h3>
        <div class="wrapper">
          <v-btn class="btn" @click="mapActivity(1, 300,'Pullbuoy', 'Crawl', 'Calm','Soft')"
            dark small>300 Soft Pullbuoy Crawl</v-btn>
          <v-btn class="btn" @click="mapActivity(1, 100,'Normal', 'Crawl', 'Calm','Soft')"
            dark small>100 Soft Normal Crawl</v-btn>
        </div>
      </v-flex>
    </v-layout>
    <h2>Input Data</h2>
    <v-layout wrap >
      <v-flex xs12 sm2 md1>
        <v-text-field autofocus 
        v-model="activity.series" 
        label="Series" type="Number" value="1"
        @focus="passActivity()"
        :rules="[rules.required]"  
        required/>
      </v-flex>
      <v-flex xs12 sm2 md1>
        <v-text-field value="X" disabled/>
      </v-flex>
      <v-flex xs12 sm2 md2>
        <v-text-field v-model="activity.meters" 
        label="Meters" 
        type="Number"
        @focus="passActivity()"
        :rules="[rules.required]"
        required/>
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="passActivity()"
          v-model="activity.exercise"
          :items="['Legs', 'Deadpoint', 'Technique', 'Normal','Paddle','Pullbuoy','Fins']"
          label="Exercise"
          :rules="[rules.required]"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="passActivity()"
          v-model="activity.style"
          :items="['Crawl', 'Backstroke', 'Breakstroke', 'Butterfly','Medley']"
          label="Style"
          :rules="[rules.required]"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="passActivity()"
          v-model="activity.type"
          :items="['Warm up', 'Train','Calm']"
          label="Type"
          :rules="[rules.required]"
          required
        />
      </v-flex>
      <v-flex xs12 sm2>
        <v-select
          @focus="passActivity()"
          v-model="activity.rhythm"
          :items="['Max','Normal','Soft']"
          label="Rhythm"
          :rules="[rules.required]"
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
      activity: {
        series: 1,
        meters: 100,
        exercise: 'Normal',
        style: 'Crawl',
        type: 'Train',
        rhythm: 'Normal',
        training_id: this.$route.params.idTraining,
        plantraining_id: this.$route.params.idPlan
      },
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  methods: {
    passActivity () {
      this.$emit('passActivity', this.activity)
    },
    mapActivity (series, meters, exercise, style, type, rhythm) {
      this.activity.series = series
      this.activity.meters = meters
      this.activity.exercise = exercise
      this.activity.style = style
      this.activity.type = type
      this.activity.rhythm = rhythm
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
}
.wrapper__center{
  align-items: center;
  justify-content: space-between
}
.btn {
  width: 200px;
}
.rowForm {
  padding: 0 0 36px 0;
}
</style>
