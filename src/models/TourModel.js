import jwt from 'jsonwebtoken';

const URL = 'http://localhost:3001/api/v1/tours';

class TourModel {
    static async all() {
        try {
            const response = await fetch(URL, {
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
            const token = localStorage.uid;
            const decoded = jwt.verify(token, 'super_secret_key');
            const response = await fetch(`${URL}/create/${decoded._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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