<template>
  <div class="live-time">
    {{ liveTime }}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "live-time",
  methods: {
    ...mapActions(["liveTime/startTime"])
  },
  computed: {
    ...mapGetters({
      liveTime: "liveTime/getTime"
    })
  },
  mounted() {
    this["liveTime/startTime"]();
  }
};
</script>
