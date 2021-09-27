import React,{useEffect, useState} from "react";
import Card from '../Card/Card'
import List from '../List/List'
import './Cards.css'


const Cards = () =>{
  const [cards, setCards] = useState([]);
  const [list,setList] = useState([]);
  useEffect(() =>{
    fetch('./data.JSON')
    .then(res => res.json())
    .then(data =>setCards(data))
  },[])
  const handleAddToList = (card) =>{
    const newList = [...list, card];
    setList(newList);

  }
    return(
      <div className='calculation'>
        <div className='card'>
        {
          cards.map(card => <Card Key={cards.Name} 
            card={card}
            handleAddToList={handleAddToList}></Card>)
        }
          </div>
          <div className='list'>
          <h1> List of Hackers</h1>  
          <List list={list}></List>
        </div>
        </div>
    )
}
export default Cards;