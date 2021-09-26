import React, {Component} from 'react';


export default class Task extends Component {
    render() {
        const {text, time, id, deleteTask, onLabelClick,completed} = this.props;
        let onDeleteItem = () => {
            this.props.deleteTask(this.props)
        }
        let onLabelClicked = () => {
            this.props.onLabelClick(this.props)
        }
        return (
            <li className={completed} key={id}>
                <div className="view">
                    <input className="toggle" type="checkbox" onClick={onLabelClicked}/>
                    <label>
                        <span className='description' onClick={this.onLabelClick}>{text}</span>
                        <span className="created">{time}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDeleteItem}></button>
                </div>
            </li>
        );
    }
}
