<template>
  <div class="container">
    <!-- Time card -->
    <time-card :time="currentTime" :date="currentDate" />
    <!-- Time list -->
    <time-list :date="monthDate" />
  </div>
</template>

<script>
import axios from "axios";

import timeCard from "@/components/timeCard.vue";
import timeList from "@/components/timeList.vue";

export default {
  name: "home",
  data() {
    return {
      currentTime: {},
      currentDate: {},
      monthDate: []
    };
  },
  methods: {
    dataCalculate(data) {
      // Get current date
      let getDay = new Date().getDate() - 1;
      let current = data[getDay];
      // Get current time
      this.currentTime = current.timings;
      // Get calendar date
      this.currentDate = current.date;
    }
  },
  mounted() {
    axios
      .get(
        "http://api.aladhan.com/v1/calendarByCity?city=Bishkek&country=KG&method=3&school=1"
      )
      .then(res => {
        this.dataCalculate(res.data.data);
        this.monthDate = res.data.data;
      });
  },
  components: {
    timeCard,
    timeList
  }
};
</script>
