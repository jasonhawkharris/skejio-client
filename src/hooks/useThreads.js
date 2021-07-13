import { useState, useEffect } from 'react';
import ThreadModel from '../models/ThreadModel';

const useThreads = tourDateId => {
    const [threads, setThreads] = useState(null);

    const fetchThreads = (tourDateId) => {
        ThreadModel.all(tourDateId).then(response => {
            setThreads(response.data.threads);
        });
    }

    useEffect(
        function () {
            fetchThreads(tourDateId)
        },
        [tourDateId]
    );

    return [threads, fetchThreads];
}

export default useThreads;