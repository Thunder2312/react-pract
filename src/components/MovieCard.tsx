// MovieCard.tsx

export interface MovieCardProps {
  id?: number;
  title: string;
  release_date: string;
  url?: string;
}

function MovieCard({ title, release_date, url }: MovieCardProps) {
  function onFavoriteClick() {
    alert('Clicked');
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={url} alt={title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            &#10084;
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;

