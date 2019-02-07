const getDefaultState = () => {
  return {
    currentLocation: {
      zipCode: "",
      latitude: null,
      longitude: null,
      city: "",
      state: "",
      timezone: {
        timezoneIdentifier: "",
        timezoneAbbreviation: "",
        utcOffsetSec: null,
        isDst: ""
      },
      acceptableCityNames: []
      // {
      //   city: "",
      //   state: ""
      // }
    }
  };
};

const state = getDefaultState();

const zipCodeApiTransformer = location => {
  return {
    zipCode: location.zip_code,
    latitude: location.lat,
    longitude: location.lng,
    city: location.city,
    state: location.state,
    timezone: {
      timezoneIdentifier: location.timezone_identifier,
      timezoneAbbreviation: location.timezone_abbr,
      utcOffsetSec: location.utc_offset_sec,
      isDst: location.is_dst
    },
    acceptableCityNames: location.acceptable_city_names
  };
};

const mutationTypes = {
  SET_ZIP_CODE: "SET_ZIP_CODE",
  SET_LOCATION: "SET_LOCATION",
  RESET_GEOGRAPHY_MODULE: "RESET_GEOGRAPHY_MODULE"
};

const mutations = {
  [mutationTypes.SET_ZIP_CODE](state, zipCode) {
    state.currentLocation.zipCode = zipCode;
  },
  [mutationTypes.SET_LOCATION](state, transformedLocation) {
    state.currentLocation = JSON.parse(JSON.stringify(transformedLocation));
  },
  [mutationTypes.RESET_GEOGRAPHY_MODULE](state) {
    Object.assign(state, getDefaultState());
  }
};

const actions = {
  setLocation: ({ commit }, locationData) => {
    let transformedLocation = zipCodeApiTransformer(locationData);
    commit(mutationTypes.SET_LOCATION, transformedLocation);
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
