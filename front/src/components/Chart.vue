<template>
  <div>
    <div class="wrapper wrapper__center">
      <v-progress-circular
        v-if="loading" :size="150" :width="7"
        color="black" indeterminate
      />
    </div>
    <v-card v-if="!loading" class="chartElem">
      <v-radio-group class="wrapper wrapper__center" v-model="radio" row>
        <v-radio label="Times" value="line"></v-radio>
        <v-radio label="Distance" value="column"></v-radio>
      </v-radio-group>
      <div class="row">
        <highcharts v-if="radio == 'line'" class="chart" :options="lineOptions" :updateArgs="updateArgs"></highcharts>
        <highcharts v-if="radio == 'column'" class="chart" :options="columnOptions" :updateArgs="updateArgs"></highcharts>
      </div>
    </v-card >
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
      dataLine: [],
      dataColumn: [],
      loading: false,
      chronosChart: [],
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
    }),
    timechrono (time) {
      var a = time.replace(':','.').split('.')
      var seconds = (+a[0]) * 60+ (+a[1]) 
      return seconds
    }
  },
  computed: {
    lineOptions () {
      return line(this.dataLine)
    },
    columnOptions () {
      return column(this.dataColumn)
    },
    days () {
      return this.chronosChart.map(chrono => {
        return chrono.timechrono
      })
    }
  },
  async created () {
    this.loading = true  
    let users = this.usersClub.filter(user => user.value === 1 | user.value === 2)
    for (let i = 0; i < users.length; i++) {
      let lineChorno = { name: users[i].text, data: [] }
      let columnMeters = { name: users[i].text, data: [] }
      let chronos = await this.getChronoActivity({userid: users[i].value})

      let today = Date.now()
      let dateToday = new Date(today).getDay()
      let day1 = 0, day2 = 0, day3 = 0, day4 = 0, day5 = 0, day6 = 0, day0 = 0

      for (let j = 0; j < chronos.length; j++) {
        lineChorno = { name: users[i].text, data: [] }
        let chrono1 = Number.MAX_SAFE_INTEGER, chrono2 = Number.MAX_SAFE_INTEGER, 
        chrono3 = Number.MAX_SAFE_INTEGER, chrono4 = Number.MAX_SAFE_INTEGER, 
        chrono5 = Number.MAX_SAFE_INTEGER, chrono6 = Number.MAX_SAFE_INTEGER, 
        chrono0 = Number.MAX_SAFE_INTEGER
        let timeChrono = 0
        let date = new Date(chronos[j].timechrono)
        let meters = chronos[j].activity__meters * chronos[j].activity__series

        if (date.getDay() === 1) day1 += meters
        if (date.getDay() === 2) day2 += meters
        if (date.getDay() === 3) day3 += meters
        if (date.getDay() === 4) day4 += meters
        if (date.getDay() === 5) day5 += meters
        if (date.getDay() === 6) day6 += meters
        if (date.getDay() === 0) day0 += meters

        if ( (chronos[j].activity__style == 'Crawl' | chronos[j].activity__style == 'Backstroke')
         && chronos[j].activity__meters == 100 ) {
          lineChorno.name = users[i].text + ' ' + chronos[j].activity__meters + ' ' + chronos[j].activity__style
          timeChrono = this.timechrono(chronos[j].time)
          if (date.getDay() === 1) chrono1 = timeChrono
          if (date.getDay() === 2) chrono2 = timeChrono
          if (date.getDay() === 3) chrono3 = timeChrono
          if (date.getDay() === 4) chrono4 = timeChrono
          if (date.getDay() === 5) chrono5 = timeChrono
          if (date.getDay() === 6) chrono6 = timeChrono
          if (date.getDay() === 0) chrono0 = timeChrono

          for (let i = 0; i < 6 ; i++) {
            lineChorno.data.push(eval('chrono'+i) === Number.MAX_SAFE_INTEGER ? 0 : eval('chrono'+i))
          }
          if (!this.dataLine.some(line => line.name == lineChorno.name)) this.dataLine.push(lineChorno)
        }        
      }
      for (let i = 0; i < 6 ; i++) {
        columnMeters.data.push(eval('day'+i))
      }
      this.dataColumn.push(columnMeters)
    }
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

.wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap
}
.wrapper__center{
  align-items: center
}
</style>
