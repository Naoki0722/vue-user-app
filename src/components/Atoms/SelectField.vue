<template>
  <v-select
    :prepend-icon="icon"
    :label="label"
    v-model="inputData"
    :items="items"
    item-text="name"
    item-value="id"
  />
</template>


<script>
export default {
  props:['icon', 'label', 'inputValue' , 'type' , 'items'],
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
