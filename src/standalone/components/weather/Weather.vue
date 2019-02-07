<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <p v-if="currentLocation.city">
          {{currentLocation.city}}, {{currentLocation.state}}
        </p>
        <div
          v-else
          class="field has-addons"
        >
          <div class="control">
            <input
              v-model="zipCode"
              class="input"
              type="text"
              placeholder="Zip Code"
            >
          </div>
          <div class="control">
            <button
              @click="setLocation(zipCode)"
              class="button is-info"
            >
              Get Location
            </button>
          </div>
        </div>
      </div>

      <a
        href="https://darksky.net/dev"
        target="_blank"
        class="card-header-icon"
        aria-label="more options"
      >
        <p>
          DarkSkyAPI
        </p>
        <span class="icon">
          <i
            class="fas fa-tint"
            aria-hidden=true
          ></i>
        </span>
      </a>
    </header>

    <div class="card-content">
      <div v-show="this.visibility === 'minutely'">
        <minutely-weather />
      </div>
      <div v-show="this.visibility === 'hourly'">
        <hourly-weather />
      </div>
      <div v-show="this.visibility === 'daily'">
        <daily-weather />
      </div>

    </div>
    <footer class="card-footer">
      <a
        @click="resetGeographyModule"
        class="card-footer-item"
      >Reset Geography</a>
      <a
        @click="onFilterChange('hourly')"
        class="card-footer-item"
      >Hourly</a>
      <a
        @click="onFilterChange('daily')"
        class="card-footer-item"
      >Daily</a>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DailyWeather from "@/standalone/components/weather/DailyWeather";
import HourlyWeather from "@/standalone/components/weather/HourlyWeather";
import MinutelyWeather from "@/standalone/components/weather/MinutelyWeather";

export default {
  name: "Weather",
  data() {
    return {
      // TEST: Should be ["minutely", "hourly", "daily"]
      visibility: "daily",
      filters: {
        minutely: "minutely",
        hourly: "hourly",
        daily: "daily"
      }
    };
  },
  computed: {
    ...mapState("geography", {
      currentLocation: state => state.currentLocation
    })
  },
  components: {
    DailyWeather,
    HourlyWeather,
    MinutelyWeather
  },
  methods: {
    /**
     * Visibility filter for weather display
     * @param {string} visibility - "minutely", "hourly", "daily" filter strings
     */
    onFilterChange: function(visibility) {
      if (this.filters[visibility]) {
        this.visibility = visibility;
        console.log(this.visibility);
      } else {
        this.visibility = "daily";
      }
    },
    /**
     * Calls ZipCodeAPI with Zip Code and ZipCodeAPI Key.
     * Sets ZipCode in Vuex
     * @param {number} zipCode - 5 digit zip code
     */
    setLocation: function(zipCode) {
      this.$axios
        .get(
          "https://www.zipcodeapi.com/rest/" +
            process.env.VUE_APP_ZIP_CODE_API_KEY +
            "/info.json/" +
            zipCode +
            "/us"
        )
        .then(response => {
          console.log("Location", response);
          this.$store.dispatch("geography/setLocation", response.data);
          this.setWeather(response.data.lat, response.data.lng);
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * Calls DarkSkyAPI with latitude, longitude, and DarkSkyAPI key.
     * Sets weather data in Vuex.
     * @param {number} latitude
     * @param {number} longitude
     */
    // TEST: Change to mounted section or interval calls.
    setWeather: function(latitude, longitude) {
      this.$axios
        .get(
          "https://api.darksky.net/forecast/" +
            process.env.VUE_APP_WEATHER_API_SECRET +
            "/" +
            latitude +
            "," +
            longitude
        )
        .then(response => {
          console.log("Weather Response", response);
          this.$store.dispatch("weather/setWeather", response.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * Clears Vuex weather module.
     */
    resetGeographyModule: function() {
      this.$store.commit("geography/RESET_GEOGRAPHY_MODULE");
    }
  }
};
</script>

<style>
</style>
