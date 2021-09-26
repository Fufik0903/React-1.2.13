import React from 'react';
import {rerenderEntireTree} from "../../render";

let store = {
    state: {
        tasks: [
            {text: "Completed task", time: 'created 17 seconds ago', id: 1, completed: ''},
            {id: 2},
            {text: "Active task", time: 'created 5 minutes ago', id: 3, completed: ''}
        ],
        completed: false,
        itemsLeft : 2,
    },
}

export let onAddTask = (text) => {
    let id = store.state.tasks.length + 1
    let newTask = {
        id: id,
        text: text,
        time: 'created 5 minutes ago',
        completed: ''
    };
    store.state.tasks.push(newTask);
    onItemsLeft(store);
    rerenderEntireTree(store);
}
export let onDeleteTask = (task) => {
    let tasks = store.state.tasks
    const newTasks = [];
    tasks.map((item) => {
        if (item.id !== task.id) {
            newTasks.push(item)
        }
    })
    store.state.tasks = newTasks;
    onItemsLeft(store)
    rerenderEntireTree(store);
}
export let onLabelClick = (task) => {
    let tasks = store.state.tasks
    const newTasks = [];
    tasks.map((item) => {
        if (task.completed === '' && (task.id === item.id)) {
            item.completed = ' completed';
        } else if (task.completed !== '' && (task.id === item.id)) {
            item.completed = '';
        }
        newTasks.push(item)
    })
    store.state.tasks = newTasks;
    onItemsLeft(store)
    rerenderEntireTree(store);
}
export let clearComoletedTasks = (tasks) => {
    const newTasks = [];
    tasks.map((item) => {
        if (item.completed !== ' completed') {
            newTasks.push(item)
        }
    })
    store.state.tasks = newTasks;
    rerenderEntireTree(store);
}

export let onItemsLeft = (task) => {
    let completedItemsCount = 0;
    let allItemsCount = task.state.tasks.length - 1;
    task.state.tasks.map((item) => {
        if (item.completed === ' completed') {
            completedItemsCount++
        }
    })
    const activeTask = allItemsCount - completedItemsCount;
    store.state.itemsLeft = activeTask;
    rerenderEntireTree(store);
}
export default store;