import React, {Component} from 'react';

export default class Task extends Component {
    state = {
        completed: false
    }
    onLabelClick = () => {
        this.setState((state)=>{
            return {
                completed :!state.completed
            };
        });
    }

    render() {
        const {completed} = this.state;
        let classNames = '';
        if (completed) {
            classNames += ' completed';
        }
        const {text, time,id,onDeleted} = this.props;
        return (
            <li className={classNames} key={id}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>
                        <span className='description' onClick={this.onLabelClick}>{text}</span>
                        <span className="created">{time}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
            </li>
        );
    }
}
