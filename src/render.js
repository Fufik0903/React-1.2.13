import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {
    clearComoletedTasks,
    onAddTask,
    onDeleteTask,
    onItemsLeft,
    onLabelClick
} from "./components/redux-store/store";

export let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <App store={store}
             addTask={onAddTask}
             deleteTask={onDeleteTask}
             onLabelClick={onLabelClick}
             onItemsLeft={onItemsLeft}
             clearCompletedTasks={clearComoletedTasks}
        />,
        document.getElementById('root'));
}
