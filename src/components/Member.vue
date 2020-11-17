<template>
  <div class="member-section">
    <table>
      <tr>
        <th>ID</th>
        <th>メンバー名</th>
        <th>詳細</th>
      </tr>
      <tr v-for="(data,index) in tables" :key="index">
        <td>{{data.id}}</td>
        <td>{{data.name}}</td>
        <td>
          <button @click="$router.push({ name: 'Detail', params: { id: data.id } })">詳細</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ["id"],
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
      await axios
        .get('http://localhost:8000/api/user/all')
        .then((response) => {
          data.push(response.data);
          // console.log(response);
          console.log(data);
      });
        
      // }
      this.tables = data[0].data;
      console.log(this.tables);
    }
  }
};
</script>

<style scoped>
.member-section {
  margin: 3% 5%;
  font-size: 20px;
  width: 50%;
}

table th,
table td {
  border: 1px solid black;
  padding: 10px;
  width: 20%;
  text-align: center;
}

.member-section button {
  font-size: 20px;
}

table th,
table td:first-child {
  width: 8%;
}
</style>