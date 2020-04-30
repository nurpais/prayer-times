<template>
  <div class="card rounded-lg mt-6">
    <!-- Card Header -->
    <div class="card-header">
      <div class="card-icon rounded-sm mr-2">
        <img src="../assets/images/svg/Mosque.svg" alt="Mosque" />
      </div>
      <div class="card-title">
        <div class="mr-1">Бишкек.</div>
        <div class="mr-1">Время намазов.</div>
        <div class="text-sm ml-auto">Часовой пояс: UTC+6</div>
      </div>
    </div>
    <!-- Card Body -->
    <div class="card-body p-0">
      <div class="card-times text-center" v-if="time.Fajr">
        <div class="row no-gutters">
          <div class="col-md-2 col-sm-4 col-6">
            <div class="card-times-item">
              <div class="card-times-time">{{ time.Fajr | rmUTC }}</div>
              <div class="card-times-name">Фаджр</div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-6">
            <div class="card-times-item active">
              <div class="card-times-time">{{ time.Sunrise | rmUTC }}</div>
              <div class="card-times-name">Восход</div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-6">
            <div class="card-times-item">
              <div class="card-times-time">{{ time.Dhuhr | rmUTC }}</div>
              <div class="card-times-name">Зухр</div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-6">
            <div class="card-times-item">
              <div class="card-times-time">{{ time.Asr | rmUTC }}</div>
              <div class="card-times-name">Аср</div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-6">
            <div class="card-times-item">
              <div class="card-times-time">{{ time.Maghrib | rmUTC }}</div>
              <div class="card-times-name">Магриб</div>
            </div>
          </div>
          <div class="col-md-2 col-sm-4 col-6">
            <div class="card-times-item">
              <div class="card-times-time">{{ time.Isha | rmUTC }}</div>
              <div class="card-times-name">Иша</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Card Footer -->
    <div class="card-footer card-footer-date" v-if="date.gregorian">
      <div class="card-footer-date-item text-sm">
        <live-time />
      </div>
      <div class="card-footer-date-item text-sm">
        {{ date.gregorian.day }}
        {{ gregorianMonths[date.gregorian.month.number - 1] }}
        {{ date.gregorian.year }}
      </div>
      <div class="card-footer-date-item text-sm">
        {{ date.hijri.day }}
        {{ hijriMonths[date.hijri.month.number - 1] }}
        {{ date.hijri.year }}
      </div>
      <div class="card-footer-date-item text-sm">
        Всемирная исламская лига (MWL)
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
