let moment = require("moment");

const state = {
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  local: {
    clock: {
      show: false,
      now: moment().format("LT"),
      type: "" // TEST: Can be ["12", "24", percent]
    },
    calendar: {
      date: moment().format("L"), // mm/dd/yyyy
      dayOfWeek: moment().day() // numerical
    }
  },
  global: {
    show: false,
    locations: [], // TEST: Will mimic "local" state object structure
    type: "" // TEST: Can be ["12", "24"]
  }
};

const mutationTypes = {
  UPDATE_NOW: "UPDATE_TIME"
};

const mutations = {
  [mutationTypes.UPDATE_NOW](state) {
    let now = moment();
    state.local.clock.now = now.format("LT");
    // TODO: Create a foreach method for all clocks in the world clock section.
    state.local.calendar.date = now.format("L");
    state.local.calendar.dayOfWeek = now.day();
  }
};

const actions = {
  setNow: ({ commit }) => {
    setInterval(() => {
      commit(mutationTypes.UPDATE_NOW);
    }, 1000 * 1);
  }
};

const getters = {
  localNow: state => state.local.clock.now
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
