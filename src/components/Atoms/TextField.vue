<template>
  <v-text-field
    :prepend-icon="icon"
    :label="label"
    :type="type"
    v-model="inputData"
    class="py-5"
  />
</template>


<script>
export default {
  props:{
    icon: String,
    label: String,
    type: String,
    inputValue: String,
  },
  computed: {
    inputData: {
      get() {
        return this.inputValue
      },
      set(newData) {
        this.$emit('parentMethod', newData)
      }
    }
  }
}
</script>
