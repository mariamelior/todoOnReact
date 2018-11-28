import React from 'react';
import "./style.css";

export default class Task extends React.Component {
    constructor(props) {
        super()
        this.state = {
            edit: false,
            name: props.name
        }
    }

    
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }

    onChangeStatus = () => {
        this.props.changeStatus(this.props.id)
    }

    click = () => {
        let {edit, name} = this.state;
        if (edit) {
            this.props.changeName(this.props.id, name)
        }
        this.setState({edit: !edit, name: this.props.name})
    }

    getButtonText = () => {
        switch (this.props.status) {
            case 0: return 'To do';
            case 1: return 'Done';
            case 2: return 'Delete';
        }
    }

    render() {
        console.log('this.state.name', this.props.name, this.props.id, this.props.status)
        return (
            <div className='task'>
                {!this.state.edit ? this.props.name : <input value={this.state.name} onChange={this.onChangeName}/>}
                <div className='actions'> 
                    <button onClick={this.click}>{this.state.edit ? 'Save': 'Edit'}</button>
                    <button onClick={this.onChangeStatus}>{this.getButtonText()}</button> 
                </div>
            </div>
        )
    }
}