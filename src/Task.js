import React, { Component } from "react";

class Task extends Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	handleChange = event => {
		const { taskId, onToggleTask } = this.props;
		onToggleTask(taskId);
		this.setState(this.state);
		
	};

	render() {
		const { name, isDone } = this.props;
		return (
			<div>
				<span className={`${isDone ? "activeTask" : "inactiveTask"}`}>
					{name}

				<input type="checkbox"
					checked={isDone}
					onChange={this.handleChange.bind(this)} />
				</span>
				
				{isDone && <i> - Task done!</i>}
			</div>
		);
	}

}

export default Task;

