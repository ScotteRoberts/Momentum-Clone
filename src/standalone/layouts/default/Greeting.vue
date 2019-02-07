<template>

  <div class="container has-text-centered">
    <div class="time has-text-light">
      {{this.now}}
    </div>

    <div class="columns is-mobile is-centered">
      <div class="column is-narrow">
        <div
          v-if="username"
          class="title is-size-1 has-text-light"
        >
          Welcome, {{this.username}}
        </div>
        <div v-else>
          <h1 class="title is-size-1 has-text-light">
            What is your name?
          </h1>
          <input
            class="input is-rounded has-text-white"
            type="text"
            v-model="newName"
            @keyup.enter="setUsername(newName)"
          >
        </div>
      </div>
    </div>

    <div class="columns is-mobile is-centered">
      <div
        v-if="showFocus"
        class="column is-narrow"
      >
        <h2 class="is-size-2 has-text-white">
          What is your main focus for today?
        </h2>
        <input
          class="input is-rounded has-text-white"
          type="text"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Greeting",
  data() {
    return {
      newName: ""
    };
  },
  components: {},
  computed: {
    ...mapState("time", {
      now: state => state.local.clock.now
    }),
    ...mapState("focus", {
      showFocus: state => state.show
    }),
    /**
     * Getter / Setter for nickname data
     */
    nickname: {
      get() {
        return this.$store.state.account.nickname;
      },
      set(nickname) {
        this.setUsername(nickname);
      }
    },
    /**
     * Getter / Setter for username data
     */
    username: {
      get() {
        return this.$store.state.account.username;
      },
      set(username) {
        this.setUsername(username);
      }
    }
  },
  methods: {
    ...mapActions(["setNickname", "setUsername"])
  },

  mounted() {
    chrome.runtime.sendMessage({});
  }
};
</script>


<style lang="scss" scoped>
/* Uses Bulma.css for styling */
.time {
  font-size: 120px;
  margin: 0;
  padding: 0;
  font-weight: 400;
}
.greeting {
  font-size: 80px;
  font-weight: 400;
  margin: 0;
}
input {
  border: 1px solid white;
  background-color: transparent;
  text-align: center;
}
input::placeholder {
  color: white;
  opacity: 1;
  text-align: center;
}
</style>
