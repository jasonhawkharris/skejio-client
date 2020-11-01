const URL = 'http://localhost:3001/api/v1/dates';

class TourDate {
    static async all() {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.uid}`,
                },
            });
            return await response.json();
        } catch (err) {
            return console.log(err);
        }
    }

    static async show(id) {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.uid}`,
                },
            });
            return await response.json();
        } catch (err) {
            console.log(err);
        }
    }
}

export default TourDate;
