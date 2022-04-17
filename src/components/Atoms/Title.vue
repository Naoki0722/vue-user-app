<template>
  <v-row justify="center">
    <v-card-title>
      <h1 class="display-1">{{ this.title }}</h1>
    </v-card-title>
  </v-row>
</template>


<script>
export default {
  props: ['title'],
};
</script>
