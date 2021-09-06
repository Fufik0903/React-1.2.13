import React, {Component} from 'react';
import Task from "../Task/Task.jsx";
import NewTask from "../NewTaskForm/newTaskForm.jsx";

export default  class TaskList extends Component{
    render(){
        const {tasks,onDeleted} = this.props;
        const elements = tasks.map((item)=>{
            if(item.id == 2){
                return(
                        <NewTask {...item}/>
                );
            }
            else{
                return(
                        <Task {...item}
                            onDeleted={()=>onDeleted(item.id)}
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
