import React, { Component } from 'react';
import './Navigation.css';
import TaskContainer from './TaskContainer';
import SearchBox from './SearchBox';
import Tasks from './Tasks';
import ModalInternal from './ModalInternal';
import refresh from './refresh.png';


class TasksView extends Component {
	constructor() {
		super()
		this.state = {
			allTasks: [],
			searchfield: '',
			open: false,
			tasksToExpose: [],
			focusedTasks: []
		}
		this.modalHandler = this.modalHandler.bind(this)
	}

	componentDidMount() {
		this.setState({
			tasksToExpose: Tasks,
			allTasks: Tasks,
			focusedTasks: Tasks
		})
	}

	modalHandler() {
		this.setState({
		})
	}

	onSearchChange = (event) => {
		const { focusedTasks } = this.state;
		const filteredTasks = focusedTasks.filter(task => {
			console.log(task);
			return task.name.toLowerCase().includes(event.target.value.toLowerCase());
		})
		this.setState({ tasksToExpose: filteredTasks })
	}

	onListAll = (event) => {
		const { allTasks } = this.state;
		console.log("onListAll called");
		const refreshedTasks = allTasks.map(task => {
			return task;
		})
		console.log(refreshedTasks);
		this.setState({
			tasksToExpose: refreshedTasks,
			focusedTasks: refreshedTasks
		})
	}

	onFilterActives = (event) => {
		const { allTasks } = this.state;
		console.log("onFilterActives called");
		const activeTasks = allTasks.filter(task => {
			return !task.isDone;
		})
		console.log(activeTasks);
		this.setState({
			tasksToExpose: activeTasks,
			focusedTasks: activeTasks
		})
	}

	onFilterDones = (event) => {
		const { allTasks } = this.state;
		console.log("onFilterDones called");
		const doneTasks = allTasks.filter(task => {
			return task.isDone;
		})
		console.log(doneTasks);
		this.setState({
			tasksToExpose: doneTasks,
			focusedTasks: doneTasks
		})
	}

	onTaskActiveStatusChange = (taskId) => {
		console.log("onTaskActiveStatusChange called for " + taskId);
		const { allTasks } = this.state;
		const refreshedTasks = allTasks.map(task => {
			if (task.id !== taskId) return task;
			console.log("aktivazzion " + task.id);
			return {
				...task,
				isDone: !task.isDone
			};
		})
		console.log("Refreshed TASKS")
		console.log(refreshedTasks)
		this.setState({ allTasks: refreshedTasks })
	}

	render() {
		const { tasksToExpose } = this.state;

		return (
			<div>
				<div className="missionIdlePanel"><img src={refresh} /></div>
				<div className="circle"><p>Görev yönetim paneli</p></div>
				<div className="missionTabRow">
					<div className="alltasks" onClick={this.onListAll}><p>Tüm Görevler</p></div>
					<div className="activetasks" onClick={this.onFilterActives}><p>Aktif Görevler</p></div>
					<div className="finishedtasks" onClick={this.onFilterDones}><p>Biten Görevler</p></div>
				</div>
				<div className="thirdrow">
					<ModalInternal modalHandler={this.modalHandler} />
					<SearchBox searchChange={this.onSearchChange} />
					<TaskContainer exposedTasks={tasksToExpose} onToggle={this.onTaskActiveStatusChange} />
				</div>
			</div>
		);
	}
}

export default TasksView;