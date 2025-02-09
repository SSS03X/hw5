interface LikeDislikeButtonsProps {
    likeStatus: "like" | "dislike" | "none";
    onLike: () => void;
    onDislike: () => void;
    icon: string;
  }
  
  const LikeDislikeButtons = ({ likeStatus, onLike, onDislike, icon }: LikeDislikeButtonsProps) => {
    return (
      <div className="like-dislike-container">

        <button 
          className={`like-button ${likeStatus === "like" ? "active" : ""}`} 
          onClick={onLike}
        >
          <img className="like-icon" src={icon} alt="Like" />
        </button>
  
        <button 
          className={`dislike-button ${likeStatus === "dislike" ? "active" : ""}`} 
          onClick={onDislike}
        >
          <img className="dislike-icon" src={icon} alt="Dislike" />
        </button>
      </div>
    );
  };
  
  export default LikeDislikeButtons;