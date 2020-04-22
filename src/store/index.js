import Vue from "vue";
import Vuex from "vuex";
import gregorianCalendar from "./modules/gregorianCalendar";
import hijriCalendar from "./modules/hijriCalendar";
import liveTime from "./modules/liveTime";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gregorianMonth: [
      "Январь",
      "Февраль",
      "Март",
      "Апреля",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ],
    hijriMonth: [
      "Мухаррам",
      "Сафар",
      "Раби аль-авваль",
      "Раби ас-сани",
      "Джумада аль-уля",
      "Джумада ас-сани",
      "Раджаб",
      "Шабан",
      "Рамадан",
      "Шавваль",
      "Зу-ль-када",
      "Зу-ль-хиджа"
    ]
  },
  mutations: {},
  actions: {},
  modules: {
    gregorianCalendar,
    hijriCalendar,
    liveTime
  }
});
