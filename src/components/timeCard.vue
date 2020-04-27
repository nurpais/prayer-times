<template>
  <div>
    <div class="card rounded-lg text-center mt-6">
      <div class="card-header rounded-sm">
        <h1 class="card-title">Бишкек. Время намазов</h1>
      </div>
      <div class="card-body">
        <!-- Card date -->
        <div class="card-date" v-if="date.gregorian">
          <div class="card-date__item">
            {{ date.gregorian.day }}
            {{ gregorianMonths[date.gregorian.month.number - 1] }}
            {{ date.gregorian.year }}
          </div>
          <div class="card-date__item">
            <live-time />
          </div>
          <div class="card-date__item">
            {{ date.hijri.day }}
            {{ hijriMonths[date.hijri.month.number - 1] }}
            {{ date.hijri.year }}
          </div>
        </div>
        <!-- Card timings -->
        <div class="card-times" v-if="time.Fajr">
          <div class="row">
            <div class="col-md-2 col-sm-4 col-6">
              <div class="card-times__item">
                <div class="card-times__time">{{ time.Fajr | rmUTC }}</div>
                <div class="card-times__name">Фаджр</div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="card-times__item">
                <div class="card-times__time">{{ time.Sunrise | rmUTC }}</div>
                <div class="card-times__name">Восход</div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="card-times__item">
                <div class="card-times__time">{{ time.Dhuhr | rmUTC }}</div>
                <div class="card-times__name">Зухр</div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="card-times__item">
                <div class="card-times__time">{{ time.Asr | rmUTC }}</div>
                <div class="card-times__name">Аср</div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="card-times__item">
                <div class="card-times__time">{{ time.Maghrib | rmUTC }}</div>
                <div class="card-times__name">Магриб</div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="card-times__item">
                <div class="card-times__time">{{ time.Isha | rmUTC }}</div>
                <div class="card-times__name">Иша</div>
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
