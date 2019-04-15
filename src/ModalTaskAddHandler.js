import React, { Component } from "react";

class ModalTaskAddHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {taskText: ''};
        this.handleChange = this.handleChange.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
    }

    addNewTask(event) {
        console.log("adding new task");
        const { onAddNewTask } = this.props;
        const { taskText } = this.state;
        onAddNewTask(taskText);
    }

    handleChange(event) {
        this.setState({taskText: event.target.value});
      }

    render() {
        return (
            <div className="task-add-window">
                <p>Yeni görev ekle</p>
                <textarea value={this.state.taskText} onChange={this.handleChange}/>
                <button className="task-add-window-button" onClick={this.addNewTask}>EKLE</button>
            </div>
        )
    };
}

export default ModalTaskAddHandler;