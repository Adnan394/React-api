import React, { useState } from "react";
import { getMovieList } from "./Api";
import { MoviesList } from "./MovieList";

function Header() {
  const [movies, setMovies] = useState([]);
  const find = async (q) => {
    const query = await getMovieList(q);
    setMovies(query);
  };

  return (
    <>
      <header>
        <h1>Db Film ReactJS</h1>
        <input
          type="search"
          placeholder="Cari film favorit kalian!!!"
          onChange={({ target }) => {
            find(target.value);
          }}
          className="search"
        />
      </header>
      <main>
        <div className="container">
          <MoviesList movies={movies} />
        </div>
      </main>
    </>
  );
}

export default Header;
