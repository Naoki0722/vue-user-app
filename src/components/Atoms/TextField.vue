<template>
  <v-text-field
    :prepend-icon="icon"
    :label="label"
    :type="inputType"
    v-model="inputData"
    class="py-5"
  />
</template>


<script>
export default {
  props:{
    icon: String,
    label: String,
    inputType: String,
    inputValue: String,
    type: String,
  },
  computed: {
    inputData: {
      get() {
        return this.inputValue
      },
      set(newData) {
        this.$emit('parentMethod', {data:newData, element: this.type})
      }
    }
  }
}
</script>
