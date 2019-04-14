import React, { Component } from "react";
import Task from './Task';


class Tasklist extends Component {

	constructor(props) {
		super(props)
		this.state = {
			activeTasks : []
		}
	}

	onToggleTaskCheckbox = taskId => {
		const { filteredTasks } = this.props;
		const nextTaskState = filteredTasks.map(task => {
			if (task.id !== taskId) return task;
			console.log("aktivazzion " + task.id);
			return {
				...task,
				isActive: !task.isActive
			};
		});
		//this.setState(prevState => ({ filteredTasks: nextTaskState }));
	};

	render() {
		const { filteredTasks } = this.props;
		return (
			filteredTasks.map(task => (
				<Task
					key={task.id}
					taskId={task.id}
					name={task.name}
					isActive={task.isActive}
					onToggleTask={this.onToggleTaskCheckbox}
				/>
			)
			)

		);
	}

}

export default Tasklist;