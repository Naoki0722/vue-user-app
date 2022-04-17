<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-toolbar-title>USER-APP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = true" ml="10"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list v-if="!this.$store.state.auth">
        <v-list-item link v-if="this.$route.path !== '/login'">
          <v-list-item-title @click="$router.push('/login')"
            >ログイン</v-list-item-title
          >
        </v-list-item>
        <v-list-item link v-if="this.$route.path !== '/signup'">
          <v-list-item-title @click="$router.push('/signup')"
            >新規登録</v-list-item-title
          >
        </v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item link>
          <v-list-item-title @click="$store.dispatch('logout')"
            >ログアウト</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    auth() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
