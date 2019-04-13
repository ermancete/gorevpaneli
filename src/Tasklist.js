import React, { Component } from "react";
import Task from './Task';
import Tasks from './Tasks';


class Tasklist extends Component { 

	constructor(props) {
		super(props);
		this.state = {
		  tasks: Tasks
		};
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
		const { tasks } = this.state;
		return (
			<div>
				{
					tasks.map(task => (
							<Task
								key={task.id}
								name={task.name}
								isActive={task.isActive}
								onToggleTask={this.onToggleTaskCheckbox} />
						)
					)
				}	
			</div>
		);
	  }

}

export default Tasklist;