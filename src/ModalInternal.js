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

<<<<<<< HEAD
    addNewTask = () => {
   	let a = this.refs.modalinput.value;
    	console.log(a);
        Tasks.push(a);
    }
=======
>>>>>>> 3d6bc25b367c96711f18277c2123a9a26a050223

    render() {
    	const { Tasks } =this.props;
        let open = this.state.open;
        return (

            <div>
                <button onClick={this.onOpenModal}>Yeni görev ekle</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div>
<<<<<<< HEAD
                        <h2>Yeni görev ekle</h2>
                        <textarea ref="modalinput" id="modalinput"> </textarea>
                        <button onClick={this.addNewTask}>EKLE</button>
=======
                        <ModalTaskAddHandler modalHandler = {this.props.handler}/>
>>>>>>> 3d6bc25b367c96711f18277c2123a9a26a050223
                    </div>
                </Modal>
            </div>
        )
    };
}

export default ModalInternal;