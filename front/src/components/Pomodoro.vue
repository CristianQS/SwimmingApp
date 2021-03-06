<template>
  <div class="wrapper">
    <div class="wrapper wrapper__center">
      <v-progress-circular
        v-if="loadPage" :size="150" :width="7"
        color="black" indeterminate
      />
    </div>
    <v-layout v-if="!loadPage" wrap>
      <v-flex xs12 sm4 offset-sm4 md4 offset-md4 lg4 offset-lg4 >
        <div class="container text__center">
          <div class="timer">
            <span class="timer__countdown js-countdown">{{chronoString}}</span>
          </div>
        </div>
      </v-flex>
      <v-flex class="site__content" xs12 sm1 offset-sm1 md1 offset-md1 lg1 offset-lg0>
        <div class="wrapper wrapper__center">
          <v-btn :loading="loading" @click="uploadChrono()" class="button__cloud" depressed fab dark>
              <v-icon>cloud_upload</v-icon>
          </v-btn>
          <div v-if="chrono.length > 0 && user.userType !== 2" class="wrapper wrapper__center">
            <h3 >Last Time</h3>
            <p>{{chrono[0].time}}</p>
          </div>
          <v-card dark class="selector">
            <v-select
              v-if="user.userType === 2"
              v-model="userChrono"
              :items="usersClub"
              item-value="value"
              label="Select User"
              chips
            />
          </v-card>
        </div>
      </v-flex>
    </v-layout>

    <pomodoro-control
      @start="startChrono"
      @reset="resetChrono"
      @stop="stopChrono"
      @flag="flag"
      v-if="!loadPage"
    />
    <div v-if="!loadPage" class="wrapper wrapper__center">
      <h3>Phases</h3>
      <v-card :width="300" class="card__phase"
        v-for="(phase,index) in phases" :key="index">
        <div class="wrapper wrapper__between wrapper__center">
          <strong class="meters">{{index*100 + 100}}:</strong><strong>{{phase}}</strong>
          <v-btn @click="deletePhase(index)" fab small color="red">
            <v-icon>delete</v-icon>
          </v-btn>
        </div>
      </v-card >
    </div>
  </div>
</template>

<script>
import PomodoroControl from './PomodoroControl.vue'
import { mapActions, mapState } from 'vuex'
import { ADD_CHRONO, DELETE_CHRONO, GET_CHRONO_BY_IDACTIVITY } from '../store/types/ChronoTypes'
import { ADD_PHASE } from '../store/types/PhaseTypes'

export default {
  name: 'Pomodoro',
  components: {
    PomodoroControl
  },
  data () {
    return {
      minutes: 0,
      seconds: 0,
      hundredths: 0,
      loading: false,
      loadPage: false,
      timer: null,
      phases: [],
      userChrono: 0
    }
  },
  methods: {
    startChrono () {
      this.timer = setInterval(() => {
        this.hundredths += 1
        if (this.hundredths === 100) {
          this.hundredths = 0
          this.seconds += 1
          this.getSeconds()
        }
      }, 10)
    },
    resetChrono () {
      this.hundredths = 0
      this.seconds = 0
      this.minutes = 0
      this.phases = []
      this.stopChrono()
    },
    stopChrono () {
      clearInterval(this.timer)
    },
    getSeconds () {
      if (this.seconds === 60) {
        this.seconds = 0
        this.minutes += 1
      }
    },
    flag () {
      let phase = `${this.minutes}:${this.seconds}.${this.hundredths}`
      this.phases.push(phase)
    },
    deletePhase (indexPhase) {
      this.phases = this.phases.filter((phase, index) => index !== indexPhase)
    },
    async uploadChrono () {
      try {
        this.loading = true
        if (this.user.userType === 2 && this.userChrono == 0) {
          alert('Select a User')
          this.loading = false
          return
        }
        let params = {
          user: this.user.id,
          time: this.chronoString,
          activity: this.$route.params.idActivity,
          timechrono: Date.now()
        }
        if (this.user.userType === 2) {
          params.user = this.userChrono
          let otherUserChrono = this.chronos.filter(chrono => chrono.user_id === this.userChrono)
          let adviceOther
          if (otherUserChrono.length > 0) {
            adviceOther = confirm('The User have a time for this activity.\nIf you continue you will delete it\n' +
            'Are you sure?')
            if (adviceOther) {
              await this.deleteChrono(otherUserChrono[0].id)
            } else {
              this.loading = false
              return
            }
          }
        }
        let advice
        if (this.chrono.length > 0) {
          advice = confirm('You have a time for this activity.\nIf you continue you will delete it\n' +
          'Are you sure?')
          if (advice) {
            await this.deleteChrono(this.chrono[0].id)
          } else {
            this.loading = false
            return
          }
        }
        let response = await this.addChrono(params)
        if (this.phases.length > 0) {
          this.phases.forEach((phase, index) => {
            let request = {
              timePhase: phase,
              chrono: response.id,
              meters: index * 100 + 100
            }
            this.addPhase(request)
          })
        }
        this.loading = false
      } catch (error) {
        this.loading = false
        return error
      }
    },
    ...mapActions({
      addChrono: ADD_CHRONO,
      deleteChrono: DELETE_CHRONO,
      getChronoByActivity: GET_CHRONO_BY_IDACTIVITY,
      addPhase: ADD_PHASE
    })
  },
  computed: {
    chronoString () {
      var hundredths = this.hundredths
      var seconds = this.seconds
      var minutes = this.minutes
      if (this.hundredths < 10) hundredths = `0${this.hundredths}`
      if (this.seconds < 10) seconds = `0${this.seconds}`
      if (this.minutes < 10) minutes = `0${this.minutes}`
      return `${minutes}:${seconds}.${hundredths}`
    },
    chrono () {
      var result = this.chronos
      if (result.length > 0 && this.user.userType === 2)  {
        return this.chronos.filter(chrono => chrono.user_id === this.userChrono)
      }
      if (result.length > 0 && this.user.userType === 1)  {
        return this.chronos.filter(chrono => chrono.user_id === this.user.id)
      }
      return result
    },
    ...mapState({
      usersClub: state => state.usersClub,
      user: state => state.user,
      chronos: state => state.chronos
    })
  },
  async created () {
    try {
      this.loadPage = true
      await this.getChronoByActivity({ activityid: this.$route.params.idActivity })
    } catch {
      return error
    } finally {
      this.loadPage = false
    }
  }
}
</script>

<style>

.site__content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  padding: 0 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
}

.text__center {
  text-align: center
}

.timer {
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 224px;
  height: 224px;
  border: 4px solid #000;
  border-radius: 50%
}

.timer::before,
.timer::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 50%;
  transform: translate(-50%, -50%)
}

.timer::after {
  width: 80%;
  height: 80%
}

.timer::before {
  width: 120%;
  height: 120%
}

.timer__session {
  font-weight: 500
}

.timer__countdown {
  font-size: 2.5rem
}

.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.wrapper__center{
  align-items: center;
}
.wrapper__between{
  flex-direction: row;
  justify-content:space-between ;
}
.meters {
  padding: 0 0 0 15px;
}
.card__phase {
  margin: 4px 0;
}

.selector {
  padding: 2px 20px;
}
</style>
