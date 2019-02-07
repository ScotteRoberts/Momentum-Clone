const state = {
  showQOTD: false,
  current: {
    author: "",
    category: "",
    content: ""
  }
};

const mutationTypes = {
  SET_SHOW: "SET_SHOW",
  GET_QOTD: "GET_QOTD"
};

const quotesTransformer = quoteData => {
  return {
    author: quoteData.author,
    category: quoteData.category,
    content: quoteData.quote
  };
};

const mutations = {
  [mutationTypes.SET_SHOW](state, value) {
    state.showQOTD = value;
  },
  [mutationTypes.GET_QOTD](state, transformedQOTD) {
    state.current = JSON.parse(JSON.stringify(transformedQOTD));
  }
};

const actions = {
  setShow: ({ commit }, value) => {
    commit(mutationTypes.SET_SHOW, value);
  },
  getQOTD: ({ commit }, quoteData) => {
    let transformedQOTD = quotesTransformer(quoteData);
    commit(mutationTypes.GET_QOTD, transformedQOTD);
  }
};

const getters = {};

/**
 * @description Quotes
 */
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
