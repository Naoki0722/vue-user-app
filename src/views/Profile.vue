<template>
  <div class="detail">
    <Member :id = "id"></Member>
    <img src="../assets/icon.png">
    <table>
      <tr>
        <th>名前</th>
        <td v-if="isActive">{{lists.name}}</td>
        <td v-else><input type="text" v-model="lists.name"></td>
      </tr>
      <tr>
        <th>ユーザーID</th>
        <td v-if="isActive">{{lists.id}}</td>
        <td v-else><input type="text" v-model="lists.id"></td>
      </tr>
      <tr>
        <th>電話番号</th>
        <td v-if="isActive">{{lists.tell}}</td>
        <td v-else><input type="text" v-model="lists.tell"></td>
      </tr>
      <tr>
        <th>メールアドレス</th>
        <td v-if="isActive">{{lists.mail}}</td>
        <td v-else><input type="text" v-model="lists.mail"></td>
      </tr>
      <tr>
        <th>SNSアカウント名</th>
        <td v-if="isActive">{{lists.sns}}</td>
        <td v-else><input type="text" v-model="lists.sns"></td>
      </tr>
    </table>
    <button @click="$router.push('/home')">一覧へ戻る</button>
    <button v-if="isActive" @click="edit">編集</button>
    <button v-else @click="edit">完了</button>
    <button @click="remove">退会</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      lists: {
          name: "松ざき",
          id: "matsunao",
          tell: "000-0000-0000",
          mail: "test@test.com",
          sns: "http://www.test.co.jp"
      },
    };
  },
  methods: {
    edit() {
      this.isActive = !this.isActive
    },
    remove() {
      // データベースから削除した後にページを飛ばす
      this.$router.push({name: 'Login'});
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