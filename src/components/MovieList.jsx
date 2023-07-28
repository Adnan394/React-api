import React from "react";

export const MoviesList = (props) => {
  if (props.movies) {
    return props.movies.map((movie) => {
      return (
        <div className="card">
          <div className="card-body">
            <h3>{movie.Title}</h3>
            <img src={`${movie.Poster}`} alt="" />
            <p>{movie.Year}</p>
          </div>
        </div>
      );
    });
  }
};
