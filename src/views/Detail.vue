<template>
  <div id="detail">
    <Header :parentData="sendFlag"/>
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
      <button @click="$router.push('/home')">一覧へ戻る</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from "../components/Header"
export default {
  props: ["id"],
  data() {
    return {
      tables: [],
      sendFlag: false,
    };
  },
  components: {
    Header
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      let data = [];
      let tables =await axios.get('https://shrouded-tundra-15009.herokuapp.com/api/user/all');
      for (let i = 0; i < tables.data.data.length; i++) {
        await axios
          .get('https://shrouded-tundra-15009.herokuapp.com/api/user/all')
          .then((response) => {
            if(this.$route.name === 'Detail') {
            let id = response.data.data[i].id;
              if(id == this.id) {
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