<template>
  <div>
    <div class="mx-auto overflow-hidden" height="100vh">
      <Header />
      <Card title="ログイン画面" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Card from '../components/Card';
export default {
  components: {
    Header,
    Card
  }
};
</script>

<style scoped></style>
