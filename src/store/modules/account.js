const getDefaultState = () => {
  return {
    username: "",
    nickname: ""
  };
};

const state = {
  nickname: "",
  username: ""
};

const getters = {
  nickname: state => state.nickname,
  username: state => state.username
};

const mutationTypes = {
  // Account
  RESET_STATE_ACCOUNT: "RESET_STATE_ACCOUNT",
  UPDATE_NICKNAME: "UPDATE_NICKNAME",
  UPDATE_USERNAME: "UPDATE_USERNAME"
};

const mutations = {
  [mutationTypes.RESET_STATE_ACCOUNT](state) {
    Object.assign(state, getDefaultState());
  },
  [mutationTypes.UPDATE_NICKNAME](state, nickname) {
    state.nickname = nickname;
  },
  [mutationTypes.UPDATE_USERNAME](state, username) {
    state.username = username;
  }
};

const actions = {
  resetAccountState: ({ commit }) => {
    commit(mutationTypes.RESET_STATE_ACCOUNT);
  },
  setNickname: ({ commit }, nickname) => {
    commit(mutationTypes.UPDATE_NICKNAME, nickname);
  },
  setUsername: ({ commit }, username) => {
    commit(mutationTypes.UPDATE_USERNAME, username);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
