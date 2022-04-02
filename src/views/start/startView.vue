<template>
  <div class="fullPageBackgrounf">
    <b-btn class="btnColor" v-on:click="goToDashboard">Dashboard</b-btn>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "startView",
  setup() {
    const goToDashboard = () => {
      router.push("dashboard");
    };
    return {
      goToDashboard
    };
  }
};
</script>

<style scoped>
.fullPageBackgrounf {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(135deg, #43c6ac, #191654, #572692);
}

.btnColor {
  background: #42b983;
}
</style>
