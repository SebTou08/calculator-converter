import { getMoneyConvertion } from "@/services/exchangeRateService/exchangeRate.services";
import { reactive } from "vue";

export class Dashboard {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async convertMoney(from: string, to: string, amount: number) {
    const response = await getMoneyConvertion();
    let toValue: number;
    switch (to) {
      case "USD":
        toValue = response.rates.USD;
        break;
      case "PEN":
        toValue = response.rates.PEN;
        break;
      default:
        toValue = response.rates.USD;
        break;
    }
    const valueChanged: number = amount * toValue;
    console.log({ valueChanged });
    return valueChanged;
  }
}

const dashboard = reactive(new Dashboard());
export default dashboard;
