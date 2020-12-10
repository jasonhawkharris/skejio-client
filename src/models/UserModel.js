const URL = 'http://localhost:3001/api/v1/user';

class UserModel {
    static show = async data => {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`,
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.log('Encountered an error while fetching the user:');
            console.log(error);
        }
    }

    static search = async term => {
        try {
            if (term.includes(' ')) {
                term = term.split(' ').join('%20');
            }

            const response = await fetch(`${URL}/search?artistName=${term}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`,
                },
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserModel;