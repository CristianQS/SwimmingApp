<template>
  <v-dialog v-model="isActivated" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">{{message}}</span>
      </v-card-title>
      <v-card-text>
        <slot name="text"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <slot name="buttons"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'AddDialog',
  props: {
    dialog: { type: Boolean, required: true },
    message: { type: String, required: true }
  },
  data () {
    return {
      val: '',
      isActivated: this.dialog
    }
  },
  methods: {
    ua (value) {
      this.val = value
    }
  },
  watch: {
    isActivated: function () {
      this.$emit('isActivated', this.isActivated)
    },
    dialog: function () {
      this.isActivated = this.dialog
    }
  }
}
</script>

<style>

</style>
