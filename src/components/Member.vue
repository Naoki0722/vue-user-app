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
export default {
  data() {
    return {
      mydata: "松崎",
      tables: [
        {
          id: 1,
          name: "佐藤"
        },
        {
          id: 2,
          name: "田中"
        },
        {
          id: 3,
          name: "中野"
        }
      ]
    };
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