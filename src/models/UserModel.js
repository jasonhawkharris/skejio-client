const URL = 'http://localhost:3001/api/v1/users';

class UserModel {
    static async show() {
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
}

export default UserModel;