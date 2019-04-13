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
	  };
	
	  render() {
		const { name, isActive } = this.props;
		return (
		  <div>
			<span className={`${isActive ? "activeTask" : "inactiveTask"}`}>{name}</span>
			<input type="checkbox" 
			defaultChecked={isActive}
			onChange={this.handleChange}/>
			{isActive && <i> - IS an active task</i> }
		  </div>
		);
	  }

}

export default Task;