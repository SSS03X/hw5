import { useState } from "react";
import "./App.css";
import MovieInput from "./components/MovieInput/MovieInput";
import MovieList from "./components/MovieList/MovieList";
import dislikeIcon from "./assets/dislike.svg";

interface Movie {
  id: number;
  name: string;
  watched: boolean;
  likeStatus: "like" | "dislike" | "none";
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieName, setMovieName] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddOrEditMovie = () => {
    if (movieName.trim() === "") return;

    setMovies((prevMovies) => {
      if (editingId !== null) {
        return prevMovies.map((movie) =>
          movie.id === editingId ? { ...movie, name: movieName } : movie
        );
      } else {
        return [...prevMovies, { id: Date.now(), name: movieName, watched: false, likeStatus: "none" }];
      }
    });

    setMovieName("");
    setEditingId(null);
  };

  const handleDeleteMovie = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const handleEditMovie = (id: number) => {
    const movieToEdit = movies.find((movie) => movie.id === id);
    if (movieToEdit) {
      setMovieName(movieToEdit.name);
      setEditingId(id);
    }
  };

  const handleCancelEditing = () => {
    setEditingId(null);
    setMovieName("");
  };

  const toggleWatched = (id: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  };

  const handleToggleLike = (id: number, status: "like" | "dislike") => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, likeStatus: movie.likeStatus === status ? "none" : status } : movie
      )
    );
  };

  return (
    <div className="container">
      <h1>Movie Tracker</h1>
      <MovieInput
        movieName={movieName}
        setMovieName={setMovieName}
        handleAddOrEditMovie={handleAddOrEditMovie}
        editingIndex={editingId}
        handleCancelEditing={handleCancelEditing}
      />
      <MovieList
        movies={movies}
        handleEditMovie={handleEditMovie}
        handleDeleteMovie={handleDeleteMovie}
        toggleWatched={toggleWatched}
        onToggleLike={handleToggleLike}
        dislikeIcon={dislikeIcon}
      />
    </div>
  );
}