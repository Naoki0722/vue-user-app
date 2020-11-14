<template>
  <div class="detail">
    <Member :id = "id"></Member>
    <img src="../assets/icon.png">
    <table>
      <tr>
        <th>名前</th>
        <td>{{lists.name}}</td>
      </tr>
      <tr>
        <th>ユーザーID</th>
        <td>{{lists.id}}</td>
      </tr>
      <tr>
        <th>電話番号</th>
        <td>{{lists.tell}}</td>
      </tr>
      <tr>
        <th>メールアドレス</th>
        <td>{{lists.mail}}</td>
      </tr>
      <tr>
        <th>SNSアカウント名</th>
        <td>{{lists.sns}}</td>
      </tr>
    </table>
    <button @click="$router.push('/home')">一覧へ戻る</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: {
          name: "佐藤",
          id: "satou",
          tell: "000-0000-0000",
          mail: "test@test.com",
          sns: "http://www.test.co.jp"
      },
    };
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