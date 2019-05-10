<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="yellow" v-on="on">
        <v-icon >edit</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Modify Training</span>
      </v-card-title>
      <v-card-text>
        <slot></slot>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="closeDialog()">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="saveDialog()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ModifyForm from './ModifyForm.vue'
import ActivityForm from './ActivityForm.vue'

export default {
  name: 'FormDialog',
  components: {
    ModifyForm,
    ActivityForm
  },
  props: {
    methods: { type: Object, required: true },
    newUpdate: { type: Object, required: false },
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      this.methods.update(this.newUpdate)
      this.dialog = !this.dialog
    }
  }
}
</script>

<style>

</style>
