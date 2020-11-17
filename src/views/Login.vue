<template>
  <div>
    <Header />
    <v-card elevation="1"  width="40%" class="mx-auto mt-12">
      <v-card-title>
        <h1 class="display-1">ログイン</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="mdi-account-circle" label="メールアドレス" v-model="email" />
          <v-text-field prepend-icon= "mdi-lock" type="password" label="パスワード" v-model="password"/>
          <v-card-actions>
            <v-btn class="success" @click="auth">ログイン</v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    Header
  },
  methods: {
    auth() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>

<style scoped>
#login {
  text-align: center;
}

.content {
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 25px 100px;
  margin: 200px auto 0;
}

.content h2 {
  font-size: 40px;
  margin: 10px 0 40px;
}

.content input {
  display: block;
  height: 25px;
  margin: 20px 0;
}
</style>