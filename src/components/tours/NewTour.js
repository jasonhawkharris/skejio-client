import React, { useState } from 'react';
import TourModel from '../../models/TourModel';

const NewTour = props => {
    const [name, setName] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        TourModel.create({
            name
        }).then(data => {
            props.history.push('/tours');
        });
    }

    return (
        <div>
            <h2>Create a new tour.</h2>
            <form className="ui form" onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name this tour"
                />
                <input className="ui button" type="submit" />
            </form>
        </div>
    )
}

export default NewTour;

