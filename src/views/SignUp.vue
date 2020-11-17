<template>
  <div>
    <Header />
    <v-card elevation="1"  width="40%" class="mx-auto mt-12">
      <v-card-title>
        <h1 class="display-1">新規登録フォーム</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="mdi-account-circle" label="name" v-model="name" />
          <v-text-field prepend-icon="mdi-email" label="email" v-model="email" />
          <v-text-field prepend-icon="mdi-cellphone" label="tell" v-model="tell" />
          <v-text-field prepend-icon="mdi-account-circle" label="user_id" v-model="user_id" />
          <v-text-field prepend-icon="mdi-twitter" label="SNSアカウント" v-model="account" />
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