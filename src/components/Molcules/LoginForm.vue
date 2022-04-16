<template>
  <v-form>
    <TextField icon='mdi-email' label='メールアドレス' :inputValue='email' @parentMethod="inputEmailValue" />
    <p v-show="isInValidEmail" class="error">メールアドレスの形式で入力してください。</p>
    <TextField icon='mdi-lock' label='パスワード' :inputValue='password' type="password" @parentMethod="inputPasswordValue"/>
    <p v-show="isInValidPassword" class="error">パスワードは8文字以上で登録してください</p>
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
import TextField from '../Atoms/TextField';
export default {
  data() {
    return {
      email: "",
      password: "",
      isInValidEmail: false,
      isInValidPassword: false,
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
      const reg = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
      if (!reg.test(this.email)) {
        this.isInValidEmail = true;
        return
      }
      this.isInValidEmail = false;
      if (this.password.length < 8) {
        this.isInValidPassword = true;
        return
      }
      this.isInValidPassword = false;
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
