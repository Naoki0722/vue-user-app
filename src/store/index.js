import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth: "",
    user: "",
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
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      let responseLogin = await axios.post("https://mighty-meadow-44760.herokuapp.com//api/login", {
        email: email,
        password: password,
      });
      let responseUser = await axios.get("https://mighty-meadow-44760.herokuapp.com//api/user", {
        params: {
          email: email,
        },
      });
      console.log(responseUser.data.data[0]);
      commit("auth", responseLogin.data.auth);
      commit("user", responseUser.data.data[0]);
      router.replace("/home");
    },
    logout({ commit }) {
      axios
        .post("https://mighty-meadow-44760.herokuapp.com/api/logout", {
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
