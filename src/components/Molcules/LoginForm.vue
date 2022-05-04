<template>
  <v-form>
    <TextField icon='mdi-email' label='メールアドレス' :inputValue='email' type='email' @parentMethod="inputText" />
    <p v-show="isInValidEmail" class="error">メールアドレスの形式で入力してください。</p>
    <TextField icon='mdi-lock' label='パスワード' :inputValue='password' inputType="password" type='password' @parentMethod="inputText"/>
    <p v-show="isInValidPassword" class="error">パスワードは8文字以上が必要です</p>
    <Button :loadingStatus='loadingStatus' @auth="auth" buttonText='ログイン' />
  </v-form>
</template>

<script>
import Button from '../Atoms/Button';
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
    TextField,
    Button
  },
  methods: {
    inputText (inputValue) {
      this[inputValue.element] = inputValue.data
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
