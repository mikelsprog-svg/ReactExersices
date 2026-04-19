import React from 'react';


export default function Sidebar(props)
{
    return (<div className="sidebar">
        <ul>
            {props.genres.map(genre=><li key={genre}>{genre}</li>)}
        </ul>
    </div>)

}
