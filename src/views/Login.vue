<template>
  <div>
    <v-card class="mx-auto overflow-hidden" height="100vh">
      <Header :parentData="sendFlag" />
      <v-card
        elevation="1"
        :width="$vuetify.breakpoint.xs ? '80%' : '50%'"
        class="mx-auto mt-12"
      >
        <v-row justify="center">
          <v-card-title>
            <h1 class="display-1">ログイン画面</h1>
          </v-card-title>
        </v-row>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="mdi-account-circle"
              label="メールアドレス"
              v-model="email"
              class="py-5"
            />
            <v-text-field
              prepend-icon="mdi-lock"
              type="password"
              label="パスワード"
              v-model="password"
              class="py-5"
            />
            <v-row justify="center">
              <v-card-actions>
                <v-btn
                  x-large
                  class="success mt-10 mb-5 text-h6 font-weight-bold"
                  @click="auth"
                  >ログイン</v-btn
                >
              </v-card-actions>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import Header from '../components/Header';
export default {
  data() {
    return {
      email: "",
      password: "",
      sendFlag: true,
    };
  },
  components: {
    Header,
  },
  methods: {
    auth() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped></style>
