import MovieCard, {type MovieCardProps} from "../components/MovieCard";
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
  const movies: MovieCardProps[] = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "1980" },
    { id: 3, title: "The Matrix", release_date: "1998" },
  ];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    alert(searchQuery);
  }

  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies...." 
            className="search-input" 
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
      <div className="movies-grid">
        {movies.map(movie => (
            movie.title.toLowerCase().startsWith(searchQuery) &&
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            url={movie.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
