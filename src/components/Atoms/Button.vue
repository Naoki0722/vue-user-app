<template>
  <v-row justify="center">
    <v-card-actions>
      <v-btn
        x-large
        class="success mt-4 mb-4 text-h6 font-weight-bold"
        @click="auth"
        :loading="loadingStatus"
        >{{ buttonText }}</v-btn
      >
    </v-card-actions>
  </v-row>
</template>


<script>
export default {
  props: ['loadingStatus', 'buttonText'],
  methods: {
    auth() {
      this.$emit('auth');
    }
  }
};
</script>
