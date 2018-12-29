import React, { PureComponent } from 'react';
import './Item.css';

class Item extends PureComponent {
  state = {canEdit: false};
  onKeyUp = (event) => {
    const { changeName, id } = this.props;
    if (event.idCode === 13) {
      this.setState({canEdit: false});
      changeName(id, event.target.innerText);
    } else if (event.target.innerText) {
      changeName(id, event.target.innerText);
    }
  }
  onClick = (event) => {
    const { canEdit, changeName, id, name } = this.props;
    this.setState({canEdit: !canEdit});
    if (event.target.innerText !== name) changeName(id, event.target.innerText);
  }
  render() {
    const { canEdit } = this.state;
    const { completed, id, name, toggleCompleted, } = this.props;
    console.log(this.state.name)
    return (
      <li className='Item'>
        <input type='checkbox' onClick={() => toggleCompleted(id)} value={completed} />
        <div contentEditable={canEdit} onClick={this.onClick} onKeyUp={this.onKeyUp} focus={canEdit}>
          {name}
        </div>
      </li>
    );
  }
}

export default Item;
