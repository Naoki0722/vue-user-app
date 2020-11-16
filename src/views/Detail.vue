<template>
  <div class="detail">
    <img src="../assets/icon.png">
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
    <button @click="$router.push('/home')">一覧へ戻る</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tables: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      let data = [];
      let tables =await axios.get('http://localhost:8000/api/user/all');
      for (let i = 0; i < tables.data.data.length; i++) {
        await axios
          .get('http://localhost:8000/api/user/all')
          .then((response) => {
            if(this.$route.name === 'Detail') {
            let url = this.$route.params.id;
            let id = response.data.data[i].id;
              if(id == url) {
                data.push(response.data.data[i]);
                console.log(data);
              }
            }
          });
        
      }        
      this.tables = data[0];
      console.log(this.tables);
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

button {
  margin-top: 50px;  
  padding: 10px 20px;
  font-size: 20px;
}
</style>