import React, {Component} from 'react'
import {inject, observer} from "mobx-react";

@inject("TasksStore")
@observer
class TasksList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.TasksStore.getTasks()
    }

    render() {
        const Task = this.props.Task
        return (
                <tr>
                    <td>{Task.description}</td>
                    <td>{Task.startAt}</td>
                    <td>{Task.endAt}</td>
                    <td>{Task.feedback}</td>
                    <td>{Task.mark}</td>
                    <td>
                        <a href="#" onClick={() => {
                            this.props.deleteTask(Task.id)
                        }}>
                            <button type="submit" className="btn btn-primary" data-toggle="button" aria-pressed="false">
                                Delete task
                            </button>
                        </a>
                    </td>
                </tr>

        )
    }
}
export default TasksList