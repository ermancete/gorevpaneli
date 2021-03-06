import React, { Component } from 'react';
import './Navigation.css';
import TaskContainer from './TaskContainer';
import SearchBox from './SearchBox';
import Tasks from './Tasks';
import ModalInternal from './ModalInternal';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faRedo)
library.add(faArrowAltCircleRight)
library.add(faClock)
library.add(faCheck)
library.add(faChevronDown)

class TasksView extends Component {
	constructor() {
		super()
		this.state = {
			allTasks: [],
			open: false,
			tasksToExpose: [],
			focusedTasks: [],
			totalActive: 0
		}
		this.modalRef = React.createRef()
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

	onTaskActiveStatusChange = (taskId, isTaskDone) => {
		console.log("onTaskActiveStatusChange called for " + taskId);
		console.log("isTaskDone " + isTaskDone);
		const { allTasks, totalActive } = this.state;
		const refreshedTasks = allTasks.map(task => {
			if (task.id !== taskId) return task;
			return {
				...task,
				isDone: !task.isDone
			};
		})
		if(isTaskDone) {
			this.setState(prevState =>{
				return {
					allTasks: refreshedTasks,
					totalActive : prevState.totalActive - 1 
				}
			});
		} else {
			this.setState(prevState =>{
				return {
					allTasks: refreshedTasks,
					totalActive : prevState.totalActive + 1 
				}
			});
		}
		console.log("Refreshed TASKS")
		console.log(refreshedTasks)
	}

	onReverseTaskListOrder = (event) => {
		const { allTasks } = this.state;
		console.log("onReverseTaskListOrder called");
		const refreshedTasks = allTasks.reverse().map(task => {
			return task;
		})
		console.log(refreshedTasks);
		this.setState({
			tasksToExpose: refreshedTasks,
			focusedTasks: refreshedTasks
		})
	}

	onAddNewTask = (taskName) => {
		const { allTasks, totalActive } = this.state;
		console.log("onAddNewTask called");
		var currentTasks = allTasks.map(task => {
			return task;
		})
		let lastId = allTasks.length > 0 ? allTasks[allTasks.length - 1].id : 0;
		currentTasks.push({ id: lastId + 1, name: taskName, isDone: false })
		console.log(currentTasks);
		this.setState(prevState =>{
			return {
				allTasks: currentTasks,
				tasksToExpose: currentTasks,
				totalActive : prevState.totalActive + 1
			}
		})
		this.modalRef.current.onCloseModal();
	}

	onEraseTask = (taskId, isTaskDone) => {
		const { allTasks, tasksToExpose, totalActive } = this.state;
		console.log("onEraseTask called with task ID: " + taskId);
		console.log("isTaskDone " + isTaskDone);
		var currentTasks = allTasks.filter(task => {
			if (task.id === taskId) return;
			return task;
		})
		var expose = tasksToExpose.filter(task => {
			if (task.id === taskId) return;
			return task;
		})
		console.log(currentTasks);
		if(isTaskDone) {
			this.setState(prevState =>{
				return {
					allTasks: currentTasks,
					tasksToExpose: expose
				}
			})
		} else {
			this.setState(prevState =>{
				return {
					allTasks: currentTasks,
					tasksToExpose: expose,
					totalActive : prevState.totalActive - 1
				}
			})
		}
	}

	onTaskMove = (taskId) => {
		const { allTasks } = this.state;
		console.log("onEraseTask called with task ID: " + taskId);
		var currentTasks = allTasks.filter(task => {
			if (task.id === taskId) return;
			return task;
		})
		console.log(currentTasks);
		this.setState({
			allTasks: currentTasks,
			tasksToExpose: currentTasks
		})
	}

	render() {
		const { tasksToExpose } = this.state;

		return (
			<div>
				<div className="missionIdlePanel">
					<div className="refresh-icon-wrapper"><FontAwesomeIcon icon="redo" className="refresh-icon" /></div>
					<div className="circle"><p>Görev Yönetim Paneli</p></div>
				</div>
				<div className="missionTabRow">
					<div className="alltasks" onClick={this.onListAll}><FontAwesomeIcon icon={['fas', 'arrow-alt-circle-right']} className="all-tasks-icon" /><p>Tüm Görevler</p></div>
					<div className="activetasks" onClick={this.onFilterActives}><FontAwesomeIcon icon="clock" className="active-tasks-icon" /><span className="active-task-number-two">{this.state.totalActive}</span><p>Aktif Görevler</p></div>
					<div className="finishedtasks" onClick={this.onFilterDones}><FontAwesomeIcon icon={['fas', 'check']} className="finished-tasks-icon" /><p>Biten Görevler</p></div>
				</div>


				<div className="thirdrow">
					<div className="search-container">
						<div className="search-container-top">
							<SearchBox searchChange={this.onSearchChange} />
							<ModalInternal modalHandler={this.modalHandler}
								onAddNewTask={this.onAddNewTask}
								ref={this.modalRef} />
						</div>

						<TaskContainer exposedTasks={tasksToExpose}
							onToggle={this.onTaskActiveStatusChange}
							onEraseTask={this.onEraseTask}
							onEraseTask={this.onEraseTask}
							onTaskMove={this.onTaskMove} />
						<span className="hepsini-sec">Hepsini seç ></span>
					</div>
				</div>

			</div>

		);
	}
}

export default TasksView;