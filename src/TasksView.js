import React, { Component } from 'react';
import './Navigation.css';
import Tasklist from './Tasklist';
import SearchBox from './SearchBox';
import Tasks from './Tasks';
import ModalInternal from './ModalInternal';

class TasksView extends Component {
	constructor() {
		super()
		this.state = {
			Tasks: [],
			searchfield: '',
			open: false
		}
		this.modalHandler = this.modalHandler.bind(this)
	}

	modalHandler() {
		Tasks.push({name: 'A more important duty'});
		this.setState({
		})
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	componentDidMount() {
		this.setState({ Tasks: Tasks })
	}

	render() {
		const { Tasks, searchfield } = this.state;
		
		const filteredTaskz = Tasks.filter(task => {
			console.log(task);
			return task.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return (
			<div>
				<ModalInternal modalHandler={this.modalHandler}/>
				<SearchBox searchChange={this.onSearchChange} />
				<Tasklist filteredTasks={filteredTaskz} />
			</div>

		);
	}
}

export default TasksView;