import React from "react";
import Filters from "./filters/filters.jsx";

const Footer = (props) => {
    let clearCompleted = () => {
        props.clearCompletedTasks(props.tasks)
    }
    return (
        <footer className="footer">
            <span className="todo-count">{props.onItemsLeft} items left</span>
            <Filters tasks={props.tasks}/>
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
    );
}
export default Footer;