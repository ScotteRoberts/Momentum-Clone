const state = {
  show: false,
  provider: "google" // TEST: Can be ["google", "bing"]
};

const mutationTypes = {
  SET_SHOW: "SET_SHOW"
};

const mutations = {
  [mutationTypes.SET_SHOW](state, value) {
    state.show = value;
  }
};

const actions = {
  setShow: ({ commit }, value) => {
    commit(mutationTypes.SET_SHOW, value);
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
