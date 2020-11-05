import axios from 'axios';

const URL = 'http://localhost:3001/api/v1/dates';

class TourDateModel {
    static async all(userId) {
        console.log(userId);
        try {
            return await axios.get(`${URL}?artist=${userId}`, {
                headers: {
                    authorization: `Bearer ${localStorage.uid}`,
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    static async show(id) {
        try {
            return await axios.get(`${URL}/${id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.uid}`,
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    static async create() {
        try {
            return axios.post(`${URL}/create`, {
                headers: {
                    authorization: `Bearer ${localStorage.uid}`,
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default TourDateModel;