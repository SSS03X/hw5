import React from "react";
import styles from "./styles.module.css";

interface MovieInputProps {
  movieName: string;
  setMovieName: (name: string) => void;
  handleAddOrEditMovie: () => void;
  handleCancelEditing?: () => void;
  editingIndex: number | null;
}

const MovieInput: React.FC<MovieInputProps> = ({
  movieName,
  setMovieName,
  handleAddOrEditMovie,
  handleCancelEditing,
  editingIndex,
}) => {
  const isEditing = editingIndex !== null;

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        placeholder="Enter movie name"
      />
      <button className={styles.button} onClick={handleAddOrEditMovie}>
        {isEditing ? "Edit" : "Add"}
      </button>
      {isEditing && handleCancelEditing && (
        <button className={styles.button} onClick={handleCancelEditing}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default MovieInput;