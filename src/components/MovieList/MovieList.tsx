import styles from "./styles.module.css";
import LikeDislikeButtons from "../LikeDislikeButtons/LikeDislikeButtons";

interface Movie {
  id: number;
  name: string;
  watched: boolean;
  likeStatus: "like" | "dislike" | "none";
}

interface MovieListProps {
  movies: Movie[];
  toggleWatched: (id: number) => void;
  handleEditMovie: (id: number) => void;
  handleDeleteMovie: (id: number) => void;
  onToggleLike: (id: number, status: "like" | "dislike") => void;
  dislikeIcon: string;
}

const MovieList = ({
  movies,
  toggleWatched,
  handleEditMovie,
  handleDeleteMovie,
  onToggleLike,
  dislikeIcon,
}:MovieListProps) => {
  return (
    <div className={styles.wrapper}>
      {movies.map((movie, index) => (
        <div key={movie.id}>
          {`${index + 1}. ${movie.name}`}
          <div className={styles.buttonsWrapper}>
            <input type="checkbox" onChange={() => toggleWatched(movie.id)} checked={movie.watched} />
            <button className={styles.editButton} onClick={() => handleEditMovie(movie.id)}>Edit</button>
            <button className={styles.deleteButton} onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
          </div>

          {movie.watched && (
            <LikeDislikeButtons
              likeStatus={movie.likeStatus}
              onLike={() => onToggleLike(movie.id, "like")}
              onDislike={() => onToggleLike(movie.id, "dislike")}
              icon={dislikeIcon} 
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;