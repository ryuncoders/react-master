export interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
export async function fetchCoins() {
  const coins: ICoin[] = await fetch(
    "https://api.coinpaprika.com/v1/coins"
  ).then((rep) => rep.json());
  return coins.slice(0, 100);
}
