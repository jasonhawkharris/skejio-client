import { useState, useEffect } from 'react';

import UserModel from '../models/UserModel';

const useUser = () => {
    const [user, setUser] = useState(null);

    const fetchUser = () => {
        UserModel.show().then(response => {
            setUser(response.user);
        });
    }

    useEffect(
        function () {
            fetchUser()
        }, []
    );

    return [user, fetchUser];
}

export default useUser;