<template>
  <b-container fluid class="bg-1">
    <b-row class="bg-2">
      <b-col class="text-light">
        <div> 
          <p class="myfs-1">Number1 Symbol1</p>
          <b-dropdown id="moneytype1" size="lg" right text="Tipo de Moneda" variant="dark">
            <b-dropdown-item href="#">Unites | Dolar</b-dropdown-item>
          </b-dropdown>

          <p class="myfs-1">Number2 Symbol2</p>
          <b-dropdown id="moneytype2" size="lg" right text="Tipo de Moneda" variant="dark">
            <b-dropdown-item href="#">Peru | Nuevo Sol</b-dropdown-item>
          </b-dropdown>
        </div>

        <br><br>

        <div class="info text-center">
          <p>1 Symbol1 = CNumber Symbol2<br>1 Symbol2 = CNumber2 Symbol1</p>
        </div>
      </b-col>

      <b-col class="">
        <b-button-group>
          <b-button squared class="mybtn" variant="light">7</b-button>
          <b-button squared class="mybtn" variant="light">8</b-button>
          <b-button squared class="mybtn" variant="light">9</b-button>
          <b-button squared class="mybtn" variant="success">
            <b-icon icon="arrow-left-right"></b-icon>
          </b-button>
        </b-button-group>
        <b-button-group>
          <b-button squared class="mybtn" variant="light">4</b-button>
          <b-button squared class="mybtn" variant="light">5</b-button>
          <b-button squared class="mybtn" variant="light">6</b-button>
          <b-button squared class="mybtn" variant="primary">
            <b-icon icon="backspace-fill"></b-icon>
          </b-button>
        </b-button-group>
        <b-button-group>
          <b-button squared class="mybtn" variant="light">1</b-button>
          <b-button squared class="mybtn" variant="light">2</b-button>
          <b-button squared class="mybtn" variant="light">3</b-button>
          <b-button squared class="mybtn" variant="primary">C</b-button>
        </b-button-group>
        <b-button-group>
          <b-button squared class="mybtn" variant="light">.</b-button>
          <b-button squared class="mybtn" variant="light">0</b-button>
          <b-button squared class="mybtn" variant="light">,</b-button>
          <b-button squared class="mybtn" variant="primary">=</b-button>
        </b-button-group>
      </b-col>
    </b-row>
  </b-container>
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

<style scoped>
.bg-1{
  background: linear-gradient(60.64deg, #264653 0%, #2A9D8F 100%);
  height: 100vh;
}
.bg-2{
  width: 54.3rem;
  height: 32.9rem;
  margin: auto;
  background: #343A40;
  align-items: center;
}
.mybtn {
  width: 5.3rem;
  height:5.3rem;
  font-size: 2.5rem;
  margin: 0rem 0.3rem 0.3rem 0rem;
}
.myfs-1{
 font-size: 2.5rem;
}
.myfs-2{
 font-size: 1.25rem;
}
</style>
