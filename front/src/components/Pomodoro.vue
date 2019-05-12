<template>
  <div>
    <main class="site__content timer__content">
      <div class="container">
        <div class="timer">
          <span class="timer__countdown js-countdown">{{chronoString}}</span>
        </div>
      </div>
    </main>
    <pomodoro-control
      @start="startChrono"
      @reset="resetChrono"
      @stop="stopChrono"
    />
  </div>
</template>

<script>
import PomodoroControl from './PomodoroControl.vue'

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
      isBreakTime: false,
      timer: null
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
    }
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
    }
  }
}
</script>

<style>
.timer__content {
  margin: 0;
  font-family: 'Avenir Next', -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  text-align: center;
  -webkit-font-smoothing: antialiased
}
.site__content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center
}

.container {
  padding: 0 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px
}

.timer {
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  max-width: 224px;
  height: 224px;
  border: 4px solid #fff;
  border-radius: 50%
}

.timer::before,
.timer::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid rgba(255, 255, 255, .25);
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

</style>
