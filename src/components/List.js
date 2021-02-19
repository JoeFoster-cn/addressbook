import React from 'react';
import './List.css'

function List(props){
  return(
    <div className="List">
      <ul>
        {props.name} {props.number}
      </ul>
    </div>
  )
}

export default List;