import {action, observable} from 'mobx';
import axios from "axios";


class UsersStore {

    @observable user = {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        photoURL: '',
        phone: '',
        isApproved: '',
        isPrime: '',
        salary: '',
        currentRole: '',
        users: ''
    }

    //For Update
    @observable currentId = ''
    //For Get All
    @observable users = []
    //For Get By ID
    @observable userById = ''


    @action getUsers() {
        axios.get('http://localhost:3001/users/')
            .then(response => {
                //this.user.users = response.data
                this.users = response.data
            })
            .catch((error) => {
                console.log(error);
            })
    }

    @action getUsersById(id) {
        axios.get('http://localhost:3001/users/' + id)
            .then(response => {
                this.userById = response.data
            })
            .catch((error) => {
                console.log(error);
            })
    }

    @action updateUser = (newuser, id) => {
        axios.put('http://localhost:3001/users/' + id, newuser)
            .then(response => {
                console.log(response.data)
            })
    }
    @action deleteUser = (id) => {
        axios.delete('http://localhost:3001/users/' + id)
            .then(response => {
                console.log(response.data)
                this.users = this.users.filter(el => el.id !== id)
            });


    }
}

export default UsersStore