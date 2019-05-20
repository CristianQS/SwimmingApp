<template>
  <div>
    <div class="wrapper wrapper__center">
      <v-progress-circular
        class="loader"
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
    },
    getChornosTimesChart (chronos, today, user) {
      let lineChrono = { 
        name: '', 
        data: [] 
      }
      let timeChrono = 0
      let chrono1 = Number.MAX_SAFE_INTEGER, chrono2 = Number.MAX_SAFE_INTEGER, 
      chrono3 = Number.MAX_SAFE_INTEGER, chrono4 = Number.MAX_SAFE_INTEGER, 
      chrono5 = Number.MAX_SAFE_INTEGER, chrono6 = Number.MAX_SAFE_INTEGER, 
      chrono0 = Number.MAX_SAFE_INTEGER
      
      for (let j = 0; j < chronos.length; j++) {
        lineChrono.name = user + ' ' + chronos[j].activity__meters + ' ' + chronos[j].activity__style
        let date = new Date(chronos[j].timechrono)
        timeChrono = this.timechrono(chronos[j].time)
        if (date.getDay() === 1) chrono1 = timeChrono
        if (date.getDay() === 2) chrono2 = timeChrono
        if (date.getDay() === 3) chrono3 = timeChrono
        if (date.getDay() === 4) chrono4 = timeChrono
        if (date.getDay() === 5) chrono5 = timeChrono
        if (date.getDay() === 6) chrono6 = timeChrono
        if (date.getDay() === 0) chrono0 = timeChrono
      }
      for (let i = 0; i < 7 ; i++) {
        let timestampDay = today - 86400*i*1000
        let finalIndex = new Date(timestampDay).getDay()
        lineChrono.data.push(eval('chrono'+finalIndex) === Number.MAX_SAFE_INTEGER ? 0 : eval('chrono'+finalIndex))
      }
      return lineChrono
    },
    getMetersChart (chronos, today, user) {
      let columnMeters = { name: user, data: [] }
      let day1 = 0, day2 = 0, day3 = 0, day4 = 0, day5 = 0, day6 = 0, day0 = 0
      for (let j = 0; j < chronos.length; j++) {
        let date = new Date(chronos[j].timechrono)
        let meters = chronos[j].activity__meters * chronos[j].activity__series

        if (date.getDay() === 1) day1 += meters
        if (date.getDay() === 2) day2 += meters
        if (date.getDay() === 3) day3 += meters
        if (date.getDay() === 4) day4 += meters
        if (date.getDay() === 5) day5 += meters
        if (date.getDay() === 6) day6 += meters
        if (date.getDay() === 0) day0 += meters     
      }
      for (let i = 0; i < 7 ; i++) {
        let timestampDay = today - 86400*i*1000
        let finalIndex = new Date(timestampDay).getDay()
        columnMeters.data.push(eval('day'+finalIndex))
      }
      return columnMeters
    }
  },
  computed: {
    lineOptions () {
      return line(this.dataLine)
    },
    columnOptions () {
      return column(this.dataColumn)
    }
  },
  async created () {
    this.loading = true  
    let users = this.usersClub.filter(user => user.value === 1 | user.value === 2)
    for (let i = 0; i < users.length; i++) {
      let today = Date.now()
      let week = today - 604800*1000
      let chronos = await this.getChronoActivity({userid: users[i].value})
      chronos = chronos.filter(chrono => week <= chrono.timechrono)
      let chronosCrawl = chronos.filter(chrono => chrono.activity__style == 'Crawl' 
      && chrono.activity__meters == 100)
      
      let chronosBack = chronos.filter(chrono => chrono.activity__style == 'Backstroke' 
      && chrono.activity__meters == 100)


      let metersChartData = this.getMetersChart(chronos, today, users[i].text)
      let crawlChronosData = this.getChornosTimesChart(chronosCrawl, today, users[i].text)
      let backChronosData = this.getChornosTimesChart(chronosBack, today, users[i].text)

      this.dataLine.push(crawlChronosData)
      this.dataLine.push(backChronosData)

      this.dataColumn.push(metersChartData)
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

.loader {
  margin: 30px 0;
}
</style>
