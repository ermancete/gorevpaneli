import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import ModalTaskAddHandler from './ModalTaskAddHandler';

class ModalInternal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
    	const { Tasks } =this.props;
        let open = this.state.open;
        return (

            <div>
                <button className="new-task-button" onClick={this.onOpenModal}>Yeni Görev Ekle +</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div>
                        <ModalTaskAddHandler modalHandler={this.props.handler}
                         onAddNewTask={this.props.onAddNewTask}
                         addNewTaskCallback={this.onCloseModal} />
                    </div>
                </Modal>
            </div>
        )
    };
}

export default ModalInternal;