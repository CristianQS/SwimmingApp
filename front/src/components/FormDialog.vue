<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn class="v-btn--small" color="yellow" v-on="on">
        <v-icon >edit</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{message}}</span>
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
    message: { type: String, required: true }
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    closeDialog () {
      this.dialog = !this.dialog
    },
    saveDialog () {
      if (this.newUpdate != undefined) {
        this.methods.update(this.newUpdate)
        this.dialog = !this.dialog
      }
    }
  }
}
</script>

<style scoped>

.v-btn--small{
  min-width: 15px;
  width: 40px;
}
</style>
