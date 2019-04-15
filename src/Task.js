import React, { Component } from "react";
import TaskSpan from "./TaskSpan"

class Task extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const { name, isDone, taskId, onToggle, onEraseTask, onTaskMove } = this.props;
		return (
			<div>
				<TaskSpan
					isDone={isDone}
					taskId={taskId}
					onToggle={onToggle}
					name={name}
					onEraseTask={onEraseTask}
					onTaskMove={onTaskMove}
				/>
			</div>
		);
	}

}

export default Task;

