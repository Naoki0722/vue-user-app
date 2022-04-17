import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex);

axios.defaults.withCredentials = true

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth: "",
    user: "",
    loadingStatus: false
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    user(state, payload) {
      state.user = payload;
    },
    logout(state, payload) {
      state.auth = payload;
    },
    changeUserData(state, {name, tell, email, user_id, account}) {
      state.user.name = name;
      state.user.tell = tell;
      state.user.email = email;
      state.user.user_id = user_id;
      state.user.account = account;
    },
    loadingStatus(state,payload) {
      state.loadingStatus = payload;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      commit("loadingStatus", true);
      await axios
        .get(`${process.env.VUE_APP_API_URL}/sanctum/csrf-cookie`)
        .then(() => {
          axios.post(`${process.env.VUE_APP_API_URL}/login`, {
            email: email,
            password: password,
          })
          .then((res) => {
            console.log(res.data)
              alert('ログイン成功しました')
              commit("loadingStatus", false);
              commit("auth", true);
              commit("user", email);
              router.replace("/home");
          })
          .catch((err) => {
            console.log(err);
            alert('ログインエラーが発生しました');
            commit("loadingStatus", false);
          })
        })
        .catch((err) => {
          console.error(err)
        })
    },
    logout({ commit }) {
      axios
        .post("https://shielded-earth-80257.herokuapp.com/api/logout", {
          auth: this.state.auth,
        })
        .then((response) => {
          console.log(response);
          commit("logout", response.data.auth);
          router.replace("/");
        })
        .catch((error) => {
          console.log(error);
          alert.error;
        });
    },
    changeUser({ commit }, { name, tell, email, user_id, account }) {
      commit("changeUserData",
        {
          name: name,
          tell: tell,
          email: email,
          user_id: user_id,
          account: account
        }
      );
    },
  },
  modules: {},
});
