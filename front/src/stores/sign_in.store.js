import {action, observable} from 'mobx';
import axios from "axios";


class SignInStore {

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

    @observable users = []


    @action signIn = (authdata) => {

        axios.post('http://localhost:3001/auth/login', authdata)
            .then(response => {
                console.log(response.data)
            })
    }
}

export default SignInStore