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
}

export default TourModel;