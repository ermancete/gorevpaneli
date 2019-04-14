import React, { Component } from "react";
import Task from './Task';

class TaskContainer extends Component {

	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		const { exposedTasks, onToggle } = this.props;
		return (
			exposedTasks.map(task => (
				<Task
					key={task.id}
					taskId={task.id}
					name={task.name}
					isDone={task.isDone}
					onToggleTask={onToggle}
				/>
			)
			)

		);
	}
}

export default TaskContainer;