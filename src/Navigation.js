import React, { Component } from 'react';
import './Navigation.css';
//import Tasksheet from './Tasksheet';
import Tasklist from './Tasklist';
import SearchBox from './SearchBox';
import johndoe from './johndoe.png';
import shutdownicon from './shutdownicon.png';
import settings from './settings.png';
import tasks from './tasks.png';
import refresh from './refresh.png';
import isimListesi from './isimListesi';
import Modal from 'react-responsive-modal';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faRedo)
library.add(faArrowAltCircleRight)
library.add(faClock)
library.add(faTrash)
library.add(faChevronDown)
library.add(faCheck)

// import ModalInternal from './ModalInternal';
// import Task from './Task';


class Navigation extends Component {
	constructor() {
		super()
		this.state = {
			Tasks: [],
			searchfield: '',
			open: false
			// open: false
		}
	}

	onSearchChange = (a) => {
		this.setState({ searchfield: a.target.value })
	}

	 

	onCloseModal = () => {
		this.setState({ open: false });
    };

	   addNewTask = () => {
   	let a = this.refs.modalinput.value;
    	console.log(a);
        this.setState({ Tasks: a });
        setTimeout(console.log(this.state.Tasks), 3000);
    }
	
	/*componentDidMount() {
		this.setState({ Tasks: Tasks })
	} */
 
	render() {
		const { Tasks, searchfield } = this.state;
		 let open = this.state.open;
		// const filteredTasks = Tasks.filter(giri => {
		// 	return giri.name.toLowerCase().includes(searchfield.toLowerCase());
		// })

		return (
			<div className="container">
				<div className="firstlayout">
				<div className="top-left-items">
					<div className="Avatar"><img src={johndoe} /></div>
					<span className="active-task-number"></span>
					<div className="Görevler"><img src={tasks} /><h3>Görevler</h3></div>
					<div className="Ayarlar"><img src={settings} /><h3>Ayarlar</h3></div>
					</div>
					<div className="Kapat"><img src={shutdownicon} /><h3>Kapat</h3></div>

				</div>
				<div className="secondlayout">
					<div className="missionIdlePanel">
					<div className="refresh-icon-wrapper"><FontAwesomeIcon icon="redo" className="refresh-icon"/></div>
						<div className="circle"><p>Görev Yönetim Paneli</p></div>
						</div>
					<div className="missionTabRow">
						<div className="alltasks"><FontAwesomeIcon icon={['fas', 'arrow-alt-circle-right']} className="all-tasks-icon"/><p>Tüm Görevler</p></div>
						<div className="activetasks"><FontAwesomeIcon icon="clock" className="active-tasks-icon"/><span className="active-task-number-two"></span><p>Aktif Görevler</p></div>
						<div className="finishedtasks"><FontAwesomeIcon icon={['fas', 'check']} className="finished-tasks-icon"/><p>Biten Görevler</p></div>
					</div>
					<div className="thirdrow">

						            <div>
						            <div>
						            <div className="search-container">
	<div>
	<div className="search-container-top"><SearchBox searchChange={this.onSearchChange} />
			<button className="new-task-button" onClick={this.onOpenModal}>Yeni görev ekle +</button></div>

			<ul>
				<li>
				<div>
					<input className="element" type="checkbox" name="listelement"/>
					<label for="listelement">lorem ipsum</label>
				</div>
				<div className="list-elemen-right-icons">
					<FontAwesomeIcon icon="trash" className="trash-icon"/>
					<FontAwesomeIcon icon={['fas', 'chevron-down']} className="down-arrow-icon" />
				</div>
				</li>
			</ul>
			</div>
			<span className="hepsini-sec">Hepsini seç ></span>
			</div>
		</div>
                
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div>
                        <h2>Yeni görev ekle</h2>
                        <textarea ref="modalinput" id="modalinput"> </textarea>
                        <button onClick={this.addNewTask}>EKLE</button>
                    </div>
                </Modal>
            </div>
						
						
						
						</div>

				</div>
			</div>

		);
	}

}

export default Navigation;

// Tasks={filteredTasks}