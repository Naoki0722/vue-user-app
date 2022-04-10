<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-toolbar-title>USER-APP</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = true" ml="10"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item link>
          <v-list-item-title @click="$router.push('/')"
            >ログイン</v-list-item-title
          >
        </v-list-item>
        <v-list-item link>
          <v-list-item-title @click="$router.push('/signup')"
            >新規登録</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ["parentData"],
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    auth() {
      this.$store.dispatch('logout');
    },
  },
};
</script>
