<template>
  <v-form>
    <TextField icon='mdi-email' label='メールアドレス' :inputValue='email' @parentMethod="inputEmailValue"/>
    <TextField icon='mdi-lock' label='パスワード' :inputValue='password' type="password" @parentMethod="inputPasswordValue"/>
    <v-row justify="center">
      <v-card-actions>
        <v-btn
          x-large
          class="success mt-10 mb-5 text-h6 font-weight-bold"
          @click="auth"
          :loading="loadingStatus"
          >ログイン</v-btn
        >
      </v-card-actions>
    </v-row>
  </v-form>
</template>

<script>
import TextField from './TextField';
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    TextField
  },
  methods: {
    inputEmailValue (email) {
      this.email = email
    },
    inputPasswordValue (password) {
      this.password = password
    },
    auth() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
    },
  },
  computed: {
    loadingStatus() {
      return this.$store.state.loadingStatus
    }
  }
}
</script>
