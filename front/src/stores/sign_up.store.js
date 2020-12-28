import {action, observable} from 'mobx';
import axios from "axios";


class SignUpStore {

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


    @action signUp = (authdata) => {

        axios.post('http://localhost:3001/auth/signup', authdata)
            .then(response => {
                console.log(response.data)
            })
    }
}

export default SignUpStore