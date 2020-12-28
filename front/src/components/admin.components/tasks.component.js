import React, {Component} from 'react'
import TasksList from "./tasks_list.component";
import {inject, observer} from "mobx-react";
import UsersList from "./users_list.component";
//import {Link} from "react-router-dom";

@inject("TasksStore")
@observer class Tasks extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.TasksStore.getTasks()
    }

    tasksList() {
        console.log(this.props.TasksStore.tasks)
        return this.props.TasksStore.tasks.map(currenttask => {
            return <TasksList Task={currenttask} key={currenttask.id} deleteTask = {this.props.TasksStore.deleteTask} />;
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Tasks</h1>
                <div>
                    <h3>Tasks List</h3>
                    <table className="table">
                        <thead className="thead-light">
                        <tr>
                            <th>Description</th>
                            <th>Start At</th>
                            <th>End At</th>
                            <th>Feedback</th>
                            <th>Mark</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.tasksList()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default Tasks