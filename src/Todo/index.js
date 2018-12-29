import React, { PureComponent } from 'react';
import Item from './Item';
import './Todo.css';

class Todo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {id: 2, items: {1: this.newItem(1)}};
  }
  newItem = (id) => {
    return {id, completed: false, name: 'name', canEdit: false};
  }
  addNewItem = () => {
    const { id, items } = this.state;
    items[id] = this.newItem(id);
    this.setState({items, id: id + 1});
  }
  toggleCanEdit = (id) => {
    const { items } = this.state;
    items[id].canEdit = !items[id].canEdit;
    this.setState({ items });
  }
  toggleCompleted = (id) => {
    const { items } = this.state;
    items[id].completed = !items[id].completed;
    this.setState({ items });
  }
  changeName = (id, name) => {
    const { items } = this.state;
    items[id].name = name;
    console.log(`${id} has a new name ${name}`);
    this.setState({ items });
  }
  render() {
    const props = {
      toggleCompleted: this.toggleCompleted,
      changeName: this.changeName,
      toggleCanEdit: this.toggleCanEdit,
    };
    const { items } = this.state;
    return (
      <div className='Todo'>
        <h2>Todo</h2>
        <ul className='Todo__items-list'>
          {Object.keys(items).map(id => {
            const newProps = {...props, ...items[id], id, key: id};
            return <Item {...newProps} />
          })}
        </ul>
        <a className='Todo__new-item' onClick={() => this.addNewItem()}>New Item</a>
      </div>
    )
  }
}

export default Todo;
