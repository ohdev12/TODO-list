import React, { Component, Fragment } from 'react';
import './TodoItem.css';
import timeup from '../time.svg';

class TodoItem extends Component {
	
	state = {
		editing: false,
		timesup: false,
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	
	render() {
		const { title, content, duedate, checked, id, onToggle, onClick, onRemove } = this.props;
		// timesup 설정하기
		let todayDate = new Date();
		let today = todayDate.getFullYear()+'-'
				+(todayDate.getMonth()+1)+'-'
				+todayDate.getDate();
		if(today > duedate) this.state.timesup = true;
		const { timesup } = this.state;
		return (
			<div className="todo-item">
				<div className="item-check" onClick={(e)=>{
					e.stopPropagation();
					onToggle(id)}
				}>
					<span className="check-mark">✓</span>
					{
						false && checked && (<span className="check-mark">✓</span>)
					}
				</div>
				<div className={`todo-text ${checked && 'checked'}`} onClick={()=>onClick(id,
				{title:this.props.title, content:this.props.content, duedate:this.props.duedate})}>
					<div>{title}</div>
					<div>{content}</div>
					<div>{duedate}</div>
				</div>
				<div className="item-remove">
					<span className="remove" onClick={(e)=> {
						e.stopPropagation();
						onRemove(id)}
					}>&times;</span><br/>
					<img src={timeup} className={`timesup ${timesup && 'really'}`} alt="timesup" />
				</div>
			</div>
		);
	}
}

export default TodoItem;