<template>
  <v-btn
    fixed
    dark
    fab
    bottom
    right
    :color="color"
  >
    <v-icon>
      <slot></slot>
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'FloatingButton',
  props:{
    color: { type: String, required: false, default: 'green'}
  }
}
</script>

<style>

</style>
