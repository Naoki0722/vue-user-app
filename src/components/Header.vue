<template>
  <div id="header">
    <div class="header-logo">
      <a href="#"><img src="../assets/header-logo.png"></a>
    </div>
    <!-- ログインしている時としていない時でアイコン表示を変えるように実装 -->
    <!-- 未ログイン時 -->
    <div class="header-link ma-4" v-if="parentData">  
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            MENU
          </v-btn>
        </template>
        <v-list>
          <v-list-item link>
            <v-list-item-title @click="$router.push('/')">ログイン</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title @click="$router.push('/signup')">新規登録</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <!-- ログイン時 -->
    <div v-else class="header-link ma-4">
      <v-btn
        color="primary"
        dark
        @click="auth"
      >ログアウト</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ["parentData"],
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    auth() {
      this.$store.dispatch('logout');
    }
  }
};
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
  background-color:#64B5F6;
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
</style>