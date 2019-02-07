import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import Axios from "../plugins/vueAxios.js";
import VueMoment from "../plugins/vueMoment.js";

// Modules
// Core
import auth from "./modules/auth";
import geography from "./modules/geography";
import request from "./modules/request";
import time from "./modules/time";
// Content
import account from "./modules/account";
import focus from "./modules/focus";
import general from "./modules/general";
import link from "./modules/link";
import mantra from "./modules/mantra";
import note from "./modules/note";
import photo from "./modules/photo";
import quote from "./modules/quote";
import search from "./modules/search";
import todo from "./modules/todo";
import weather from "./modules/weather";

Vue.use(Vuex);
Vue.use(Axios);
Vue.use(VueMoment);

// Any information stored needed for multiple browser openings
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

// Any information persisted for single browser session
const vuexSession = new VuexPersistence({
  storage: window.sessionStorage
});

// TEST: Not working right now...
// Any information persisted by account types.
// const vuexCookie = new VuexPersistence({
//   restoreState: (key, storage) => Cookies.getJSON(key),
//   saveState: (key, state, storage) =>
//   modules: ["user"] // only save user module
// });

export default new Vuex.Store({
  modules: {
    account,
    auth,
    focus,
    general,
    geography,
    link,
    mantra,
    note,
    photo,
    quote,
    request,
    search,
    time,
    todo,
    weather
  },
  plugins: [vuexLocal.plugin, vuexSession.plugin]
});
