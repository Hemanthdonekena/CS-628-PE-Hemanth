import React, { useState } from 'react';

function MovieList() {
  const movies = [
    { title: "RRR", genre: "Action", releaseYear: 2022 },
    { title: "Kabir Singh", genre: "Romance", releaseYear: 2019 },
    { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "Zindagi Na Milegi Dobara", genre: "Drama", releaseYear: 2011 },
    { title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014 },
    { title: "Titanic", genre: "Romance", releaseYear: 1997 },
    { title: "SSMB29", genre: "Action", releaseYear: 2025 },
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div>
      <h1>Movie List</h1>
      <select onChange={handleGenreChange}>
        <option value="All Genres">All Genres</option>
        {Array.from(new Set(movies.map((movie) => movie.genre))).map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie) => (
          <li
            key={movie.title}
            onClick={() => alert(`Movie: ${movie.title}`)}
          >
            <strong>{movie.title}</strong> - {movie.genre} ({movie.releaseYear})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
