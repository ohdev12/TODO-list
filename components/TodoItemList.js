import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
	
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.todos !== nextProps.todos;
	}
	
  render() {
    const { todos, onToggle, onClick, onRemove } = this.props;
		const todoList = todos.map(
			({id, title, content, duedate, checked})=>(
				<TodoItem
					id={id}
					title={title}
					content={content}
					duedate={duedate}
					checked={checked}
					onToggle={onToggle}
					onClick={onClick}
					onRemove={onRemove}
					key={id}
				/>
			)
		);
    return (
      <div className="item-list">
			{todoList}
      </div>
    );
  }
}

export default TodoItemList;