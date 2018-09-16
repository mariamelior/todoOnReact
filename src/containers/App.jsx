import React, {Component} from 'react';
import TaskBlock from "../components/taskBlock";
import {initialTasks} from "../constants/initial";

export class App extends Component {

    render() {
        let active = initialTasks.filter(i => i.status == 1);
        let complete = initialTasks.filter(i => i.status == 2);
        let wait = initialTasks.filter(i => i.status == 0);
        return <div id="content"> 
            <TaskBlock items={wait} status="wait"/>
            <TaskBlock items={active} status="active"/>
            <TaskBlock items={complete} status="complete"/>
        </div>
    }
}
