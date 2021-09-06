import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "./components/footer/footer.jsx";
import TaskList from "./components/TaskList/taskList.jsx";
import Header from "./components/header/header.jsx";

const App = () => {
    const state = {
        tasks : [
            {text: "Completed task", time:'created 17 seconds ago',id:1},
            {text: "Editing task", time:'created 5 minutes ago',id:2},
            {text: "Active task", time:'created 5 minutes ago',id:3}
        ]
    }
    const {tasks} = state;
    return (
        <section className="todoapp">
            <Header/>
            <section className="main">
                <TaskList tasks={tasks}
                onDeleted={(id)=>console.log(id)}/>
                <Footer/>
            </section>
        </section>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
