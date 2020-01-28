import axios from "axios";

const state = {
  user: null,
  // endpoint: "http://internshopapi.000webhostapp.com/api/users"
  endpoint: "http://cybershop.pe.hu/api/users"
};
const getters = {};
const actions = {
  //this is the action used for registration
  register({ commit }, userData) {
    axios
      .post(state.endpoint, userData)
      .then(response => {
        console.log(response);
        commit("registerUser", response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
const mutations = {
  registerUser: (state, user) => (state.user = user)
};

export default {
  state,
  getters,
  actions,
  mutations
};
