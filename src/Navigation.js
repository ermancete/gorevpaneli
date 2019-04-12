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
import Tasks from './Tasks';
import ModalInternal from './ModalInternal';


class Navigation extends Component {
	constructor() {
		super()
		this.state = {
			Tasks: [],
			searchfield: '',
			open: false
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}
	componentDidMount() {
		this.setState({ Tasks: Tasks })
	}

	render() {
		const { Tasks, searchfield } = this.state;
		
		const filteredTasks = Tasks.filter(task => {
			return task.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		return (
			<div className="container">
				<div className="firstlayout">
					<div className="Avatar"><img src={johndoe} /></div>
					<div className="Görevler"><img src={tasks} /><h3>Görevler</h3></div>
					<div className="Ayarlar"><img src={settings} /><h3>Ayarlar</h3></div>
					<div className="Kapat"><img src={shutdownicon} /><h3>Kapat</h3></div>

				</div>
				<div className="secondlayout">
					<div className="missionIdlePanel"><img src={refresh} />
						<div className="circle"><p>Görev yönetim paneli</p></div></div>
					<div className="missionTabRow">
						<div className="alltasks"><p>Tüm Görevler</p></div>
						<div className="activetasks"><p>Aktif Görevler</p></div>
						<div className="finishedtasks"><p>Biten Görevler</p></div>
					</div>
					<div className="thirdrow">
						<ModalInternal />
						<SearchBox searchChange={this.onSearchChange} />
						<Tasklist Tasks={filteredTasks} />
					</div>

				</div>
			</div>

		);
	}

}

export default Navigation;