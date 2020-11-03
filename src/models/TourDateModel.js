import axios from 'axios';

const URL = 'http://localhost:3001/api/v1/dates';

class TourDateModel {
    static async all() {
        try {
            return await axios.get(URL, {
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
}

export default TourDateModel;