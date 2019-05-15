<template>
  <div class="container">
    <div class="controls">
      <v-btn @click="reset" depressed fab dark>
        <v-icon class="flex-center">replay</v-icon>
      </v-btn>
      <v-btn @click="toggleTimer" depressed large fab dark>
        <v-icon v-if="!isTimerActive" class="flex-center">play_arrow</v-icon>
        <v-icon v-else class="flex-center">stop</v-icon>
      </v-btn>
      <v-btn @click="flag" depressed fab dark>
        <v-icon class="flex-center">flag</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PomodoroControl',
  data () {
    return {
      isTimerActive: false
    }
  },
  methods: {
    toggleTimer () {
      if (!this.isTimerActive) {
        this.isTimerActive = true
        this.$emit('start')
      } else {
        this.isTimerActive = false
        this.$emit('stop')
      }
    },
    reset () {
      this.isTimerActive = false
      this.$emit('reset')
    },
    flag () {
      this.$emit('flag')
    }
  }
}
</script>

<style scoped>

button:not(:disabled) {
  cursor: pointer;
}
.controls {
  padding-bottom: 24px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

.btn-sm {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: calc(3rem + 4px);
  height: calc(3rem + 4px);
  line-height: 3rem;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 50%;
}

.btn-md {
  margin: 1.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: calc(4rem + 4px);
  height: calc(4rem + 4px);
  line-height: 3rem;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 50%;
}

.btn-sm:hover,
.btn-md:hover {
  border-color: #000;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

</style>
