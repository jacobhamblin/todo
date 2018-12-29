import React from 'react';
import './Item.css';

const Item = ({id, name, toggleCompleted}) => {
    return (
      <li className='Item'>
        <div onClick={() => {toggleCompleted(id)}}>
          {name}
        </div>
      </li>
    );
}

export default Item;
