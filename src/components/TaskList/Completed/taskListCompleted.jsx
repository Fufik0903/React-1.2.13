import React, {Component} from 'react';
import Task from "../../Task/Task.jsx";

export default class TaskList extends Component {
    render() {
        const {tasks, addTask, deleteTask, onLabelClick} = this.props;
        const elements = tasks.map((item) => {
            if (item.completed === ' completed') {
                return (
                    <Task {...item}
                          deleteTask={deleteTask}
                          onLabelClick={onLabelClick}
                    />
                );
            }

        });
        return (
            <ul className="todo-list">
                {elements}
            </ul>
        );
    }
}