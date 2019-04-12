import React from 'react';
import Task from './Task';


const Tasklist = ({ Tasks }) => {
	return (
		<div>
				{
					Tasks.map((user, i) => {
						return (
							<Task
								key={i}
								name={Tasks[i].name} />
						);
					})
				}
		</div>
	);
}


export default Tasklist;