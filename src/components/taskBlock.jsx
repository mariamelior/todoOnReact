import React from 'react';
import Task from "./task"
import "./style.css";

export default class TaskBlock extends React.Component {
    render() {
        let cls = this.props.status + " task-block"
        return (
            <div className={cls}>
                {this.props.items.map(task => <Task {...task}/>)}
            </div>
        )
    }
}