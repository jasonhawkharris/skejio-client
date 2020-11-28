import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Icon } from 'semantic-ui-react';
import useTours from '../../hooks/useTours';
import TourModel from '../../models/TourModel';
import { userState } from '../../recoil/atoms';
import TourRow from './TourRow';


const TourIndex = props => {
    const user = useRecoilValue(userState);
    const [tours, fetchTours] = useTours(user.tours)
    const [name, setName] = useState('');
    const [createBtnClicked, setCreateBtnClicked] = useState(false);
    const tourData = { name }


    const generateTours = () => {
        return tours.map(tour => {
            return (
                <tr>
                    <TourRow
                        fetch={() => fetchTours()}
                        key={tour._id}
                        tour={tour}
                        user={user}
                    />
                </tr>
            );
        });
    }

    const handleCreateBtnClicked = e => {
        if (createBtnClicked) {
            setCreateBtnClicked(false);
        } else {
            setCreateBtnClicked(true);
        }
    }

    const handleSubmitTour = e => {
        e.preventDefault();
        tourData.artist = user._id
        TourModel.create(tourData).then(response => {
            fetchTours();
            setCreateBtnClicked(false);
        });
        setName('');
    }

    return (
        <div>
            <h1>All Tours</h1>
            {tours ? (
                <div>
                    <table className="ui selectable inverted table">
                        <thead>
                            <tr>
                                <th><Icon name="checkmark" /></th>
                                <th>Tour</th>
                                <th>Artist</th>
                                <th># of Dates</th>
                                <th>Gro$$</th>
                                <th className="right aligned">Manage</th>
                            </tr>
                        </thead>

                        <tbody>
                            {generateTours()}
                        </tbody>
                    </table>
                    {!createBtnClicked ? (
                        <>
                            <button
                                className="ui pink button"
                                onClick={handleCreateBtnClicked}
                            >
                                Create a New Tour
                                </button>
                        </>
                    ) : (
                            <div className="ui raised segment">
                                <div className="create-tour-header">
                                    <h3>Create A New Tour</h3>
                                    <div>
                                        <Icon
                                            className="remove"
                                            name="remove"
                                            onClick={e => {
                                                setCreateBtnClicked(false);
                                                setName('');
                                            }}
                                        />
                                    </div>
                                </div>
                                <form className="ui form" onSubmit={handleSubmitTour}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name of this tour"
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                    /><br /><br />
                                    <input className="ui pink submit button" type="submit" value="Submit" />
                                </form>
                            </div>
                        )}

                </div>
            ) : (
                    <div className="ui segment">
                        <p></p>
                        <div className="ui active dimmer">
                            <div className="ui loader"></div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}

export default TourIndex;