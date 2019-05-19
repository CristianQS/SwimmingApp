<template>
  <div>
    <v-progress-circular
      v-if="loading" :size="150" :width="7"
      color="black" indeterminate
    />
    <div v-if="!loading" class="chartElem">
      <v-radio-group v-model="radio" row>
        <v-radio label="Times" value="line"></v-radio>
        <v-radio label="Distance" value="column"></v-radio>
      </v-radio-group>
      <div class="row">
        <highcharts v-if="radio == 'line'" class="chart" :options="lineOptions" :updateArgs="updateArgs"></highcharts>
        <highcharts v-if="radio == 'column'" class="chart" :options="columnOptions" :updateArgs="updateArgs"></highcharts>
      </div>
    </div>
  </div>
</template>

<script>
import { GET_CHRONO_BY_IDUSER,GET_CHRONO_BY_IDACTIVITY } from '../store/types/ChronoTypes'
import { GET_PHASES_BY_CHRONO } from '../store/types/PhaseTypes'
import { GET_ACTIVITIES } from '../store/types/ActivityTypes'
import { GET_PLANTRAININGS } from '../store/types/TrainingPlanTypes'
import { GET_TRAININGS } from '../store/types/TrainingTypes'
import { mapActions, mapState } from 'vuex'
import { line, column } from '../constants/chartOptions'

export default {
  name: 'Chart',
  props: {
    usersClub: { type:Array, required:true}
  },
  data () {
    return {
      radio: 'line',
      loading: false,
      chronosChart: [],
      lineOptions: line([]),
      columnOptions: column([]),
      phasesChart: [],
      updateArgs: [true, true, {duration: 1000}],
    }
  },
  methods: {
    ...mapActions({
      getChronoActivity: GET_CHRONO_BY_IDACTIVITY,
      getPhases: GET_PHASES_BY_CHRONO,
      getPlanTrainings: GET_PLANTRAININGS,
      getTrainings: GET_TRAININGS,
      getActivities: GET_ACTIVITIES
    })
  },
  computed: {
    days () {
      return this.chronosChart.map(chrono => {
        return chrono.timechrono
      })
    },
    timechrono () {
      let result = []
      this.chronosChart.forEach(chrono => {
        var a = chrono.time.replace(':','.').split('.')
        var seconds = (+a[0]) * 60+ (+a[1]) 
        var date = new Date(chrono.timechrono)
        result.push([date.toISOString().substring(0,10),seconds])
      })
      return result
    },
  },
  async created () {
    this.loading = true
    let users = this.usersClub.filter(user => user.value === 1 | user.value === 2)
  

      let plantrainings = await this.getPlanTrainings({id:users[1].value})
      plantrainings.forEach(async plantraining => {
        let trainings = await this.getTrainings(plantraining.id)
        // trainings.forEach( async training => {
        //   let activities = await  this.getActivities({plantraining_id:plantraining.id, training_id:training.id})
        //   console.log(activities)
        // })
      })
    
    // await this.activities.forEach(async activity => {
    //   let chronos = await this.getChronoActivity({activityid:activity.id}) 
    //   for (let i = 0; i < chronos.length; i++) {
    //     this.chronosChart.push(chronos[i])
    //     let phases = await this.getPhases(chronos[i].id)
    //     for (let j = 0; j < phases.length; j++) {
    //       this.phasesChart.push(phases[j])
    //     } 
    //   }
    // })
    // this.phasesChart = this.phasesChart.filter()
    this.loading = false
  }
}
</script>

<style scoped>
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
#colorPicker {
  border: 0;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
}
.numberInput {
  width: 30px;
}
</style>
