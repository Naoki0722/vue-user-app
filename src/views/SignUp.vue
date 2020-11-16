<template>
  <div>
    <Header />
    <div id="login">
      <div class="content">
        <h2>新規登録フォーム</h2>
        <input type="text" placeholder="name" v-model="name">
        <input type="text" placeholder="email" v-model="email">
        <input type="text" placeholder="tel" v-model="tell">
        <input type="text" placeholder="user-id" v-model="user_id">
        <input type="text" placeholder="SNSアカウント" v-model="account">
        <input type="password" placeholder="password" v-model="password">
        <button @click="auth">新規登録するよ</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import axios from 'axios'
export default {
  data() {
    return {
      name: "",
      email: "",
      tell: "",
      user_id: "",
      account: "",
      password: ""
    };
  },
  components: {
    Header
  },
  methods: {
    auth() {
      axios
        .post('http://localhost:8000/api/register', {
          name: this.name,
          email: this.email,
          tell: this.tell,
          user_id: this.user_id,
          account: this.account,
          password: this.password
        })
        .then(response => {
          console.log(response);
          this.$router.replace('/');
        })
        .catch(error => {
          console.log(error);
          alert.error;
        });
    }
  }
};
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header,
.header-logo,
.header-link {
  background-color: gray;
}

.header-logo img {
  width: 40%;
}

.header-link {
  display: flex;
}

.header-link p {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 15px;
  background-color: white;
}

.header-link a {
  text-decoration: none;
}

.header-link p:last-child {
  margin-right: 30px;
}

#login {
  text-align: center;
}

.content {
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 25px 100px;
  margin: 100px auto 0;
}

.content h2 {
  font-size: 40px;
  margin: 10px 0 40px;
}

.content input {
  display: block;
  height: 25px;
  margin: 10px auto;
  width: 80%;
}

button {
  margin: 20px 0 10px;
}
</style>