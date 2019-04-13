import React from 'react';

const Task = ({ name }) => {
	return (
		<div>
		<ul>
		 <input type="checkbox" />
		 <p>{name}</p>
		</ul>
		</div>
		);
}

export default Task;

