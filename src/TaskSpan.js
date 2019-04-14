import React, { Component } from "react";

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

    render() {
        const { isDone, name } = this.props;
        return (
            <div>
                <input type="checkbox"
                    defaultChecked={isDone}
                    onChange={this.handleChange} />

                <span className={`${isDone ? "activeTask" : "inactiveTask"}`}>
                    {name}
                </span>

                {isDone && <i> - Task done!</i>}
                <button id="taskEraser" onClick={this.onErase}> Görevi sil </button>
            </div>
        );
    }
}

export default TaskSpan;