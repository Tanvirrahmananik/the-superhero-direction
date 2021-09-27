import React from 'react';
import './Card.css'

const Card = (props) =>{
    const {img,Name,Age,Type,Garenty,Cost} = props.card;
    return(
        <div className='cards'>
            <img src={img} className='image' alt=".."/>
            <h5>{Name}</h5>
            <p>Age:{Age}</p>
            <p>Type:{Type}</p>
            <p> Garenty:{Garenty}</p>
            <p> Cost:{Cost}</p>
            <button onClick={() => props.handleAddToList(props.card)} className='btn btn-secondary'><i className="fas fa-shopping-cart"></i> Add To List</button>
        </div>
    )
}
export default Card;