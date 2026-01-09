import '../css/MovieCard.css';

export interface MovieCardProps {
  id?: number;
  title: string;
  release_date: string;
  poster_path: string;
}

function MovieCard({ title, release_date, poster_path }: MovieCardProps) {
  function onFavoriteClick() {
    alert('Clicked');
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
  alt={title}
/>

        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            &#10084;
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{release_date.split('-')[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;

