import React from 'react'

export default function List() {
    return(
        <div>
            <h2>Filmer</h2>
            <ul id="movie-list">

            </ul>
            <button className="btn btn-primary m-2">Alfabetisk ordning</button>
            <button className="btn btn-primary m-2">Betygsordning</button>
        </div>
    );
}