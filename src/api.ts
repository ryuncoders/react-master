const BASE_URL = `https://api.coinpaprika.com/v1`;
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

export async function fetchCoinInfo(coinId: string) {
  return await fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinTickers(coinId: string) {
  return await fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export async function fetchCoinHistory(coinId: string) {
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  // return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  return await fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`).then((response) =>
    response.json()
  );
}

/* interface ITeam {
  id: string;
  name: string;
  position: string;
}

interface IInfo {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  team: ITeam[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface ITrackers {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

export async function fetchCoinInfo(coinId: string) {
  const data: IInfo = await fetch(`${BASE_URL}/coins/${coinId}`).then((res) =>
    res.json()
  );
  return data;
}

export async function fetchCoinTracker(coinId: string) {
  const data: ITrackers = await fetch(`${BASE_URL}/trackers/${coinId}`).then(
    (res) => res.json()
  );
  return data;
} */
