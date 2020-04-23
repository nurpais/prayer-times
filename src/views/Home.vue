<template>
  <div class="container">
    <div class="time-card text-center mt-4 pb-2">
      <!-- Card head -->
      <div class="time-card__head">
        <h1 class="time-card__title pb-1">Бишкек. Время намаза</h1>
      </div>
      <!-- Card body -->
      <div class="time-card__body bg-success text-white rounded-sm">
        <!-- Card date -->
        <div class="time-card__date pb-2">
          <div class="row">
            <div class="col-md-4 text-md-left">date</div>
            <div class="col-md-4 text-md-center">
              <live-time />
            </div>
            <div class="col-md-4 text-md-right">date</div>
          </div>
        </div>
        <!-- Card timings -->
        <div class="time-card__timings">
          <div class="row">
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item">
                <div class="time-card__time">
                  04:21
                </div>
                <div class="time-card__name">
                  Фаджр
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item">
                <div class="time-card__time">
                  04:21
                </div>
                <div class="time-card__name">
                  Фаджр
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item">
                <div class="time-card__time">
                  04:21
                </div>
                <div class="time-card__name">
                  Фаджр
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item">
                <div class="time-card__time">
                  04:21
                </div>
                <div class="time-card__name">
                  Фаджр
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item">
                <div class="time-card__time">
                  04:21
                </div>
                <div class="time-card__name">
                  Фаджр
                </div>
              </div>
            </div>
            <div class="col-md-2 col-sm-4 col-6">
              <div class="time-card__item">
                <div class="time-card__time">
                  04:21
                </div>
                <div class="time-card__name">
                  Фаджр
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="time-list text-center mt-4">
      <div class="time-list__head">
        <h2 class="time-list__title">
          Расписание намаза на месяц. Бишкек
        </h2>
        <div class="time-list__date">
          Апрель 2020
        </div>
      </div>
      <div class="time-list__body mt-2">
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
            <tr>
              <td scope="row">1</td>
              <td>05:06</td>
              <td>06:44</td>
              <td>13:05</td>
              <td>17:35</td>
              <td>19:28</td>
              <td>21:00</td>
            </tr>
            <tr>
              <td scope="row">1</td>
              <td>05:06</td>
              <td>06:44</td>
              <td>13:05</td>
              <td>17:35</td>
              <td>19:28</td>
              <td>21:00</td>
            </tr>
            <tr>
              <td scope="row">1</td>
              <td>05:06</td>
              <td>06:44</td>
              <td>13:05</td>
              <td>17:35</td>
              <td>19:28</td>
              <td>21:00</td>
            </tr>
            <tr>
              <td scope="row">1</td>
              <td>05:06</td>
              <td>06:44</td>
              <td>13:05</td>
              <td>17:35</td>
              <td>19:28</td>
              <td>21:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import liveTime from "@/components/app-live-time.vue";
export default {
  name: "home",
  components: {
    liveTime
  }
};
</script>
