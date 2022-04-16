<template>
  <div>
    <div class="mx-auto">
      <Header />
      <LoginCard title="ログイン画面" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Organisms/Header';
import LoginCard from '../components/Organisms/LoginCard';
export default {
  components: {
    Header,
    LoginCard
  }
};
</script>

<style scoped></style>
