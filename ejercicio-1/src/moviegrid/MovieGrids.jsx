import MovieCard from "./MovieCard.jsx";

export default function  MovieGrid({movies} )
{
    return (
        <div className="movie-grid">
            {movies.map(movie => (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    )

}