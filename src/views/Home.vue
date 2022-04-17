<template>
  <div id="home">
    <Header />
    <div class="content">
      <div class="myprofile">
        <img :src="image">
        <p>{{ mydata }}</p>
        <Button @auth="detail" buttonText='詳細' />
      </div>
      <Member></Member>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Atoms/Button.vue';
import Member from "../components/Member"
import Header from "../components/Organisms/Header"
export default {
  data() {
    return {
      mydata: this.$store.state.user.name,
      image: this.$store.state.user.image_path,
    };
  },
  components: {
    Member,
    Header,
    Button
  },
  methods: {
    detail() {
      this.$router.push({ name: 'Profile'});
    }
  }
}
</script>

<style scoped>
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
