<template>
  <div class="container">
    <div class="controls">
      <v-btn @click="reset" depressed outline fab color="white">
        <v-icon class="flex-center">replay</v-icon>
      </v-btn>
      <v-btn @click="toggleTimer" depressed large outline fab color="white">
        <v-icon v-if="!isTimerActive" class="flex-center">play_arrow</v-icon>
        <v-icon v-else class="flex-center">stop</v-icon>
      </v-btn>
      <v-btn @click="reset" depressed outline fab color="white">
        <v-icon class="flex-center">cloud_upload</v-icon>
      </v-btn>
      <v-btn @click="reset" depressed outline fab color="white">
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
    toggleModal () {

    },
    reset () {
      this.isTimerActive = false
      this.$emit('reset')
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
  border: 2px solid rgba(255, 255, 255, .25);
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
  border: 2px solid rgba(255, 255, 255, .25);
  border-radius: 50%;
}

.btn-sm:hover,
.btn-md:hover {
  border-color: #fff;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

</style>
