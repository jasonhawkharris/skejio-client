import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';
import useTourdates from '../../hooks/useTourdates';

const TourdateIndex = props => {
    const user = useRecoilValue(userState);
    const [tourdates, fetchTourdates] = useTourdates(null);
    console.log('tourdates', tourdates);

    const generateTourdates = async () => {


        return await tourdates.map(tourdate => {

            return (
                <h1></h1>
            )
        })
    }

    return (
        <h1>Tourdate index</h1>
    )
}

export default TourdateIndex;