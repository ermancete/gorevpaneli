import React, { Component } from "react";
import Modal from 'react-responsive-modal';

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
    
    addNewTask = () => {
        // implement
    }

    render() {
        let open = this.state.open;
        return (

            <div>
                <button onClick={this.onOpenModal}>Yeni görev ekle</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div>
                        <h2>Yeni görev ekle</h2>
                        <textarea> </textarea>
                        <button onClick={this.addNewTask}>EKLE</button>
                    </div>
                </Modal>
            </div>


        )

    };
}


export default ModalInternal;