import Vue from "vue";
import Vuex from "vuex";
import gregorianCalendar from "./modules/gregorianCalendar";
import hijriCalendar from "./modules/hijriCalendar";
import liveTime from "./modules/liveTime";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gregorianMonths: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ],
    hijriMonths: [
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
    ],
    gregorianWeeks: {
      Monday: "Понедельник",
      Tuesday: "Вторник",
      Wednesday: "Среда",
      Thursday: "Четверг",
      Friday: "Пятница",
      Saturday: "Суббота",
      Sunday: "Воскресенье"
    }
  },
  mutations: {},
  actions: {},
  modules: {
    gregorianCalendar,
    hijriCalendar,
    liveTime
  }
});
