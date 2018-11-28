import React, {Component} from 'react';
import TaskBlock from "../components/taskBlock";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {changeName, changeStatus, addTask} from "../actions/actions";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state= {
            newTask: ''
        }
    }

    onChangeNewTask = (e) => {
        this.setState({newTask: e.target.value})
    }

    addTask = () => {
        this.props.addTask(this.state.newTask, this.props.tasks.length)
        this.setState({newTask: ''})
    }

    render() {
        let active = this.props.tasks.filter(i => i.status == 1);
        let complete = this.props.tasks.filter(i => i.status == 2);
        let wait = this.props.tasks.filter(i => i.status == 0);
        return <div id="content"> 
            <div className='add-area'>
                <input 
                    value={this.state.newTask}
                    onChange={this.onChangeNewTask}
                    type="text"/>
                <button onClick={this.addTask}>Add</button>
            </div> 
            <div className="task-area">  
            {[wait, active, complete].map((items, i) => 
                <TaskBlock 
                    items={items} 
                    status={i}
                    key={i}
                    changeName={this.props.changeName} 
                    changeStatus={this.props.changeStatus}/>)}
            </div> 

        </div>
    }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.name.tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (id, name) => {dispatch(changeName(id, name))},
    changeStatus: (id) => {dispatch(changeStatus(id))},
    addTask: (name, id) => {dispatch(addTask(name, id))}
  }
}

 const AppMain = connect(mapStateToProps, mapDispatchToProps)(App)

 export default AppMain;