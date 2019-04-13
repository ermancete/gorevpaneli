import React, { Component } from "react";

<<<<<<< HEAD
const Task = ({ name }) => {
	return (
		<div>
		<ul>
		 <input type="checkbox" />
		 <p>{name}</p>
		</ul>
		</div>
=======
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
			checked={isActive}
			onChange={this.handleChange}/>
			{isActive && <i> - IS an active task</i> }
		  </div>
>>>>>>> 3d6bc25b367c96711f18277c2123a9a26a050223
		);
	  }

}

export default Task;

