import { useState, useEffect } from 'react';

import ThreadModel from '../models/ThreadModel';

const useThreads = (id, tourdate = false) => {
    const [threads, setThreads] = useState(null);

    const fetchThreads = (id) => {
        if (!tourdate) {
            ThreadModel.show(id).then(response => {
                if (response.msg) setThreads([]);
                setThreads(response.foundThread);
            });
        } else {
            ThreadModel.all(id).then(response => {
                if (response.msg) setThreads([]);
                setThreads(response.foundThreads);
            });
        }
    }

    useEffect(
        function () {
            fetchThreads(id)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )

    return [threads, fetchThreads];
}

export default useThreads;