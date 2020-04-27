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
    let date = new Date();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();
    const times = JSON.parse(localStorage.getItem("times"));

    // If true > from localStorage
    if (
      times &&
      times[0].date.gregorian.month.number == currentMonth &&
      times[0].date.gregorian.year == currentYear
    ) {
      this.dataCalculate(times);
      this.monthDate = times;
    } else {
      // Else > get data from api
      localStorage.removeItem("times");
      axios
        .get(
          "https://api.aladhan.com/v1/calendarByCity?city=Bishkek&country=KG&method=3&school=1"
        )
        .then(res => {
          this.dataCalculate(res.data.data);
          this.monthDate = res.data.data;
          // set to localStorage
          localStorage.setItem("times", JSON.stringify(res.data.data));
        });
    }
  },
  components: {
    timeCard,
    timeList
  }
};
</script>
