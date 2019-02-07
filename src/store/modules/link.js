const state = {
  showLinks: true,
  showBookmarksBar: false,
  links: [],
  visibility: "all"
};

// visibility filters
const filters = {
  all: function(links) {
    return links;
  }
};

const mutationTypes = {
  // Links
  SET_SHOW_LINKS: "SET_SHOW_LINKS",
  ADD_NEW_LINK: "ADD_NEW_LINK",
  REMOVE_LINK: "REMOVE_LINK",
  REMOVE_COMPLETED_LINKS: "REMOVE_COMPLETED_LINKS",
  ON_VISIBILITY_CHANGE: "ON_VISIBILITY_CHANGE"
};

const mutations = {
  [mutationTypes.SET_SHOW_LINKS](state, showLinks) {
    state.showLinks = showLinks;
  },
  [mutationTypes.ADD_NEW_LINK](state, newLink) {
    state.links.push({
      title: newLink.title,
      url: newLink.url,
      category: newLink.category
    });
  },
  [mutationTypes.REMOVE_LINK](state, link) {
    state.links.splice(state.links.indexOf(link), 1);
  },
  [mutationTypes.ON_VISIBILITY_CHANGE](state, visibility) {
    state.visibility = visibility;
  },
  [mutationTypes.REMOVE_COMPLETED_LINKS](state) {
    // Check this out later...
    state.links = filters.active(state.links);
  }
};

const actions = {
  setShowLinks: ({ commit }, showLinks) => {
    commit(mutationTypes.SET_SHOW_LINKS, showLinks);
  },
  addLink: ({ commit }, newLink) => {
    let title = newLink.title && newLink.title.trim();
    let url = newLink.url && newLink.url.trim();
    let category = newLink.category && newLink.category.trim();
    if (!title || !url || !category) {
      return;
    }
    // DEV: Manual Addition of internet protocol.
    newLink.url = "https://" + newLink.url;
    commit(mutationTypes.ADD_NEW_LINK, newLink);
  },
  removeLink: ({ commit }, link) => {
    commit(mutationTypes.REMOVE_LINK, link);
  },
  onFilterChange: ({ commit }, visibility) => {
    if (filters[visibility]) {
      commit(mutationTypes.ON_VISIBILITY_CHANGE, visibility);
    } else {
      commit(mutationTypes.ON_VISIBILITY_CHANGE, "all");
    }
  }
};

const getters = {
  filteredLinks: state => {
    return filters[state.visibility](state.links);
  }
};

export default {
  state,
  mutationTypes,
  mutations,
  actions,
  getters,
  filters,
  namespaced: true
};
