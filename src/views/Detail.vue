<template>
  <div id="detail">
    <Header />
    <div class="detail">
      <img :src="tables.image_path">
      <table>
        <tr>
          <th>名前</th>
          <td>{{tables.name}}</td>
        </tr>
        <tr>
          <th>ユーザーID</th>
          <td>{{tables.id}}</td>
        </tr>
        <tr>
          <th>電話番号</th>
          <td>{{tables.tell}}</td>
        </tr>
        <tr>
          <th>メールアドレス</th>
          <td>{{tables.email}}</td>
        </tr>
        <tr>
          <th>SNSアカウント名</th>
          <td>{{tables.account}}</td>
        </tr>
      </table>
      <button @click="$router.push('/')">一覧へ戻る</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from "../components/Organisms/Header"
export default {
  props: ["id"],
  data() {
    return {
      tables: {}
    };
  },
  components: {
    Header
  },
  async mounted() {
    let tables = await axios.get(`${process.env.VUE_APP_API_URL}/api/user/${this.id}`);
    this.tables = tables.data.data;
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

.detail button {
  border: 1px solid black;
  border-radius: 10px;
}

table {
  width: 100%;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

table th {
  text-align: left;
}

table td {
  width: 50%;
}

table th,table td {
  border-top: 1px solid black;
  border-left: 1px solid black;
  padding: 10px;
}

button {
  margin-top: 50px;  
  padding: 10px 20px;
  font-size: 20px;
}
</style>
