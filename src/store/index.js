import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import axios from "axios"
import router from "../router/index"

Vue.use(Vuex)//データを保持しておきたい場合に利用する。例）ユーザー情報など。ただしセキュリティの面からデータの受け渡しの時はなるべくprppsを利用する。またデータベースの情報は更新される可能性が高いのでVuexは利用せず、その都度取得する。

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: { //dataプロパティのようなデータを格納するところVuexのデータを管理
    auth: "",
    user: "",
  },
  mutations: {//データ更新、更新するにはcommitする必要がある。同期処理しかできない
    auth(state, payload) {
      state.auth = payload;
    },
    user(state, payload) {
      state.user = payload;
    },
    logout(state, payload) {
      state.auth = payload;
    }
  },
  actions: {//非同期処理ができる
    async login({ commit }, { email, password }) {
      const responseLogin = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password
      });
      const responseUser = await axios.get(
        "http://127.0.0.1:8000/api/user", {
        params: { email: email }
      });
      commit("auth", responseLogin.data.auth);
      commit("user", responseUser.data.data[0]);
      router.replace("/home");
    },
    logout({ commit }) {
      axios
        .post("http://127.0.0.1:8000/api/logout", {
          auth: this.state.auth
        })
        .then((response) => {
          console.log(response);
          commit("logout", response.data.auth);
          router.replace("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
});
