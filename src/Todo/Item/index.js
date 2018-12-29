import React, { PureComponent } from 'react';
import './Item.css';

class Item extends PureComponent {
  onKeyUp = (event) => {
    const { changeName, name, id } = this.props;
    if (event.target.innerText !== name) {
      changeName(id, event.target.innerText);
    }
  }
  onClick = (event) => {
    const { changeName, id, name } = this.props;
    if (event.target.innerText !== name) changeName(id, event.target.innerText);
  }
  render() {
    const { completed, id, name, toggleCompleted, } = this.props;
    return (
      <li className='Item'>
        <input type='checkbox' onClick={() => toggleCompleted(id)} value={completed} />
        <div
          ref={(node) => this.DOMItem = node}
          contentEditable
          onClick={this.onClick}
          onKeyUp={this.onKeyUp}
        >
          {name}
        </div>
      </li>
    );
  }
}

export default Item;
