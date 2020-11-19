<template>
  <div id="home">
    <Header :parentData="sendFlag"/>
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
import Header from "../components/Header"
export default {
  data() {
    return {
      mydata: this.$store.state.user.name,
      sendFlag: false,
    };
  },
  components: {
    Member,
    Header
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
  background-color: #64B5F6;
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
  width: 100%;
  margin: 3% 0;
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
  border: 1px solid black;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  display: block;
  padding: 5px 20px;
  margin: 20px auto;
}
</style>
