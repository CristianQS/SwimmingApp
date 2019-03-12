<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex xs12>
        <v-text-field :label='msg' required></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ModifyForm',
  props: {
    type: { type: String, required: true }
  },
  data () {
    return {
      msg : 'Name of the '+ this.type
    }
  }
}
</script>

<style>

</style>
