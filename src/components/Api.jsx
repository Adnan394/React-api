import axios from "axios";

export const getMovieList = async (val) => {
  const movieList = await axios.get(`https://www.omdbapi.com/?apikey=df8865f1&s=${val}`);
  return movieList.data.Search;
};
