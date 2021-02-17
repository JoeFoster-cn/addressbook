import React from 'react';
import './List.css'

function List(props){
  return(
    <ul>
      {props.name}
      {props.number}
    </ul>
  )
}

export default List;