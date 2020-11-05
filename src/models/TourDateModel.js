import axios from 'axios';

const URL = 'http://localhost:3001/api/v1/dates';

class TourDateModel {
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
            return await axios.get(`${URL}/${id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.uid}`,
                }
            });
        } catch (err) {
            console.log(err);
        }
    }

    static async create(tourDateData) {
        try {
            const response = await fetch(`${URL}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`,
                },
                body: JSON.stringify(tourDateData)
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    static async edit(id, tourDateData) {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`,
                },
                body: JSON.stringify(tourDateData)
            });
            console.log(JSON.stringify(tourDateData));
            console.log('response:', response);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
        // const response = await fetch(`${URL}/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         "Content-Type": "application/json",
        //         // needs auth maybe?
        //     },
        //     body: JSON.stringify(tourDateData),
        // });
        // return await response.json();
    };

    static async delete(id) {
        return fetch(`${URL}/${id}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .catch(err => console.log(err));
    }
}

export default TourDateModel;