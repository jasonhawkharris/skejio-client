const URL = 'http://localhost:3001/api/v1/notifications';

class NotificationModel {
    static all = async () => {
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`
                }
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    static show = async (id) => {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`
                }
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    static create = async (data) => {
        try {
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    static update = async (id, data) => {
        try {
            const response = await fetch(`${URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.uid}`
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }
}

export default NotificationModel;