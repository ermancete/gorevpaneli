import React, { Component } from "react";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrash)

class TaskSpan extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }
    }

    handleChange = event => {
        const { taskId, onToggle } = this.props;
        const { isChecked } = this.state;
        this.setState({ isChecked : !this.state.isChecked})
        onToggle(taskId, !isChecked);
    };

    onErase = event => {
        const { taskId, onEraseTask } = this.props;
        onEraseTask(taskId, this.state.isChecked);
    };

    onMove = event => {
        const { taskId, onTaskMove } = this.props;
        onTaskMove(taskId);
    };

    render() {
        const { isDone, name } = this.props;
        return (
                <div className="task-list-wrapper">
                <div>
                <input 
                	className="element" type="checkbox"
                    defaultChecked={isDone}
                    onChange={this.handleChange} />

                <span className={`${isDone ? "activeTask" : "inactiveTask"}`}>
                    {name}
                </span>

                </div>
                <div className="list-element-right-icons">
					<FontAwesomeIcon onClick={this.onErase} icon="trash" className="trash-icon"/>
					<FontAwesomeIcon onClick={this.onMove} icon={['fas', 'chevron-down']} className="down-arrow-icon" />
                </div>
                
            </div>
        );
    }
}

export default TaskSpan;