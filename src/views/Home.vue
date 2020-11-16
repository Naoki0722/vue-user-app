<template>
  <div id="home">
    <div id="header">
      <div class="header-logo">
        <a href="#"><img src="../assets/header-logo.png"></a>
      </div>
      <div class="header-link">
        <p @click="auth">ログアウト</p>
      </div>
    </div>
    <div class="content">
      <div class="myprofile">
        <img src="../assets/icon.png">
        <p>{{mydata}}</p>
        <button @click="$router.push({ name: 'Profile'})">詳細</button>
      </div>
      <Member></Member>
    </div>
  </div>
</template>

<script>
import Member from "../components/Member"
export default {
  data() {
    return {
      mydata: this.$store.state.user.name
    };
  },
  components: {
    Member
  },
  methods: {
    auth() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header,
.header-logo,
.header-link {
  background-color: gray;
}

.header-logo img {
  width: 40%;
}

.header-link {
  display: flex;
}

.header-link p {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 15px;
  background-color: white;
  color: rgb(179, 177, 177);
  font-weight: bold;
}

.header-link p:last-child {
  margin-right: 30px;
}

.header-link p:hover {
  cursor: pointer;
  color: rgb(55, 55, 235);
  transition: color .3s;
}

.content {
  display: flex;
  /* justify-content: space-between; */
}


.myprofile {
  width: 15%;
  text-align: center;
  margin: 3% 0;
}

.myprofile img{
  width: 100px;
}

.myprofile button{
  font-size: 15px;
  font-weight: bold;
  display: block;
  padding: 5px 20px;
  margin: 20px auto;
}

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
