import React, { Component } from 'react';
import taskService from '../../app/service/taskService';
import { Link } from 'react-router-dom';

import './style.css';

export default class Main extends Component {
    
    state = {
        tasks: []
    };
    constructor(){
        super();
        this.service = new taskService();
    }

    componentDidMount(){
        this.loadTasks();
    }

    loadTasks = async () => {
        const response = await this.service.listar();

        this.setState({tasks: response.data});
    };
    
    render(){
        const {tasks} =  this.state;
        return(
            <div className="post-list">

                <div className="actions">
                 <button>
                     <Link to="/task">Nova Task</Link>
                 </button>  
                </div>
                {tasks.map(tasks => (
                    <article key={tasks.id}>
                        <strong>{tasks.titulo}</strong>
                        <p>{tasks.descricao}</p>
                        <p>{tasks.status}</p>
                         
                    </article>
                ))}
            </div>
        )
    }
}