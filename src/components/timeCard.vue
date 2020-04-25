<template>
  <div class="time-card text-center mt-4 pb-2">
    <!-- Card head -->
    <div class="time-card__head">
      <h1 class="time-card__title pb-1">Бишкек. Время намаза</h1>
    </div>
    <!-- Card body -->
    <div class="time-card__body bg-success text-white rounded-sm">
      <!-- Card date -->
      <div class="time-card__date pb-2">
        <div class="row" v-if="date.gregorian">
          <div class="col-md-4 text-md-left">
            {{ date.gregorian.day }}
            {{ gregorianMonths[date.gregorian.month.number - 1] }}
            {{ date.gregorian.year }}
          </div>
          <div class="col-md-4 text-md-center">
            <live-time />
          </div>
          <div class="col-md-4 text-md-right">
            {{ date.hijri.day }}
            {{ hijriMonths[date.hijri.month.number - 1] }}
            {{ date.hijri.year }}
          </div>
        </div>
      </div>
      <!-- Card timings -->

      <div class="time-card__timings">
        <div class="row" v-if="time.Fajr">
          <div class="col-md-2 col-sm-4 col-6">
            <div class="time-card__item">
              <div class="time-card__time">
                {{ time.Fajr | rmUTC }}
              </div>
              <div class="time-card__name">
                Фаджр
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-6">
            <div class="time-card__item">
              <div class="time-card__time">
                {{ time.Sunrise | rmUTC }}
              </div>
              <div class="time-card__name">
                Восход
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-6">
            <div class="time-card__item">
              <div class="time-card__time">
                {{ time.Dhuhr | rmUTC }}
              </div>
              <div class="time-card__name">
                Зухр
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-6">
            <div class="time-card__item">
              <div class="time-card__time">
                {{ time.Asr | rmUTC }}
              </div>
              <div class="time-card__name">
                Аср
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-6">
            <div class="time-card__item">
              <div class="time-card__time">
                {{ time.Maghrib | rmUTC }}
              </div>
              <div class="time-card__name">
                Магриб
              </div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-6">
            <div class="time-card__item">
              <div class="time-card__time">
                {{ time.Isha | rmUTC }}
              </div>
              <div class="time-card__name">
                Иша
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import liveTime from "@/components/app-live-time.vue";

export default {
  name: "timeCard",
  props: {
    time: {
      type: Object,
      requred: true
    },
    date: {
      type: Object,
      requred: true
    }
  },
  components: {
    liveTime
  },
  computed: {
    gregorianMonths() {
      return this.$store.state.gregorianMonths;
    },
    hijriMonths() {
      return this.$store.state.hijriMonths;
    }
  }
};
</script>
