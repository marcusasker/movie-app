import React from 'react'

export default function Movie(props){

    function generateStars(rating) {
        const ratingList = []
        var i;
        for(i=0; i<rating; i++){
            ratingList.push(<img src="../images/star.png" alt="Star" />)
        }
        return ratingList
    }

    return(
        <li class="list-group-item">
            {props.item.title}
            <img className="btn btn-sm float-end" onClick={() => {props.deleteItem(props.item.id)}} src="../images/delete.png" alt="Delete" />
            {generateStars(props.item.rating)}
        </li>
    );
}