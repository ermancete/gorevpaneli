import React, { Component } from "react";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faTrash)

class TaskSpan extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleChange = event => {
        const { taskId, onToggle } = this.props;
        onToggle(taskId);
    };

    onErase = event => {
        const { taskId, onEraseTask } = this.props;
        onEraseTask(taskId);
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

                {isDone && <i> - Task done!</i>}
                </div>
                <div className="list-element-right-icons">
					<FontAwesomeIcon onClick={this.onErase} icon="trash" className="trash-icon"/>
					<FontAwesomeIcon onClick={this.onReverseTaskListOrder} icon={['fas', 'chevron-down']} className="down-arrow-icon" />
                </div>
                
                <button id="taskEraser" onClick={this.onErase}> Görevi sil </button>
                <button id="taskMover" onClick={this.onMove}> Görevi taşı </button>
            </div>
        );
    }
}

export default TaskSpan;