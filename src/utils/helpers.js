import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const URL = "https://app.ticketmaster.com/discovery/v2/venues"
const API_KEY = "apikey=5M5EkcsjMabTt7NcP2lF0exIIkdh3aA4"

export const searchVenues = async (venue) => {
    if (venue.includes(' ')) {
        venue = venue.split(' ').join('%20');
    }

    const urlCall = `${URL}.json?${API_KEY}&keyword=${venue}`;

    try {
        return axios.get(urlCall);
    } catch (error) {
        console.log(error);
    }
}


export const findVenueById = async (venueId) => {
    const urlCall = `${URL}/${venueId}.json?${API_KEY}`;

    try {
        return await axios.get(urlCall, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    } catch (error) {
        console.log(error);
    }
}

