import React, { Component } from "react";

class ModalTaskAddHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {taskText: ''};

    this.handleChange = this.handleChange.bind(this);
    }

    addNewTask = () => {
        console.log("adding new task");
        //this.state.taskText
    }

    handleChange(event) {
        console.log("handling ze change");
        this.setState({taskText: event.target.taskText});
      }

    render() {
        return (
            <div>
                <h2>Yeni görev ekle</h2>
                <textarea value={this.state.taskText} onChange={this.handleChange}/>
                <button onClick={this.addNewTask}>EKLE</button>
            </div>
        )
    };
}

export default ModalTaskAddHandler;