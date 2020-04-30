<template>
  <div>
    <div class="card rounded-lg mt-6">
      <!-- Card Header -->
      <div class="card-header">
        <div class="card-icon rounded-sm mr-2">
          <img src="../assets/images/svg/Carpet.svg" alt="Carpet" />
        </div>
        <div class="card-title">
          <div class="mr-1">Бишкек.</div>
          <div class="mr-1">Расписание намазов на месяц.</div>
          <div class="text-sm ml-auto">{{ currentDate }}</div>
        </div>
      </div>
      <!-- Card Body -->
      <div class="card-body pt-1">
        <!-- Desktop time list -->
        <table class="table time-list-table mobile-none text-center">
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
              v-for="(item, index) in date"
              :key="index"
              :class="{ 'active-item': index == new Date().getDate() - 1 }"
            >
              <td scope="row">{{ index + 1 }}</td>
              <td>{{ item.timings.Fajr | rmUTC }}</td>
              <td>{{ item.timings.Sunrise | rmUTC }}</td>
              <td>{{ item.timings.Dhuhr | rmUTC }}</td>
              <td>{{ item.timings.Asr | rmUTC }}</td>
              <td>{{ item.timings.Maghrib | rmUTC }}</td>
              <td>{{ item.timings.Isha | rmUTC }}</td>
            </tr>
          </tbody>
        </table>
        <!-- Mobile time list -->
        <ul
          class="time-list-mobile desktop-none"
          v-for="(item, index) in date"
          :key="index"
        >
          <li
            class="time-list-mobile-header rounded-sm"
            :class="{ 'active-item': index == new Date().getDate() - 1 }"
          >
            {{ index + 1 }}
            {{ gregorianMonths[item.date.gregorian.month.number - 1] }},
            {{ gregorianWeeks[item.date.gregorian.weekday.en] }}
          </li>
          <li>
            <span>Фаджр</span>
            {{ item.timings.Fajr | rmUTC }}
          </li>
          <li>
            <span>Восход</span>
            {{ item.timings.Sunrise | rmUTC }}
          </li>
          <li>
            <span>Зухр</span>
            {{ item.timings.Dhuhr | rmUTC }}
          </li>
          <li>
            <span>Аср</span>
            {{ item.timings.Asr | rmUTC }}
          </li>
          <li>
            <span>Магриб</span>
            {{ item.timings.Maghrib | rmUTC }}
          </li>
          <li>
            <span>Иша</span>
            {{ item.timings.Isha | rmUTC }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "timeList",
  props: {
    date: {
      type: Array,
      required: true
    }
  },
  computed: {
    gregorianWeeks() {
      return this.$store.state.gregorianWeeks;
    },
    gregorianMonths() {
      return this.$store.state.gregorianMonths;
    },
    currentDate() {
      return `${
        this.$store.state.gregorianMonths[new Date().getMonth()]
      } ${new Date().getFullYear()}`;
    }
  }
};
</script>
