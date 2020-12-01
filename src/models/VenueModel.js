import axios from 'axios';

const URL = "https://app.ticketmaster.com/discovery/v2/venues"
const API_KEY = "apikey=5M5EkcsjMabTt7NcP2lF0exIIkdh3aA4"


class VenueModel {
    static searchVenues = async (venue) => {
        try {
            if (venue.includes(' ')) {
                venue = venue.split(' ').join('%20');
            }
            return await axios.get(`${URL}.json?${API_KEY}&keyword=${venue}`, {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            });
        } catch (error) {
            console.log(error);
        }
    }

    static findVenueById = async (venueId) => {
        const urlCall = `${URL}/${venueId}.json?${API_KEY}`;

        try {
            return await axios.get(urlCall, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
}


export default VenueModel;
