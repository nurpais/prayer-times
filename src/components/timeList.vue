<template>
  <div class="time-list text-center mt-4">
    <!-- List head -->
    <div class="time-list__head">
      <h2 class="time-list__title">
        Расписание намазов на месяц. Бишкек
      </h2>
      <div class="time-list__date">
        Апрель 2020
      </div>
    </div>
    <!-- List body -->
    <div class="time-list__body mt-2">
      <!-- List table -->
      <table class="time-list__table table table-striped table-borderless">
        <thead class="bg-success text-white">
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
      <div class="time-list__mobile">
        mob
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
  }
};
</script>
