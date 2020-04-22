export default {
  namespaced: true,
  state: {
    day: "",
    month: "",
    year: ""
  },
  getters: {
    getDate(state, getters, rootState) {
      if (state.month) {
        return `${state.day} ${rootState.gregorianMonth[state.month - 1]} ${
          state.year
        }`;
      }
    }
  },
  mutations: {
    setDate(state, { day, month, year }) {
      state.day = day;
      state.month = month.number;
      state.year = year;
    }
  },
  actions: {
    loadDate({ commit }, payload) {
      commit("setDate", payload);
    }
  }
};
