// DEV: Using Unsplash Developer API for photos.

import Unsplash, { toJson } from "unsplash-js";
import Vue from "vue";

const unsplash = new Unsplash({
  applicationId: process.env.VUE_APP_UNSPLASH_ACCESS_KEY,
  secret: process.env.VUE_APP_UNSPLASH_SECRET_KEY,
  callbackUrl: process.env.VUE_APP_UNSPLASH_CALLBACK_URL
});

const unsplashTransformer = response => {
  return {
    id: response.id,
    artist: {
      fullName: response.user.name,
      username: response.user.username,
      profile: response.user.links.html
    },
    description: response.description,
    views: response.views,
    urls: {
      full: response.urls.full,
      raw: response.urls.raw,
      regular: response.urls.regular,
      small: response.urls.small,
      thumb: response.urls.thumb
    }
  };
};

const state = {
  currentPhoto: {
    id: "0A_b9G-Rm6w",
    artist: {
      fullName: "Austin Neill",
      profile: "https://unsplash.com/@arstyy",
      username: "arstyy"
    },
    description: "huge rock near beach",
    views: 6820110,
    urls: {
      full:
        "https://images.unsplash.com/photo-1474433188271-d3f339f41911?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjQ0ODI3fQ",
      raw:
        "https://images.unsplash.com/photo-1474433188271-d3f339f41911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQ0ODI3fQ",
      regular:
        "https://images.unsplash.com/photo-1474433188271-d3f339f41911?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjQ0ODI3fQ",
      small:
        "https://images.unsplash.com/photo-1474433188271-d3f339f41911?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjQ0ODI3fQ",
      thumb:
        "https://images.unsplash.com/photo-1474433188271-d3f339f41911?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjQ0ODI3fQ"
    }
  },
  personal: [], // TEST: Not sure if we store their photos... need a server.
  unsplash: [], // TEST: ...Ditto... might need a server.
  history: [] // TEST: ...Ditto... might need a server.
};

const mutationTypes = {
  SET_CURRENT_PHOTO: "SET_CURRENT_PHOTO"
};

const mutations = {
  [mutationTypes.SET_CURRENT_PHOTO](state, transformedPhoto) {
    state.currentPhoto = JSON.parse(JSON.stringify(transformedPhoto));
  }
};

const actions = {
  setUnsplashRandomPhoto: ({ commit }) => {
    unsplash.photos
      .getRandomPhoto()
      .then(toJson)
      .then(unsplashResponse => {
        let transformedPhoto = unsplashTransformer(unsplashResponse);
        commit(mutationTypes.SET_CURRENT_PHOTO, transformedPhoto);
        console.log("Time test", Vue.time(Date.now()));
      })
      .catch(error => {
        console.log(error);
      });
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
