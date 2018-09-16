import React from 'react';
import "./style.css";

export default class Task extends React.Component {
    constructor() {
        super()
        this.state = {
            edit: false
        }
    }
    render() {
        return (
            <div className='task'>
                {!this.state.edit ? this.props.name : <input value={this.props.name}/>}
            </div>
        )
    }
}