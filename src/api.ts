const API_KEY = "e38b0580574fde0e4c7a0dc0845037c5";
const BASE_PATH = "https://api.themoviedb.org/3/";

export interface IMovie {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
}

export interface IGetMoviesResult {
  dates: {
    maximun: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (res) => res.json()
  );
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzhiMDU4MDU3NGZkZTBlNGM3YTBkYzA4NDUwMzdjNSIsInN1YiI6IjY2NGQ3YjI5ZTliZDNlZDVlOGNkZmE5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ArB3FNv-dZVllD7r9AKOBn-x11Q1qbVInddHGjTsKTk",
  },
};

fetch("https://api.themoviedb.org/3/search/multi?query=dune", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
