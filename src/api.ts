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
