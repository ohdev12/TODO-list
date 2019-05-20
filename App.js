import React, { Component } from 'react';
import TodoItemList from './components/TodoItemList';
import logo from './logo.png';
import './App.css';

class App extends Component {
	id=3;
	state={
		editing: false,
		creating: false,
		todos: [
			{ id: 0, title: '과제1', content:'내용설명1', checked: false },
      { id: 1, title: '과제2', content:'내용설명2', checked: true },
      { id: 2, title: '과제3', content:'내용설명3', checked: false }
		],
		curEditing: {
			id: 0,
			title:'',
			content:'',
			duedate:'',
			checked: false
		}
	}
	
	handleToggle = (id)=> { 
		const{todos} = this.state;
		
		const index = todos.findIndex(todo=>todo.id===id);
		const selected = todos[index];
		
		const nextTodos = [...todos];
		
		nextTodos[index] = {
			...selected,
			checked: !selected.checked
		};
		
		this.setState({
			todos: nextTodos
		});
	}
	
	handleRemove = (id) => { // 안쓰고 있다!!!!!!!!!!
		const{todos} = this.state;
		this.setState({
			todos: todos.filter(todo => todo.id !== id)
		});
	}
	
	handleChange = (e) => {
		const curEdit = {...this.state.curEditing};
		curEdit[e.target.name]= e.target.value;
		this.setState({
			curEditing: curEdit
		});
	}
	
	toggleEdit = (iid, data) => {
		this.setState({
			editing: true,
			creating: false,
			curEditing: {
				...data,
				id: iid
			}
		});
	}
	
	toggleCreate = () => {
		this.setState({
			editing: true,
			creating: true,
			curEditing: {
				id: 0,
				title:'',
				content:'',
				duedate:'',
				checked: false
			}
		});
	}
	
	editCancel = () => {
		this.setState({
			editing: false,
		});
	}
	
	handleCreUp = (e) => {
		e.preventDefault();
		const {todos} = this.state;
		const curEditing = this.state.curEditing;
		if(!this.state.creating) { // Update이다!
			this.setState({
				todos: todos.map(
					todo => {
						if(todo.id === curEditing.id) {
							return {
								id: curEditing.id,
								title: curEditing.title,
								content: curEditing.content,
								duedate: curEditing.duedate,
							};
						}
						return todo;
					}
				),
				editing: false,
			})
		} else { // create 이다!!
			this.setState({
				todos: todos.concat({
					id:this.id++,
					title: curEditing.title,
					content: curEditing.content,
					duedate: curEditing.duedate,
					checked: false
				}),
				editing: false,
			})
		}
	}
	
	handleEdit = () => { // 안쓰고 있다!!!!!!!!!!
		this.setState({
			editing: !this.state.editing,
		});
	}
	
  render(){
		const {todos, creating} = this.state;
		const {
			handleToggle,
			handleRemove,
			toggleEdit
		} = this;
		return (
			<div className="App">
				<img src={logo} className="MyLogo" alt="logo" />
				<TodoItemList
					todos={todos}
					onClick={toggleEdit}
					onToggle={handleToggle}
					onRemove={handleRemove}
				/>
				<div className={`add ${this.state.editing && 'noAdd'}`}
					onClick={this.toggleCreate}>추가
				</div>

				<div className={`${!this.state.editing&&'noedit'} ${this.state.editing && 'editing'}`}>
					
						<div className="row">
							<div className="label"><label htmlFor="titleIp">제목: </label></div>
							<div className="input">
								<input name="title" type="text" id="titleIp"
								value={this.state.curEditing.title}
								onChange={this.handleChange} required
								/>
							</div>
						</div>
						<div className="row">
							<div className="label"><label htmlFor="contentIp">내용: </label></div>
							<div className="input">
							<textarea name="content"
								value={this.state.curEditing.content}
								onChange={this.handleChange}
								id="contentIp">
							</textarea>
							</div>
						</div>
						<div className="row">
							<div className="label"><label htmlFor="dueIp">마감기한: </label></div>
							<div className="input">
								<input name="duedate" id="dueIp" type="date"
								value={this.state.curEditing.duedate}
								onChange={this.handleChange}/>
							</div>
						</div>
							<input type="submit" value={creating ? '추가' : '수정' }
								onClick={this.handleCreUp}/>
					<button onClick={this.editCancel}>취소</button>
				</div>
			</div>
		);
	}
}

export default App;
