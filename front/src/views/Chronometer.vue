<template>
  <div>
    <back-top-bar/>
    <pomodoro></pomodoro>
  </div>
</template>

<script>
import Pomodoro from '../components/Pomodoro.vue'
import BackTopBar from '../components/BackTopBar.vue'

export default {
  name: 'Chronometer',
  components: {
    Pomodoro,
    BackTopBar
  }
}
</script>

<style>

</style>
