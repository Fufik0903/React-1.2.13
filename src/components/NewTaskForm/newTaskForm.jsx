import React, {Component} from 'react';

export default class NewTaskForm extends Component {
    render() {
        let newItem = React.createRef();
        const {tasks, id, addTask} = this.props;
        let onAddItem = () => {
            let text = newItem.current.value;
            this.props.addTask(text);
            newItem.current.value = '';
        }
        return (
            <li className="editing" key={id}>
                <input type="text" className="edit" ref={newItem} placeholder='Editing task'/>
                <button onClick={onAddItem}>Add item</button>
            </li>
        );
    }
}
