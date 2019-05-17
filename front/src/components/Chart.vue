<template>
  <div v-if="!loading" class="chartElem">
    <div class="row">
      <highcharts class="chart" :options="chartOptions" :updateArgs="updateArgs"></highcharts>
    </div>
  </div>
</template>

<script>
import { GET_CHRONO_BY_IDUSER,GET_CHRONO_BY_IDACTIVITY } from '../store/types/ChronoTypes'
import { GET_PHASES_BY_CHRONO } from '../store/types/PhaseTypes'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Chart',
  props: {
    activities: { type:Array, required:true}
  },
  data () {
    return {
      loading: false,
      chronosChart: [],
      phasesChart: [],
      title: '',
      points: this.days,
      chartType: 'Spline',
      seriesColor: '#6fcd98',
      colorInputIsSupported: null,
      animationDuration: 1000,
      updateArgs: [true, true, {duration: 1000}],
    }
  },
  methods: {
    ...mapActions({
      getChronoActivity: GET_CHRONO_BY_IDACTIVITY,
      getPhases: GET_PHASES_BY_CHRONO
    })
  },
  computed: {
    // ...mapState({
    //   chronos: state => state.chronos,
    //   phases: state => state.phases
    // })
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
    chartOptions () {
      return {
        xAxis: { 
          title: {
            text: 'Date',
          },
          type: 'datetime',
          categories: this.chronosChart.map(chrono => {
            var date = new Date(chrono.timechrono);
            return date.toISOString().substring(0,10)
          } ), 
        },
        yAxis: {
          title: {
            text: 'Times (seconds)',
          }
        },
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Times of All Trainings'
        },
        series: [{
          data: this.timechrono,
          color: '#6fcd98'
        }]
      }

    }
  },
  async mounted () {
    this.loading = true
    await this.activities.forEach(async activity => {
      let chronos = await this.getChronoActivity({activityid:activity.id}) 
      for (let i = 0; i < chronos.length; i++) {
        this.chronosChart.push(chronos[i])
        let phases = await this.getPhases(chronos[i].id)
        for (let j = 0; j < phases.length; j++) {
          this.phasesChart.push(phases[j])
        } 
      }
    });
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
