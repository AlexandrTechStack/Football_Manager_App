import {action, observable} from 'mobx';
import axios from "axios";


class ClubsStore {

    @observable club = {
        id: '',
        name: '',
        address: '',
        photoURL: ''
    }

    @observable clubs = []


    @action getClubs() {
        axios.get('http://localhost:3001/clubs/')
            .then(response => {
                //this.user.clubs = response.data
                this.clubs = response.data
            })
            .catch((error) => {
                console.log(error);
            })
    }

    @action updateClub = (id) => {
        axios.put('http://localhost:3001/clubs/' + id)
            .then(response => {
                console.log(response.data)
            })
    }
    @action deleteClub = (id) => {
        axios.delete('http://localhost:3001/clubs/' + id)
            .then(response => {
                console.log(response.data)
                this.clubs = this.clubs.filter(el => el.id !== id)
            });
    }
    @action addClub = (newclub) => {
        axios.post('http://localhost:3001/clubs/add', newclub)
            .then(response => {
                console.log(response.data)
            })
    }
}

export default ClubsStore