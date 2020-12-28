import {action, observable} from 'mobx';
import axios from "axios";


class TasksStore {

    @observable tasks = []


    @action getTasks() {
        axios.get('http://localhost:3001/tasks/')
            .then(response => {
                this.tasks = response.data
            })
            .catch((error) => {
                console.log(error);
            })
    }

    @action deleteTask = (id) => {
        axios.delete('http://localhost:3001/tasks/' + id)
            .then(response => {
                console.log(response.data)
                this.tasks = this.tasks.filter(el => el.id !== id)
            });
    }
}

export default TasksStore