import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: "https://62842c2aa48bd3c40b6bd976.mockapi.io/usuariosTp7",
    posts: [],
  },
  actions: {
    async enviarUsuarios({ commit }, formData) {
      let usuarioNuevo = formData;
      try {
        await axios.post(this.state.url, usuarioNuevo, {
          "content-type": "application/json",
        });
        commit("enviarUsuarios");
      } catch (error) {
        console.error("Error Axios", error);
      }
    },
    getUsuarios({ commit }) {
      axios(this.state.url)
        .then(({ data }) => {
          commit("getUsuarios", data);
          console.log("Entro");
        })
        .catch((error) => console.error("Error Axios", error));
    },
  },
  mutations: {
    enviarUsuarios() {},
    getUsuarios(state, data) {
      state.posts = data;
    },
  },
});
