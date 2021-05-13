import React, {useState, useRef} from 'react';
import Movie from './Movie';

export default function Form() {

    const [movies, setMovies] = useState([]);
    const titleRef = useRef();
    const ratingRef = useRef();

    function sortTitle(){
        movies.sort((a, b) => a.title.localeCompare(b.title))
        setMovies([...movies]);
      }
    
      function sortGrade(){
        movies.sort((a, b) => b.rating - a.rating)
        setMovies([...movies]);
    
      }
    
    function addItem(event) {

        if (titleRef.current.value == "" || ratingRef.current.value == 0) {
            alert("Du måste skriva in både titel och betyg!");
        }
        else{
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
            setMovies([...movies, {
                id: newId, 
                title: titleRef.current.value,
                rating: ratingRef.current.value
            }]);
            titleRef.current.value = "";
            ratingRef.current.value = 0;
        }
    }

    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));

    }
    return(
        <div>
            <h1>Min filmlista</h1>
                    <label for="title">Titel:</label>
                    <input type="text" id="title" class="form-control" ref={titleRef} />
                    <label for="rating">Betyg:</label>
                    <select type="text" id="rating" class="form-control" ref={ratingRef} >
                        <option value="0">Välj betyg här...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button class="btn btn-success mt-3" onClick={() => {addItem()}}>Spara film</button>
            <h2>Filmer</h2>
            <ul id="movie-list">
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem} />)}
            </ul>
            <button className="btn btn-primary m-2" onClick={() => {sortTitle()}}>Alfabetisk ordning</button>
            <button className="btn btn-primary m-2" onClick={() => {sortGrade()}}>Betygsordning</button>
        </div>
    );
}