import React from 'react';
import './Item.css';

const Item = ({id, completed, name, toggleCompleted}) => {
  const style = completed ? {backgroundColor: '#00FF00'} : undefined;
  return (
    <li className='Item' style={style}>
      <div onClick={() => {toggleCompleted(id)}}>
        {name}
      </div>
    </li>
  );
}

export default Item;
