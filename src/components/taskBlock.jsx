import React from 'react';
import Task from "./task"
import "./style.css";

export default class TaskBlock extends React.Component {
    render() {
        let cls='task-block '
        switch (this.props.status) {
            case 0: cls+='wait'; break;
            case 1: cls+='active'; break;
            case 2: cls+='complete'; break;
        }
        return (
            <div className={cls} >
                {this.props.items.map((task, i) => 
                    <Task 
                        key={i} {...task}
                        changeName={this.props.changeName} 
                        changeStatus={this.props.changeStatus}/>)}
            </div>
        )
    }
}