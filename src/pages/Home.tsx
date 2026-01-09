import MovieCard, {type MovieCardProps} from "../components/MovieCard";
import { useEffect, useState } from "react";
import  '../css/Home.css'
import { searchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";

function Home() {

  const [searchQuery, setSearchQuery] = useState("");
  // const movies: MovieCardProps[] = [
  //   { id: 1, title: "John Wick", release_date: "2020" },
  //   { id: 2, title: "Terminator", release_date: "1980" },
  //   { id: 3, title: "The Matrix", release_date: "1998" },
  // ];

const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

  useEffect(()=> {
    const loadPopularMovies = async() =>{
      try{
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      }
      catch(err) {
        console.log(err);
        setError("Failed to load movies")}
      finally{
        setLoading(false)
      }
    }
    loadPopularMovies();
  }, [])

  const handleSearch = async(e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(!searchQuery.trim()) return
    if(loading) return
    setLoading(true);
    try{
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    }
    catch(err){
      console.log(err);
      setError("Failed to search movies....");
    }
    finally{
      setLoading(false);
    }
    setSearchQuery("")
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
    {error && <div className="error-message">{error}</div>}
        {loading ? <div className="loading">loading.....</div> :<div className="movies-grid">
        {movies.map(movie => (
            movie.title.toLowerCase().startsWith(searchQuery) &&
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
          />
        ))}
      </div> }
      
    </div>
  );
}

export default Home;
