<template>
  <div id="detail">
    <Header :parentData="sendFlag"/>
    <div class="detail">
      <img :src="lists.image">
      <table>
        <tr>
          <th>名前</th>
          <td v-if="isActive">{{lists.name}}</td>
          <td v-else><input type="text" v-model="lists.name"></td>
        </tr>
        <tr>
          <th>ユーザーID</th>
          <td v-if="isActive">{{lists.user_id}}</td>
          <td v-else><input type="text" v-model="lists.user_id"></td>
        </tr>
        <tr>
          <th>電話番号</th>
          <td v-if="isActive">{{lists.tell}}</td>
          <td v-else><input type="text" v-model="lists.tell"></td>
        </tr>
        <tr>
          <th>メールアドレス</th>
          <td>{{lists.email}}</td>
        </tr>
        <tr>
          <th>SNSアカウント名</th>
          <td v-if="isActive">{{lists.account}}</td>
          <td v-else><input type="text" v-model="lists.account"></td>
        </tr>
      </table>
      <button @click="$router.push('/home')">一覧へ戻る</button>
      <button v-if="isActive" @click="edit">編集</button>
      <button v-else @click="edit">完了</button>
      <button @click="remove">退会</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from "../components/Header"
export default {
  data() {
    return {
      isActive: true,
      lists: {
          name: this.$store.state.user.name,
          user_id: this.$store.state.user.user_id,
          tell: this.$store.state.user.tell,
          email: this.$store.state.user.email,
          account: this.$store.state.user.account,
          image: this.$store.state.user.image_path
      },
      sendFlag: false,
    };
  },
  components: {
    Header
  },
  methods: {
    edit() {
      if(!this.isActive) {
        axios
          .put('https://shrouded-tundra-15009.herokuapp.com/api/user', {
            name: this.lists.name,
            user_id: this.lists.user_id,
            tell: this.lists.tell,
            email: this.$store.state.user.email,
            account: this.lists.account
          })
          .then((response) => {
            this.$store.dispatch('changeUser', {
            name: this.lists.name,
            user_id: this.lists.user_id,
            tell: this.lists.tell,
            email: this.lists.email,
            account: this.lists.account
            });
            console.log(response);
          });
      }
      this.isActive = !this.isActive;
    },
    remove() {
      axios
        .delete('https://shrouded-tundra-15009.herokuapp.com/api/user', {
          data: {
          email: this.$store.state.user.email,
          id: this.$store.state.user.id,
          },
        })
        .then((response) => {
          console.log(response);

      // データベースから削除した後にページを飛ばす
          // this.$router.replace('/');
        });
      this.$store.dispatch('logout');
      // axios
      //   .delete('https://shrouded-tundra-15009.herokuapp.com/api/user', {
      //       email: this.$store.state.user.email,
      //   })
      //   .then((response) => {
      //     console.log(response);
      // データベースから削除した後にページを飛ばす
      // this.$router.replace('/');
      //   });
    }
  }
};
</script>

<style scoped>
.detail {
  margin: 5% auto;
  width: 40%;
  text-align: center;
}
.detail img {
  width: 30%;
}

table {
  border-bottom: 1px solid black;
  width: 80%;
  margin: 0 auto;
}

table th {
  text-align: left;
  width: 20%;
  border-right: 1px solid black;
  border-left: 1px solid black;
}

table td {
  width: 30%;
  border-right: 1px solid black;
}

table th,table td {
  border-top: 1px solid black;
  padding: 10px;
}

table input {
  height: 20px;
  text-align: center;
  width: 60%;
  border: 1px solid rgb(167, 166, 166);
  border-radius: 5px;
}

button {
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  margin: 50px 10px;  
  padding: 10px 20px;
  font-size: 20px;
}
</style>