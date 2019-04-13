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
   	let a = this.refs.modalinput.value;
    	console.log(a);
        Tasks.push(a);
    }

    render() {
    	const { Tasks } =this.props;
        let open = this.state.open;
        return (

            <div>
                <button onClick={this.onOpenModal}>Yeni görev ekle</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div>
                        <h2>Yeni görev ekle</h2>
                        <textarea ref="modalinput" id="modalinput"> </textarea>
                        <button onClick={this.addNewTask}>EKLE</button>
                    </div>
                </Modal>
            </div>


        )

    };
}


export default ModalInternal;