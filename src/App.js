import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "./components/Footer/footer.jsx";
import TaskList from "./components/TaskList/All/taskList.jsx";
import TaskListActive from "./components/TaskList/Active/taskListActive.jsx";
import TaskListCompleted from "./components/TaskList/Completed/taskListCompleted.jsx";
import Header from "./components/Header/header.jsx";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    const tasks = props.store.state.tasks;
    const itemsLeft = props.store.state.itemsLeft;
    return (
        <BrowserRouter>
            <section className="todoapp">
                <Header/>
                <section className="main">
                    <Route path='/all'>
                        <TaskList tasks={tasks}
                                  addTask={props.addTask}
                                  deleteTask={props.deleteTask}
                                  onLabelClick={props.onLabelClick}
                        />
                    </Route>
                    <Route path='/active'>
                        <TaskListActive tasks={tasks}
                                  addTask={props.addTask}
                                  deleteTask={props.deleteTask}
                                  onLabelClick={props.onLabelClick}
                        />
                    </Route>
                    <Route path='/completed'>
                        <TaskListCompleted tasks={tasks}
                                  addTask={props.addTask}
                                  deleteTask={props.deleteTask}
                                  onLabelClick={props.onLabelClick}
                        />
                    </Route>
                    <Footer tasks={tasks}
                            onItemsLeft={itemsLeft}
                            clearCompletedTasks={props.clearCompletedTasks}
                    />
                </section>
            </section>
        </BrowserRouter>
    )
}
export default App;
