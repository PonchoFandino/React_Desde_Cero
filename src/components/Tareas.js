import React, { Component} from 'react';
import Style from '../Compartido/Estilo';
import store from '../Compartido/store';
import Task from '../Compartido/tasks';
import { deleteTaskAtn, toggleTaskAtn } from '../Compartido/acciones';



class Tareas extends Component {
    constructor() {
        super ();
        this.onInit();
        this.bindingState();
    }
    onInit(){
        const task = new Task();
        this.state = {
            tasks:[task],
        };
        this.state.tasks = [];
    }
    bindingState() {
        store.subscribe(()=>{
            this.setState({
                tasks: store.getState().tasks,
            });
        });
    }
    toggleTask (id) {
        store.dispatch(toggleTaskAtn(id));
    }
    deleteTask (id) {
        store.dispatch(deleteTaskAtn(id));
    }
    
    
    render() {
        return (
            <div className="aab-list-item">
           
            {this.state.tasks.length>0 ?  
            <h1 style={Style.titleM}>Lista de Tareas</h1>:''}
            {this.state.tasks.length>0 ?
             <span className="aab-count"> Estado 
                <div> <i className="fa fa-check"></i> <span> {this.state.tasks.reduce((total, task)  => {total[task.done] = (total[task.done] || 0) +1; return total; }, {}).false} </span> </div>
                <div> <i className="fas fa-check-double"></i> <span> {this.state.tasks.reduce((total, task)  => {total[task.done] = (total[task.done] || 0) +1; return total; }, {}).true} </span></div>
             </span>:''}
             
            <ul>
                {this.state.tasks.map(task =>
                    <li className="abb-list-item mdc-ripple-upgraded abb-table" key={task.id}>
                    <span className="abb-span-multi">
                        <span className={!task.done? 'aab-span-title': 'aab-span-title aab-through'}>{task.task} </span>
                        {/* <span className="aab-span-titleS">Fecha de generación: {task.date.toLocaleDateString()}:{ task.date.toLocaleTimeString('es-ES')}</span> */}
                    </span>
                    <span className="aab-icon-right" onClick= {() => this.toggleTask(task.id)}>{task.done ? <span className="aab-todo" style={Style.buttonIcon}><i className="fa fa-close"></i> </span> : <span className="aab-ok" style={Style.buttonIcon}><i className="fa fa-check"></i></span>}</span>
                    <span className="aab-delete" style={Style.buttonIcon} onClick={() => this.deleteTask(task.id)}><i className="fa fa-trash"></i></span>
                    </li>
                )}
            </ul>
            </div>
        );
    }
} export default Tareas;