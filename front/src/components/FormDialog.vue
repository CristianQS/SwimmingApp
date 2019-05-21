<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn class="v-btn" color="yellow" v-on="on">
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
@media (max-width: 2560px) {
  .v-btn {
    min-width: 20px;
    height: 86px;
  }
}
@media (max-width: 523px) {
  .v-btn {
    width: 70%;
    height: 70%;
  }
}
@media (max-width: 394px) {
  .v-btn {
    width: 82%;
    height: 82%;
  }
}
@media (max-width: 374px) {
  .v-btn {
    width: 90%;
    height: 90%;
  }
}
</style>
