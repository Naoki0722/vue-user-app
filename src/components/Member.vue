<template>
  <div class="member-section">
    <table>
      <tr>
        <th>ID</th>
        <th>メンバー名</th>
        <th>詳細</th>
      </tr>
      <tr v-for="(data,index) in tables" :key="index">
        <td>{{data.subordinate_id}}</td>
        <td>{{data.name}}</td>
        <td>
          <button @click="$router.push({ name: 'Detail', params: { id: data.subordinate_id } })">
            詳細
          </button>
        </td>
      </tr>
    </table>

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
  async mounted() {
    // let data = [];
    await axios
      .get(`${process.env.VUE_APP_API_URL}/api/user/person/${this.$store.state.user.id}`)
      .then((response) => {
        response.data.data.map((member) => {
          this.tables.push(member)
        })
      });
  }
};
</script>

<style scoped>
.member-section {
  margin: 3% 5%;
  font-size: 20px;
  width: 60%;
}

table th,
table td {
  padding: 10px;
  width: 20%;
  text-align: center;
  border-top: 1px solid black;
  border-left: 1px solid black;
}

table {
  width: 80%;
  margin: 0 auto;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
}

.member-section button {
  border: 1px solid rgb(88, 134, 235);
  background-color: rgb(195, 213, 252);
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  display: block;
  padding: 10px 25px;
  margin: 10px auto;
}

table th,
table td:first-child {
  width: 8%;
}
</style>
