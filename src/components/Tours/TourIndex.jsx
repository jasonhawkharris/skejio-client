import React from 'react';
import { useRecoilValue } from 'recoil';
import { Icon } from 'semantic-ui-react';
import { userState } from '../../recoil/atoms';
import TourRow from './TourRow';


const TourIndex = props => {
    const user = useRecoilValue(userState);

    const generateTours = () => {
        return user.tours.map(tour => {
            return (
                <tr>
                    <TourRow key={tour._id} tour={tour} user={user} />
                </tr>
            );
        });
    }

    return (
        <div>
            <h1>All Tours</h1>
            {user.tours.length ? (
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
                    <button className="ui pink button">Create a New Tour</button>
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