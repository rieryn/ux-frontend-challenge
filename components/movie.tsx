import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


export default function Movie ({ movie }) {
    const { title, releaseYear, id } = movie;
    return (
        <div className="movie">
            <p>{movie.Title}</p>
            <p>({movie.Year})</p>
        </div>
    );
};