import axios from 'axios';

const URL = 'http://localhost:3001/api/v1/tours';

class TourModel {
    static async all(userId) {
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
            const response = await fetch(`${URL}/${id}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.uid}`,
                }
            });
            return await response.json();
        } catch (err) {
            console.log(err);
        }
    }


    static async create(tourData) {
        try {
            const response = await fetch(`${URL}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`,
                },
                body: JSON.stringify(tourData)
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}


export default TourModel;