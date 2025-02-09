import styles from "./styles.module.css";

interface LikeDislikeButtonsProps {
    likeStatus: "like" | "dislike" | "none";
    onLike: () => void;
    onDislike: () => void;
    icon: string;
  }
  

  const LikeDislikeButtons = ({ likeStatus, onLike, onDislike, icon }: LikeDislikeButtonsProps) => {
    return (
      <div className={styles.likeDislikeContainer}>
        <button 
          className={`${styles.likeButton} ${likeStatus === "like" ? styles.active : ""}`} 
          onClick={onLike}
        >
          <img className={styles.likeIcon} src={icon} alt="Like" />
        </button>
  
        <button 
          className={`${styles.dislikeButton} ${likeStatus === "dislike" ? styles.active : ""}`} 
          onClick={onDislike}
        >
          <img className={styles.dislikeIcon} src={icon} alt="Dislike" />
        </button>
      </div>
    );
  };
  
  export default LikeDislikeButtons;