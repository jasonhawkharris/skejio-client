const URL = 'http://localhost:3001/api/v1/auth';

class AuthModel {
    static register = async data => {
        try {
            const response = await fetch(`${URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            return await response.json();
        } catch (err) {
            console.log('Encountered an error while registering:');
            console.log(err);
        }
    }

    static login = async data => {
        try {
            const response = await fetch(`${URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (err) {
            console.log('Encountered an error while logging in:');
            console.log(err);
        }
    }
}

export default AuthModel;