import React, { PureComponent } from 'react';
import Item from './Item';
import './Todo.css';

class Todo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {id: 1, showCompleted: false, newItemName: '', items: {}};
  }
  newItem = (id) => {
    return {id, completed: false, name: 'name'};
  }
  addNewItem = () => {
    const { id, items } = this.state;
    items[id] = this.newItem(id);
    this.setState({items, id: id + 1});
  }
  toggleCompleted = (id) => {
    const { items } = this.state;
    const newItems = {...items}
    newItems[id].completed = !newItems[id].completed;
    this.setState({ items: newItems });
  }
  toggleShowCompleted = () => {
    const { showCompleted } = this.state;
    this.setState({showCompleted: !showCompleted});
  }
  changeName = (id, name) => {
    const { items } = this.state;
    const newItems = {...items}
    newItems[id].name = name;
    this.setState({ items: newItems });
  }
  submitItem = () => {
    const { id, items, newItemName } = this.state;
    const newItems = {...items};
    newItems[id] = {completed: false, id, name: newItemName};
    this.setState({newItemName: '', items: newItems});
  }
  render() {
    const props = {
      addNewItem: this.addNewItem,
      changeName: this.changeName,
      toggleCompleted: this.toggleCompleted,
    };
    const { items, newItemName, showCompleted } = this.state;
    const completedText = showCompleted ? 'Hide Completed' : 'Show Completed'
    return (
      <div className='Todo'>
        <h2>Todo</h2>
        <div className='Todo__new-item'>
          <input
            className='Todo__new-item__name'
            placeholder='What do you need to do?'
            onChange={(e) => this.setState({newItemName: e.target.value})}
            value={newItemName}
          />
          <button
            className='Todo__new-item__button'
            onClick={this.submitItem}
          >
            Add Todo Item
          </button>
        </div>
        <ul className='Todo__items-list'>
          {Object.keys(items).map(id => {
            const newProps = {...props, ...items[id], id, key: id};
            return <Item {...newProps} />
          })}
        </ul>
        <div className='Todo__buttons'>
          <button className='Todo__show-completed' onClick={() => this.toggleShowCompleted()}>{completedText}</button>
        </div>
      </div>
    )
  }
}

export default Todo;
