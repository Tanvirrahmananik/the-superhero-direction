import React from "react";
import './List.css'

const List = (props) =>{
    const {list} = props;
    let total = 0;
    let hackerName = [];
    for(const card of list){
        total = total + card.Cost;
        hackerName = [...hackerName, card.Name];
    }
    return(
        <div>
            <h2>Number of Hacker: {props.list.length}</h2>
        <h3>Total Cost: ${total}</h3><br />
        <h5> { hackerName }  </h5>
        

        </div>
    )
}
export default List;