import { useState, useEffect } from 'react';

import TourdateModel from '../models/TourdateModel';

const useTourdates = (id) => {
    const [tourdates, setTourdates] = useState(null);

    const fetchTourdates = (id) => {
        if (id) {
            TourdateModel.show(id).then(response => {
                if (response.msg) setTourdates([]);
                setTourdates(response.foundTourdate);
            });
        } else {
            TourdateModel.all().then(response => {
                if (response.msg) setTourdates([]);
                setTourdates(response.foundTourdates);
            });
        }
    }

    useEffect(
        function () {
            fetchTourdates(id)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    );

    return [tourdates, fetchTourdates];
}

export default useTourdates;