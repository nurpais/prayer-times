<template>
  <div>
    <div class="times-card text-center">
      <div class="time-card__heading py-4">
        <h1 class="time-card__title">Бишкек. Время намаза</h1>
      </div>
      <div class="time-card__body bg-success text-white rounded-sm">
        <div class="time-card__calendar">
          <div class="row mb-6">
            <div class="col-md-4 text-md-left">{{ gregorian }}</div>
            <div class="col-md-4 text-md-center">
              <live-time />
            </div>
            <div class="col-md-4 text-md-right">{{ hijri }}</div>
          </div>
        </div>
        <div class="time-card__timings">
          <div class="row">
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item">
                <div class="time-card__time">{{ timings.Fajr }}</div>
                <div class="time-card__name">Фаджр</div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item disable-time">
                <div class="time-card__time">{{ timings.Sunrise }}</div>
                <div class="time-card__name">Восход</div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item">
                <div class="time-card__time">{{ timings.Dhuhr }}</div>
                <div class="time-card__name">Зухр</div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item active-time">
                <div class="time-card__time">{{ timings.Asr }}</div>
                <div class="time-card__name">Аср</div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item">
                <div class="time-card__time">{{ timings.Maghrib }}</div>
                <div class="time-card__name">Магриб</div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item">
                <div class="time-card__time">{{ timings.Isha }}</div>
                <div class="time-card__name">Иша</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="text-center" style="margin-top:4rem">
      Расписание намаза на месяц. Бишкек
    </h2>
    <h2 class="text-center">Апрель 2020</h2>
    <!-- Times table -->
    <table class="time-list table table-striped text-center table-sm mt-4">
      <thead>
        <tr>
          <th scope="col">Число</th>
          <th scope="col">Фаджр</th>
          <th scope="col">Восход</th>
          <th scope="col">Зухр</th>
          <th scope="col">Аср</th>
          <th scope="col">Магриб</th>
          <th scope="col">Иша</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in fullCalendar"
          :key="index"
          :class="{ 'active-item': index == new Date().getDate() - 1 }"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ item.timings.Fajr | rmUTC }}</td>
          <td>{{ item.timings.Sunrise | rmUTC }}</td>
          <td>{{ item.timings.Dhuhr | rmUTC }}</td>
          <td>{{ item.timings.Asr | rmUTC }}</td>
          <td>{{ item.timings.Maghrib | rmUTC }}</td>
          <td>{{ item.timings.Isha | rmUTC }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import liveTime from "@/components/app-live-time";

export default {
  name: "app-times",
  data() {
    return {
      timings: {},
      fullCalendar: []
    };
  },
  methods: {
    ...mapActions(["gregorianCalendar/loadDate", "hijriCalendar/loadDate"])
  },
  computed: {
    ...mapGetters({
      gregorian: "gregorianCalendar/getDate",
      hijri: "hijriCalendar/getDate"
    }),
    today() {
      let today = new Date().getDate();
      let dateNow = this.fullCalendar[today - 1];
      return dateNow;
    }
  },
  mounted() {
    // timings
    const url =
      "http://api.aladhan.com/v1/timingsByCity?city=Bishkek&country=KG&method=3&school=1&adjustment=1";
    // axios
    axios.get(url).then(res => {
      // send to vuex
      this["gregorianCalendar/loadDate"](res.data.data.date.gregorian);
      this["hijriCalendar/loadDate"](res.data.data.date.hijri);
      // set local timings
      this.timings = res.data.data.timings;
    });
    const calendar =
      "http://api.aladhan.com/v1/calendarByCity?city=Bishkek&country=KG&method=3&school=1";

    axios.get(calendar).then(res => {
      this.fullCalendar = res.data.data;
    });
  },
  filters: {
    rmUTC(value) {
      return value.replace("(+06)", "").trim();
    }
  },
  components: {
    liveTime
  }
};
</script>
