import React, { Component } from 'react';
import './Navigation.css';
import johndoe from './johndoe.png';
import shutdownicon from './shutdownicon.png';
import settings from './settings.png';
import tasks from './tasks.png';
import TasksView from './TasksView';


class App extends Component {

    render() {
        return (
            <div className="container">
                <div className="firstlayout">
                    <div className="Avatar"><img src={johndoe} /></div>
                    <div className="Görevler"><img src={tasks} /><h3>Görevler</h3></div>
                    <div className="Ayarlar"><img src={settings} /><h3>Ayarlar</h3></div>
                    <div className="Kapat"><img src={shutdownicon} /><h3>Kapat</h3></div>
                </div>
                <div className="secondlayout">
                        <TasksView />
                </div>
            </div>
        );
    }
}

export default App;