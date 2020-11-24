<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dark>

      <v-toolbar-title>
        <v-img src="../assets/header-logo.png"   max-height="100" max-width="250"></v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu offset-y v-if="parentData">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="deep-purple accent-2"
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
      <v-btn  v-else
        color="deep-purple accent-2"
        dark
        @click="auth"
      >ログアウト</v-btn>
    </v-app-bar>
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