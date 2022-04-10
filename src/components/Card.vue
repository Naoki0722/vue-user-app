<template>
  <v-card
    elevation="1"
    :width="$vuetify.breakpoint.xs ? '80%' : '50%'"
    class="mx-auto mt-12"
  >
    <v-row justify="center">
      <v-card-title>
        <h1 class="display-1">{{ this.title }}</h1>
      </v-card-title>
    </v-row>
    <v-card-text>
      <LoginForm />
    </v-card-text>
  </v-card>
</template>


<script>
import LoginForm from './LoginForm';
export default {
  props: ['title'],
  components: {
    LoginForm
  }
};
</script>
