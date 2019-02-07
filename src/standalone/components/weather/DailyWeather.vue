<template>
  <div>
    <!-- Today's Weather -->
    <div class="columns">
      <div class="column has-text-centered">
        <p>
          {{today}}
        </p>
        <p>
          {{currentWeather.temperature}}
        </p>
      </div>
    </div>
    <!-- Week's Weather -->
    <div class="columns">
      <div
        v-for="day in namedDailyWeather()"
        :key="day.id"
        class="column "
      >
        <div class="content">
          <span>{{day.name}}</span>
          <div class="icon is-small is-pulled-right">
            <i
              :class="'fas fa-' + day.icon"
              aria-hidden="true"
            ></i>
          </div>
          <div>Max: {{day.temperatureMax}}</div>
          <div>Min: {{day.temperatureMin}}</div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";
/**
 * Daily Weather Display
 */
export default {
  name: "DailyWeather",
  data() {
    return {
      numOfDaysShown: 3
    };
  },
  computed: {
    ...mapState("time", {
      dayOfWeek: state => state.local.calendar.dayOfWeek,
      dayNames: state => state.dayNames
    }),
    ...mapState("weather", {
      currentWeather: state => state.forecast.currently,
      dailyWeather: state => state.forecast.daily
    }),
    /** Abbreviates the days of the week to 3 characters
     * @returns {string}
     */
    dayNamesAbbr: function() {
      return this.dayNames.map(el => el.substring(0, 3));
    },
    /** Today's string value
     * @returns {string}
     */
    today: function() {
      return this.dayNames[this.dayOfWeek];
    }
  },
  methods: {
    /**
     * Filters data stored in Vuex from DarkSkyAPI
     */
    namedDailyWeather: function() {
      // DEV: Filtering out today and days beyond numOfDaysShown
      let week = this.dailyWeather.filter(
        el =>
          this.dailyWeather.indexOf(el) !== 0 &&
          this.dailyWeather.indexOf(el) <= this.numOfDaysShown
      );
      // DEV: Adding a "name" property to the day objects to show the day of the week
      for (let i = 0; i < this.numOfDaysShown; i++) {
        console.log("Week", week[i]);
        week[i].name = this.dayNamesAbbr[(this.dayOfWeek + i + 1) % 7];
      }
      return week;
    }
  }
};
</script>

<style>
</style>
