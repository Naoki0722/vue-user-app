<template>
  <div class="detail">
    <!-- <Member :id = "id"></Member> -->
    <img src="../assets/icon.png">
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
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      isActive: true,
      lists: {
          name: this.$store.state.user.name,
          user_id: this.$store.state.user.user_id,
          tell: this.$store.state.user.tell,
          email: this.$store.state.user.email,
          account: this.$store.state.user.account
      },
    };
  },
  methods: {
    edit() {
      if(!this.isActive) {
        axios
          .put('http://localhost:8000/api/user', {
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
        .delete('http://localhost:8000/api/user', {
            email: this.$store.state.user.email,
        })
        .then((response) => {
          console.log(response);
      // データベースから削除した後にページを飛ばす
      // this.$router.replace('/');
        });
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
  width: 100%;
}

table th {
  text-align: left;
}

table th,table td {
  border: 1px solid black;
  padding: 10px;
}

table input {
  height: 15px;
}

button {
  display: inline-block;
  margin: 50px 10px;  
  padding: 10px 20px;
  font-size: 20px;
}
</style>