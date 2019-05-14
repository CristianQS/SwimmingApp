<template>
  <v-btn
    fixed
    dark
    fab
    bottom
    right
    :color="color"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'FloatingButton',
  props: {
    color: { type: String, required: false, default: 'green' }
  }
}
</script>

<style>

</style>
