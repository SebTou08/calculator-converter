import axios from "axios";

interface IMoneyResponse {
  base: string;
  date: string;
  rates: IRates;
}

interface IRates {
  PEN: number;
  USD: number;
}

export async function getMoneyConvertion(): Promise<IMoneyResponse> {
  const BaseURL = "http://api.exchangeratesapi.io/v1/latest";
  const config = {
    params: {
      access_key: "8ec73871af6d8dcdd754ea3e778df7cb",
    },
  };
  const response = await axios.get(BaseURL, config);
  return <IMoneyResponse>response.data;
}
