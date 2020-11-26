const URL = 'http://localhost:3001/api/v1/tours';

class TourModel {
    static create = async (data) => {
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`,
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.log('An error occured while creating this tour:');
            console.log(error);
        }
    }

    static destroy = async (data) => {
        try {
            const response = await fetch()
        } catch (error) {

        }
    }
}

export default TourModel;