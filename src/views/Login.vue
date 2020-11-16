<template>
  <div>
    <Header />
    <div id="login">
      <div class="content">
        <h2>ログイン</h2>
        <input type="text" placeholder="email" v-model="email">
        <input type="password" placeholder="password" v-model="password">
        <button @click="auth">ログイン</button>
      </div>
    </div>
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