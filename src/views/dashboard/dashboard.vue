<template>
  <div></div>
</template>

<script>
import dashboard, { Dashboard } from "@/views/dashboard/dashboard";
import { onMounted } from "vue";

export default {
  name: "dashboard-view",
  setup() {
    onMounted(() => {
      dashboard.convertMoney("USD", "PEN", 50);
      dashboard.convertMoney("USD", "USD", 50);
    });
  },
};
</script>

<style scoped></style>
