import React, { Component } from "react";
import Task from './Task';


class Tasklist extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	onToggleTaskCheckbox = taskid => {
		const { tasks } = this.state;
		const nextTaskState = tasks.map(task => {
			if (task.id !== taskid) return task;
			return {
				...task,
				isActive: !task.isActive
			};
		});
		this.setState(prevState => ({ tasks: nextTaskState }));
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