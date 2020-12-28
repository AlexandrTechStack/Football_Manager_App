import React, {Component} from 'react'
import TaskHistory from "./task_history.component";
//import {Link} from "react-router-dom";

export default class Task extends Component {
    taskList() {
        //return <TaskList/>;
    }

    render() {
        return (
            <div className="container">
                <h1>Task</h1>
                <div>
                    <h3>Task List</h3>
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
                        {this.taskList()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
