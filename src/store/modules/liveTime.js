export default {
  namespaced: true,
  state: {
    h: "",
    m: "",
    s: ""
  },
  getters: {
    getTime({ h, m, s }) {
      return `${h}:${m}:${s}`;
    }
  },
  mutations: {
    setTime(state, { h, m, s }) {
      state.h = h;
      state.m = m;
      state.s = s;
    }
  },
  actions: {
    startTime({ commit, dispatch }) {
      const today = new Date();
      const time = {};
      time.h = today.getHours();
      time.m = today.getMinutes();
      time.s = today.getSeconds();
      time.m = checkTime(time.m);
      time.s = checkTime(time.s);
      commit("setTime", time);
      setTimeout(() => {
        dispatch("startTime");
      }, 1000);

      function checkTime(i) {
        if (i < 10) {
          i = "0" + i;
        } //just add zero
        return i;
      }
    }
  }
};
