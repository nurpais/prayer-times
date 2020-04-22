<template>
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";
import liveTime from "@/components/app-live-time";

export default {
  name: "app-times",
  data() {
    return {
      timings: {}
    };
  },
  methods: {
    ...mapActions(["gregorianCalendar/loadDate", "hijriCalendar/loadDate"])
  },
  computed: {
    ...mapGetters({
      gregorian: "gregorianCalendar/getDate",
      hijri: "hijriCalendar/getDate"
    })
  },
  mounted() {
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
  },
  components: {
    liveTime
  }
};
</script>
