
import { StrictMode } from 'react'
// movie card recive un prop donde deberia aparecer todo lo nesario

//<img alt={props.movie.image} > </img>
export default function  MovieCard(props)
{
    return (
        <div className="movie-card">

            <h3>{props.movie.title}</h3>
            <ul>
                <li>{props.movie.genre}</li>
                <li>{props.movie.year}</li>
                <li>{props.movie.rating}</li>
            </ul>
            <p>{props.movie.rating}</p>
        </div>

    )

}
