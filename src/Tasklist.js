import React, { Component } from "react";
import Task from './Task';


class Tasklist extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	onToggleTaskCheckbox = taskid => {
		const { filteredTasks } = this.props;
		console.log("aktivazzion");
		const nextTaskState = filteredTasks.map(task => {
			if (task.id !== taskid) return task;
			return {
				...task,
				isActive: !task.isActive
			};
		});
		this.setState(prevState => ({ filteredTasks: nextTaskState }));
	};

	render() {
		const { filteredTasks } = this.props;
		return (
			filteredTasks.map(task => (
				<Task
					key={task.id}
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