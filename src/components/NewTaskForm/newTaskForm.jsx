import React, {Component} from 'react';

export default class NewTaskForm extends Component {
    render() {
        const {text, time, id} = this.props;
        return (
            <li className="editing" key={id}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>
                        <span className="description">{text}</span>
                        <span className="created">{time}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
                <input type="text" className="edit" value="Editing task"/>
            </li>
        );
    }
}
